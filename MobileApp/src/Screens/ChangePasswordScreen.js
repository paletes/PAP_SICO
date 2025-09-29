import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, AsyncStorage, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useState, useEffect}  from "react";
import { TextInput, ActivityIndicator, Colors} from 'react-native-paper';
import axios from "axios";


import styles from "../styles/baseStyles";

export function ChangePasswordScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
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
        "https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/ChangePassword.php",
      JSON.stringify({
        email: email,
        password: password,
        newpassword: newpassword,
      })
      )
        .then((response) => {
          console.log(response.data);
          if(response.data === 'Password atualizada')
          {
            setLoading(false);
            Alert.alert('Alteração de palavra-passe', 'A sua palavra-passe foi atualizada.');
            navigation.navigate('Home');
          }
          else{
            setLoading(false);
            Alert.alert('Alteração de palavra-passe', response.data);
          }
          setIsSubmit(false);
          setLoading(false);
        })
        
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
      };
    if (isSubmit) authenticate();
    }, [isSubmit]);
    

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
{loading ? <ActivityIndicator animating={true} color={Colors.black} size="large" style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}/>:
        <SafeAreaView style={styles.container_change_password}>
            <View style={styles.change_password_image}>
                <Image style={styles.home_image}
                source={require('../imgs/sico-logo.png')}
            />            
            <Text style={{ marginTop: 70, textAlign: "left", fontSize: 20 }}>Alteração de palavra-passe</Text>

            </View>

            <TextInput style={styles.changepassword_atual_txtinput}
                theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                label="Palavra-passe atual"
                //value={text}
                value={password}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize="none"
                secureTextEntry={true}   
            />

            <TextInput style={styles.changepassword_new_txtinput}
                theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                label="Nova Palavra-passe"
                //value={text}
                value={newpassword}
                onChangeText={(text) => setNewPassword(text)}
                autoCapitalize="none"
                secureTextEntry={true}   
            />
           
            <View style={styles.change_password_image}>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_alterar_changepassword} onPress={() => retrieveData()}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_cancelar_changepassword} onPress={() => navigation.navigate('PaginaInicialScreen')}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Cancelar</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
}
        </TouchableWithoutFeedback>

    );
}

/*
        <Text style={{ marginLeft: 50, marginTop: 80, textAlign: "left", fontSize: 20 }}>Palavra-passe atual:</Text>
        <Text style={{ marginLeft: 50, marginTop: 50, textAlign: "left", fontSize: 20 }}>Nova Palavra-passe:</Text>
        <TextInput style={styles.changepassword_txtinput}
                theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                label="Confirmar Palavra-passe"
                //value={text}
                onChangeText={text => setText(text)}
        />

*/ 