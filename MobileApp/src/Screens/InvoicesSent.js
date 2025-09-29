import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import React from "react";

import styles from "../styles/baseStyles";

export function InvoicesSent({ navigation }) {
    return (

        <SafeAreaView style={{flex: 1, marginTop:StatusBar.currentHeight, backgroundColor: "#ffffff", alignItems: 'center'}}>
            <View style={styles.header}>
                <Text style={styles.header_title}> Enviar Faturas</Text>
            </View>
        </SafeAreaView>
    );
}
