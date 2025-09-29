import React, {useState, useEffect} from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity, Alert, AsyncStorage, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import { TextInput, ActivityIndicator, Colors} from 'react-native-paper';

import axios from "axios";

import styles from "../styles/baseStyles";

export function LoginScreen({ navigation }) {  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showpassword, setshowPassword] = useState(false);


  const [isSubmit, setIsSubmit] = useState(false);
  
  const STORAGE_KEY = '@save_email'

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, email);
      setIsSubmit(true)

    } catch (error) {
      console.log("Error saving data" + error);
    }
  };

  

  useEffect(() => {
    const authenticate = async () => {
      setLoading(true);
      axios.post(
        "https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/login.php",
      JSON.stringify({
        email: email,
        password: password,
      })
      )
        .then((response) => {
          console.log(response.data);
          if(response.data === 'Data Matched')
          {
            setLoading(false);
                navigation.navigate('PaginaInicialScreen');
          }
          else{
            setLoading(false);
            Alert.alert('Iniciar Sessão', response.data);
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
<KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboard}
    >    
    {loading ? <ActivityIndicator animating={true} color={Colors.black} size="large" style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}/>:

    <SafeAreaView style={styles.container}>   
      <Image style={styles.login_image}
        source={require('../imgs/sico-logo.png')}
      />
      <TextInput style={styles.login_email_txtinput}
        theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
        label="E-mail"
        value={email}
        //value={text}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput style={styles.login_password_txtinput}
        theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
        label="Palavra-passe"
        value={password}
        //value={text}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity activeOpacity={.5} style={styles.btn_login_entrar} onPress={() => storeData(email)}>  
        <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}>Iniciar Sessão</Text>
      </TouchableOpacity>

    
    </SafeAreaView>
  }
    </KeyboardAvoidingView>
          </TouchableWithoutFeedback>

    
  );
};  

//onPress={() => setIsSubmit(true)} 
  /*<TouchableOpacity style={styles.btn_login_forgetpass} onPress={() => navigation.navigate('ForgetPasswordScreen')}>
        <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}>Esqueci-me da palavra-passe</Text>
      </TouchableOpacity>*/