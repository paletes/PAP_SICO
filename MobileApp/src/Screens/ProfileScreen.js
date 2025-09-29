import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from "react";

import styles from "../styles/baseStyles";

export function ProfileScreen({ navigation }) {
    return (
        <SafeAreaView >
            <View style={{ flexDirection: 'row', height: 65}}>
            <Image style={styles.pi_image}
                source={require('../imgs/sico-logo.png')}
            />
            </View>
            
            
        </SafeAreaView>
    );
}
