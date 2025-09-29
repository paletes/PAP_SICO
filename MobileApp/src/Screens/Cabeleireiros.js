import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert, AsyncStorage, FlatList, ScrollView } from 'react-native';
import React, {useState, useEffect} from "react";
import axios from "axios";
import { List, ActivityIndicator, Colors } from 'react-native-paper';


import styles from "../styles/baseStyles";
import { DetalheScreen } from './DetalheScreen';

export function CabeleireirosScreen({ navigation }) {
    const cat = useState("1");
    const [email, setEmail] = useState("");
    const [listagem, setListagem] = useState("");

    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false);


    const STORAGE_KEY = '@save_email';

    AsyncStorage.getItem('@save_email', (err, result) => {
        setEmail(result);
        setIsSubmit(true)
    });
      

      useEffect(() => {
        const authenticate = async () => {
            setLoading(true);
          axios.post(
            "https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/listagem.php",
          JSON.stringify({
            email: email,
            categoria: 9
          })
          )
            
          .then((response) => {
            setLoading(false);
            console.log(response.data);
            setListagem(response.data);
          })
          
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
        };
      if (isSubmit) authenticate();
      }, [isSubmit]);

        
         

    return (
        
        <SafeAreaView style={{flex: 1, marginTop:StatusBar.currentHeight, backgroundColor: "#ffffff"}}>
             
             <View style={styles.headerlist}>
                <Text style={styles.header_title_list}> Cabeleireiros</Text>
            </View>
            {loading ? <ActivityIndicator animating={true} color={Colors.black} size="large" style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}/>: 
            <ScrollView style={{backgroundColor: '#ffffff'}}>
   
        <View style={{flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            paddingVertical: 20}}>
        
    {listagem.length === 0 ? (
          <View >
            <Text style={{textAlign: 'center', fontSize: 20, justifyContent: 'center', marginTop: 50}}>Não tem faturas registadas nesta categoria!</Text>
          </View>
        ) : (
            
          <FlatList
          data={listagem}
          renderItem={({item}) => (
              <List.Item
                title={item.nome}
                description={item.data}
                descriptionNumberOfLines={1}
                titleStyle={{fontSize: 20}}
                left={props => <List.Icon {...props} icon={require('../imgs/file-invoice-solid.png')} />}
                right={props => <List.Icon {...props} icon={require('../imgs/angle-right-solid.png')} />}
                onPress={() => navigation.navigate('DetalheScreen', item)}
              />
              
            )}
            
            keyExtractor={item => item.idfaturas.toString()}
          />
          
        )}
        

    
  </View>
  </ScrollView>}
        </SafeAreaView>
    );
    }