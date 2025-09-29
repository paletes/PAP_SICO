import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from "react";
import { TextInput, ActivityIndicator, Colors} from 'react-native-paper';


import styles from "../styles/baseStyles";

export function ForgetPasswordScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.home_image}
                source={require('../imgs/sico-logo.png')}
            />
            <Text style={{ marginTop: 90, textAlign: "center", fontSize: 20 }}>Introduza o e-mail registado na {"\n"} app para efetuar a recuperação {"\n"}  da sua palavra-passe.</Text>
            <TextInput style={styles.forgetpassword_email_txtinput}
                theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                label="E-mail"
                //value={text}
                onChangeText={text => setText(text)}
            />
            <TouchableOpacity activeOpacity={.5} style={styles.btn_recuperar_forgetpassword} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Recuperar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
