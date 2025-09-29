import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, StatusBar, TouchableHighlight, Modal, AsyncStorage, Alert } from 'react-native';
import React, { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "../styles/baseStyles";
import { set } from 'react-native-reanimated';

export function AccountScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const STORAGE_KEY = '@save_email';
  
    const retrieveData = async () => {
      try {
        const userEmail = await AsyncStorage.getItem(STORAGE_KEY);
        if(userEmail !== null) {
            setEmail(userEmail)
        }
      } catch (error) {
          console.log("Error retrieving data" + error);
      }
    };

    const clearStorage = async () => {
        try {
          await AsyncStorage.clear()
          Alert.alert('Sessão terminada');
          navigation.navigate('Home')
            } catch (e) {
          alert('Ocorreu um erro.')
        }
      }

    const [isModalVisible, setisModalVisible] = useState(false);

    const changeModalVisible = (bool) =>{
        setisModalVisible(bool);
    }
    return (
        <SafeAreaView style={{flex: 1, marginTop:StatusBar.currentHeight, backgroundColor: "#ffffff", alignItems: 'center'}}>
        <View style={styles.header}>
            <Text style={styles.header_title}>Conta</Text>
        </View>
        <View style={styles.container}>
            <Image source={require('../imgs/user-circle-solid.png')} resizeMode='contain' style={{flex:.5 }} />           
        
            <TouchableOpacity activeOpacity={.5} style={styles.btn_account_changepass} onPress={() => navigation.navigate('ChangePasswordScreen')}>
                <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}> Alterar palavra-passe</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_account_changeemail} onPress={() => navigation.navigate('ChangeEmailScreen')  }>
                <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}>Alterar e-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_account_deleteaccount} onPress={() => navigation.navigate('DeleteAccountScreen')}>
                <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}>Eliminar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_account_logout} onPress={() => clearStorage()}>
                <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}>Terminar Sessão</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
    );
}
