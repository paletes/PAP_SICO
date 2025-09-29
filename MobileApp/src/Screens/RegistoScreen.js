import React, {useState, useEffect} from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, ActivityIndicator, Colors} from 'react-native-paper';

import axios from "axios";

import styles from "../styles/baseStyles";

export function RegistoScreen({ navigation }) {

  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);


  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      setLoading(true);
      axios.post(
        "https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/registo.php",
      JSON.stringify({
        name: name,
        nickname: nickname,
        email: email,
        password: password,
      })
      )
        .then((response) => {
          console.log(response.data);
          if(response.data === 'Conta criada com sucesso')
          {
            setLoading(false);
            Alert.alert('Nova conta', 'Conta criada com sucesso.');    
            navigation.navigate('Home');
          }
          else{
            setLoading(false);
            Alert.alert('Nova conta', response.data);
          }
          setLoading(false);
          setIsSubmit(false);
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
      <Image style={styles.login_image}
        source={require('../imgs/sico-logo.png')}
      />
      <View style={{ flexDirection: 'row'}}>
      <TextInput style={styles.registo_nome_txtinput}
        theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}} //Este "theme" muda a cor do TextInput, a predefinida é roxo
        label="Nome"
        //value={text}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput style={styles.registo_apelido_txtinput}
        theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
        label="Apelido"
        //value={text}
        value={nickname}
        onChangeText={(text) => setNickName(text)}
      />
      </View>
      <TextInput style={styles.registo_email_txtinput}
        theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
        label="E-mail"
        //value={text}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput style={styles.registo_password_txtinput}
        theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
        label="Palavra-passe"
        //value={text}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      
      <TouchableOpacity activeOpacity={.5} style={styles.btn_registo_criarconta} onPress={() => setIsSubmit(true)}>
        <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}>Criar Conta</Text>
      </TouchableOpacity>
    
    </SafeAreaView>
}
    </TouchableWithoutFeedback>
  )
  
}

/*
<TextInput style={styles.registo_password_txtinput}
        label="Confirmar Palavra-passe"
        //value={text}
        onChangeText={text => setText(text)}
        secureTextEntry={true}
      */