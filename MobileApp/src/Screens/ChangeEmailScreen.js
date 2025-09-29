import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, AsyncStorage, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useState, useEffect} from "react";
import { TextInput, ActivityIndicator, Colors} from 'react-native-paper';
import axios from "axios";


import styles from "../styles/baseStyles";

export function ChangeEmailScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [emailatual, setemailatual] = useState("");
    const [emailnovo, setemailnovo] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const [loading, setLoading] = useState(false);


  const STORAGE_KEY = '@save_email';
  
  const retrieveData = async () => {
    try {
      const userEmail = await AsyncStorage.getItem(STORAGE_KEY);
      if(userEmail !== null) {
          setEmail(userEmail)
          setIsSubmit(true)
      }
    } catch (error) {
        console.log("Error retrieving data" + error);
    }
  };

  useEffect(() => {
    const authenticate = async () => {
      setLoading(true);
      axios.post(
        "https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/ChangeEmail.php",
      JSON.stringify({
        email: email,
        emailatual: emailatual,
        emailnovo: emailnovo,
      })
      )
        .then((response) => {
          console.log(response.data);
          if(response.data === 'E-mail atualizado')
          {
            setLoading(false);
            Alert.alert('Alteração de e-mail', 'O seu e-mail foi atualizado.');
            navigation.navigate('Home');
          }
          else{
            setLoading(false);
            Alert.alert('Alteração de e-mail', response.data);
          }
          setIsSubmit(false);
          setLoading(false);
    
        })
        
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
      };
    if (isSubmit) authenticate();
    }, [isSubmit]);
    
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
{loading ? <ActivityIndicator animating={true} color={Colors.black} size="large" style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}/>:
        <SafeAreaView style={styles.container}>
            
                <Image style={styles.home_image}
                source={require('../imgs/sico-logo.png')}
            />
            
            
            <Text style={{ marginTop: 80, fontSize: 20 }}>Alteração de E-mail</Text>
            <TextInput style={styles.changeemail_atual_txtinput}
                theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                label="E-mail atual"
                //value={text}
                value={emailatual}
                onChangeText={(text) => setemailatual(text)}
                autoCapitalize="none"
            />

            <TextInput style={styles.changeemail_novo_txtinput}
                theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                label="Novo E-mail"
                //value={text}
                value={emailnovo}
                onChangeText={(text) => setemailnovo(text)}
                autoCapitalize="none"
            />
            
            <TouchableOpacity activeOpacity={.5} style={styles.btn_alterar_changeemail} onPress={() => retrieveData()}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_cancelar_changeemail} onPress={() => navigation.navigate('PaginaInicialScreen')}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Cancelar</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
}
        </TouchableWithoutFeedback>
    );
}