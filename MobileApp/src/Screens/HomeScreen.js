import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from "react";

import styles from "../styles/baseStyles";

export function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.home_image}
                source={require('../imgs/sico-logo.png')}
            />
            <Text style={{ marginTop: 90, textAlign: "center", fontSize: 20 }}>A app que o fará deixar de {"\n"} guardar as faturas em papel!</Text>
            <TouchableOpacity activeOpacity={.5} style={styles.btnentrar} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btncriarconta} onPress={() => navigation.navigate('RegistoScreen')}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Criar nova conta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
