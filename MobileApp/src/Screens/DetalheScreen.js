import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, Alert, AsyncStorage, FlatList, ScrollView } from 'react-native';
import React, {useState, useEffect} from "react";
import { Image } from 'react-native-elements';
import styles from "../styles/baseStyles";
import { List, ActivityIndicator, Colors } from 'react-native-paper';
import axios from "axios";


export function DetalheScreen({ navigation, route }) {
    let item = route.params;

    const [email, setEmail] = useState("");
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
        "https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/DeleteInvoice.php",
      JSON.stringify({
        email: email,
        idfaturas: item.idfaturas
    })
      )
        .then((response) => {
          console.log(response.data);
          if(response.data === 'Fatura apagada')
          {
            setLoading(false);
            Alert.alert('Apagar fatura', 'A fatura apresentada foi apagada com sucesso.');
            navigation.navigate('PaginaInicialScreen');

          }
          else{
            setLoading(false);
            Alert.alert('Apagar fatura', response.data);
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
        <SafeAreaView style={{flex: 1, marginTop:StatusBar.currentHeight, backgroundColor: "#ffffff"}}>
             
        <View style={styles.headerlist}>
           <Text style={styles.header_title_list}> Detalhe da Fatura</Text>
       </View>
{loading ? <ActivityIndicator animating={true} color={Colors.black} size="large" style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}/>:

       <ScrollView style={{backgroundColor: '#ffffff'}}>
       
       <View style={{alignItems: 'center', marginTop: 10}}>
            <Image
                source={{ uri: item.imagem }}
                style={{ width: 210, height: 280}}
                PlaceholderContent={<ActivityIndicator animating={true} color={Colors.red400}/>}
        />
        </View>

        <View style={{flexDirection: "row", marginTop: 50, justifyContent: 'center'}}>
        <View style={{justifyContent: 'flex-start'}}>
            <Text style={styles.detalhetext}>Nome da fatura:</Text>
            <Text style={styles.detalhetext}>Categoria: </Text>
            <Text style={styles.detalhetext}>Data: </Text>
            <Text style={styles.detalhetext}>Valor: </Text>
            <Text style={styles.detalhetext}>NIF do Comerciante: </Text>
            <Text style={styles.detalhetext}>Submetido: </Text>
        </View>

        <View style={{justifyContent: 'flex-start'}}>
            <Text style={styles.detalhetext1}>{item.nome}</Text>
            <Text style={styles.detalhetext1}>{item.idcategoria == '1'? <Text>Despesas Gerais Familiares</Text> : item.idcategoria == '2'? <Text>Saúde</Text> :  item.idcategoria == '3'? <Text>Educação</Text> :  item.idcategoria == '4'? <Text>Habitação</Text> :  item.idcategoria == '5'? <Text>Lares</Text> :  item.idcategoria == '6'? <Text>Reparação de Automóveis</Text> :  item.idcategoria == '7'? <Text>Reparação de Motociclos</Text> :  item.idcategoria == '8'? <Text>Restauração e Alojamento</Text> :  item.idcategoria == '9'? <Text>Cabeleireiros</Text> :  item.idcategoria == '10'? <Text>Atividades Veterinárias</Text> :  item.idcategoria == '11'? <Text>Passes Mensais</Text> : <Text></Text> }</Text>
            <Text style={styles.detalhetext1}>{item.data}</Text>
            <Text style={styles.detalhetext1}>{item.valor} €</Text>
            <Text style={styles.detalhetext1}>{item.nifcomerciante}</Text>
            <Text style={styles.detalhetext1}>{item.regularizado == '1'? <Text>Sim</Text>: <Text>Não</Text> }</Text>
            </View>
        </View>
        
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={.5} style={styles.btn_delete_invoice} onPress={retrieveData}>
                <Text style={{ color: "#ffffff", fontSize: 22, textAlign: "center" }}>Eliminar fatura</Text>
            </TouchableOpacity>
        </View>
</ScrollView>
}
        </SafeAreaView>
    );
}
