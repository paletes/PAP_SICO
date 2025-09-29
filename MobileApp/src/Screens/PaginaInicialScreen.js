import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert, AsyncStorage} from 'react-native';
import React, {useState, useEffect} from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";

import styles from "../styles/baseStyles";
import { ScrollView } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';

export function PaginaInicialScreen({ navigation }) {
    
    return (

        <SafeAreaView style={{flex: 1, marginTop:StatusBar.currentHeight, backgroundColor: "#ffffff", alignItems: 'center'}}>
            <View style={styles.header}>
                <Text style={styles.header_title}>Faturas</Text>
            </View>

            <ScrollView style={{ width: '100%', alignContent: 'center'}}>
            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_todasfaturas}  onPress={() => navigation.navigate('ListagemScreen') }>
                <Text style={{ color: "#ffffff", fontSize: 18, textAlign: "center"}}>Todas as faturas</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_despesas_gerais_familiares} onPress={() => navigation.navigate('DespesasGeraisFamiliares') }>
                <Image source={require('../imgs/users-solid.png')} resizeMode='contain' style={{height: '20%' }} />
                <Text style={{ color: "#ffffff", fontSize: 18, textAlign: "center"}}>Despesas Gerais Familiares</Text>
            </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_saude} onPress={() => navigation.navigate('Saude')}>
                <Image source={require('../imgs/heartbeat-solid.png')} resizeMode='contain' style={{height: '27%' }} />
                <Text style={{ color: "#ffffff", fontSize: 19, textAlign: "center" }}>Saúde</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_educaçao} onPress={() => navigation.navigate('Educacao')}>
                <Image source={require('../imgs/graduation-cap-solid.png')} resizeMode='contain' style={{height: '27%' }} />
                <Text style={{ color: "#ffffff", fontSize: 19, textAlign: "center"}}>Educação</Text>
            </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_habitaçao} onPress={() => navigation.navigate('Habitacao')}>
                <Image source={require('../imgs/home-solid.png')} resizeMode='contain' style={{height: '27%' }} />
                <Text style={{ color: "#ffffff", fontSize: 19, textAlign: "center" }}>Habitação</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_lares} onPress={() => navigation.navigate('Lares')}>
                <Image source={require('../imgs/human-cane-2.png')} resizeMode='contain' style={{height: '40%' }} />
                <Text style={{ color: "#ffffff", fontSize: 19, textAlign: "center"}}>Lares</Text>
            </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_reparaçao_de_automoveis} onPress={() => navigation.navigate('Rep_Automoveis')}>
                <Image source={require('../imgs/car-solid.png')} resizeMode='contain' style={{height: '27%' }} />
                <Text style={{ color: "#ffffff", fontSize: 18, textAlign: "center"}}>Reparação de Automóveis</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_reparaçao_de_motociclos} onPress={() => navigation.navigate('Rep_Motociclos')}>
                <Image source={require('../imgs/motorcycle-solid.png')} resizeMode='contain' style={{height: '27%' }} />
                <Text style={{ color: "#ffffff", fontSize: 18, textAlign: "center"}}>Reparação de Motociclos</Text>
            </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_restauraçao_e_alojamento} onPress={() => navigation.navigate('RestauracaoeAlojamento')}>
                <Image source={require('../imgs/utensils-solid.png')} resizeMode='contain' style={{height: '27%'}} />
                <Text style={{ color: "#ffffff", fontSize: 18, textAlign: "center"}}>Restauração e Alojamento</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_cabeleireiros} onPress={() => navigation.navigate('Cabeleireiros')}>
                <Image source={require('../imgs/hair-dryer.png')} resizeMode='contain' style={{height: '33%'}} />
                <Text style={{ color: "#ffffff", fontSize: 18, textAlign: "center"}}>Cabeleireiros</Text>
            </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_atividades_veterinarias} onPress={() => navigation.navigate('AtividadesVeterinarias')}>
                <Image source={require('../imgs/paw-solid.png')} resizeMode='contain' style={{height: '27%' }} />
                <Text style={{ color: "#ffffff", fontSize: 18, textAlign: "center" }}>Atividades Veterinárias</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_passes_mensais} onPress={() => navigation.navigate('PassesMensais')}>
                <Image source={require('../imgs/bus-alt-solid.png')} resizeMode='contain' style={{height: '27%' }} />
                <Text style={{ color: "#ffffff", fontSize: 18, textAlign: "center"}}>Passes Mensais</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

/* Exemplo para botão com icon
<TouchableOpacity style={styles.btn_todasfaturas} >
                <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center", flex:.7 }}>Todas as faturas</Text>
                <Image source={require('../imgs/dots-horizontal-circle-outline-2.png')} resizeMode='contain' style={{flex:.3 }} />
            </TouchableOpacity>
*/