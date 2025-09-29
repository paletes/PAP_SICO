import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, AsyncStorage, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useState, useEffect} from "react";
import { TextInput, ActivityIndicator, Colors} from 'react-native-paper';

import axios from "axios";

import styles from "../styles/baseStyles";

export function DeleteAccountScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        "https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/DeleteAccount.php",
      JSON.stringify({
        email: email,
        password: password,
      })
      )
        .then((response) => {
          console.log(response.data);
          if(response.data === 'A sua conta foi apagada')
          {
            setLoading(false);
            Alert.alert('Eliminar conta', 'A sua conta foi apagada.');
            navigation.navigate('Home');
          }
          else{
            setLoading(false);
            Alert.alert('Eliminar conta', response.data);
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
            
            <Text style={{ marginTop: 70, fontSize: 20, textAlign: "center" }}>Introduza a palavra-passe para {"\n"}prosseguir com a eliminação {"\n"}permanente da sua conta</Text>
            
            <TextInput style={styles.deleteaccount_password_txtinput}
                theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                label="Palavra-passe"
                //value={text}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize="none"
                secureTextEntry={true}            
                />

            <TouchableOpacity activeOpacity={.5} style={styles.btn_eliminarconta_deleteaccount} onPress={() => retrieveData()}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Eliminar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_cancelar_deleteaccount} onPress={() => navigation.navigate('PaginaInicialScreen')}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Cancelar</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
}
        </TouchableWithoutFeedback>
    );
}

/*<TouchableOpacity style={styles.btn_login_entrar} onPress={() => retrieveData()}>  
        <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}>Iniciar Sessão</Text>
      </TouchableOpacity>*/