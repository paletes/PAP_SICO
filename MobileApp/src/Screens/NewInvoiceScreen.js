import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, StatusBar, Button, AsyncStorage, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from "react";
import { TextInput, Switch, ActivityIndicator, Colors} from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

import axios from "axios";

import styles from "../styles/baseStyles";


export function NewInvoice({ navigation }) {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [NIF, setNIF] = useState("");
  const [image, setImage] = useState("");

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
        "https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/NewInvoice.php",
      JSON.stringify({
        email: email,
        name: name,
        image: image,
        categoria: value,
        day: day,
        month: month,
        year: year,
        price: price,
        NIF: NIF,
        regularizado: isSwitchOn,
      })
      )
      
        .then((response) => {
          console.log(response.data);
          if(response.data === 'Fatura criada')
          {
            Alert.alert('Nova fatura','A fatura foi guardada com sucesso.');
            navigation.navigate('PaginaInicialScreen');
            setLoading(false);
            setName(null);
            setDay(null);
            setMonth(null);
            setYear(null);
            setPrice(null);
            setNIF(null);
            setImage(null);
            setValue(null);
            setIsSwitchOn(false);
          }
          else{
   
            Alert.alert('Nova fatura',response.data);
            setLoading(false);

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

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Despesas Gerais Familiares', value: '1' },
    { label: 'Saúde', value: '2' },
    { label: 'Educação', value: '3' },
    { label: 'Habitação', value: '4' },
    { label: 'Lares', value: '5' },
    { label: 'Reparação de Automóveis', value: '6' },
    { label: 'Reparação de Motociclos', value: '7' },
    { label: 'Restauração e Alojamento', value: '8' },
    { label: 'Cabeleireiros', value: '9' },
    { label: 'Atividades Veterinárias', value: '10' },
    { label: 'Passes Mensais', value: '11' },
  ]);

  const [pickedImagePath, setPickedImagePath] = useState('');
  


  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permissão necessária",
        "O utilizador não autorizou o acesso à galeria.");
      setLoading(false);

      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    // Explore the result
    console.log(result);

    if (!result.cancelled) {   
       setLoading(true);

      setPickedImagePath(result.uri);
      console.log(result.uri);
    }

    const formData = new FormData();
            formData.append('image', {
              uri: result.uri,
              name: 'invoice.png',
              type: 'image/png'
            });
            formData.append('Content-Type', 'image/png');

            fetch('https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/upload.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                  body: formData
              })
              .then((response) => response.json())
              .then((responseJson) => {
                setImage(responseJson);
                console.log(responseJson); 
                Alert.alert('Imagem selecionada');
                setLoading(false);

                })
                .catch((error) => {
                    console.log(error);
                  });
}

const openCamera = async () => {
  // Ask the user for the permission to access the camera
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    Alert.alert(
      "Permissão necessária",
      "O utilizador não autorizou o acesso à câmara.");
    return;
  }

  const result = await ImagePicker.launchCameraAsync();

  // Explore the result
  console.log(result);

  if (!result.cancelled) {
    setLoading(true);

    setPickedImagePath(result.uri);
    console.log(result.uri);
  }
  const formData = new FormData();
            formData.append('image', {
              uri: result.uri,
              name: 'invoice.png',
              type: 'image/png'
            });
            formData.append('Content-Type', 'image/png');

            fetch('https://alpha.soaresbasto.pt/~joaocorreia/App_Connection/upload.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                  body: formData
              })
              .then((response) => response.json())
              
              .then((responseJson) => {
                setImage(responseJson);
                console.log(responseJson); 
                Alert.alert('Imagem selecionada');
                setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                  });
}
    
    
      
    const theme = {
        roundness: 2,
        colors: {
          primary: '#800000',
          accent: '#800000',
        },
      };

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    



    return (
      
      <ScrollView style={{backgroundColor: '#ffffff'}}>
       
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
<KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboard}
    >
        <SafeAreaView style={{flex: 1, marginTop:StatusBar.currentHeight, backgroundColor: "#ffffff", alignItems: 'center'}}>
            <View style={styles.headerinvoice}>
                <Text style={styles.header_title}> Nova Fatura</Text>
            </View>
            {loading ? <ActivityIndicator animating={true} color={Colors.black} size="large" style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 200}}/>: 
            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.nome_newinvoice}>Nome</Text>
                <TextInput style={styles.nome_newinvoice_txtinput}
                    theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                    //value={text}
                    value={name}
                    onChangeText={text => setName(text)}
                />

            </View>
            
            <View style={{ flexDirection: 'row', marginTop: '8%', alignItems: 'center' }}>
            <Text style={styles.categoria_newinvoice}>Categoria</Text>
                <DropDownPicker style={styles.select_categoria_newinvoice}
                  dropDownContainerStyle={{
                  backgroundColor: 'white',
                  color: '#ffffff',
                  width: '65%',
                  borderColor: '#ababab'
                  }}
                  
                placeholder='Escolher uma categoria'
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                />
                
                </View>


            <View style={{ flexDirection: 'row', marginTop: '5%', alignContent: 'center', alignItems: 'center'}}>
                <Text style={styles.data_newinvoice}>Data</Text>
                <TextInput style={styles.select_dia_data}
                    placeholder="Dia"
                    theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}    
                    keyboardType = 'numeric'           
                    //value={text}
                    value={day}
                    onChangeText={text => setDay(text)}
                />
                <Text style={styles.barras_newinvoice}>/</Text>
                <TextInput style={styles.select_dia_data}
                    placeholder="Mês"
                    theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                    keyboardType = 'numeric'
                    //value={text}
                    value={month}
                    onChangeText={text => setMonth(text)}
                />
                <Text style={styles.barras_newinvoice}>/</Text>
                <TextInput style={styles.select_ano_data}
                    placeholder="Ano"
                    theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}
                    keyboardType = 'numeric'
                    //value={text}
                    value={year}
                    onChangeText={text => setYear(text)}
                />
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%', alignContent: 'center', alignItems: 'center'}}>
                <Text style={styles.valor_newinvoice}>Valor total pago</Text>
                <TextInput style={styles.select_valor_newinvoice}
                    placeholder="10.75"
                    theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}    
                    keyboardType = 'numeric'           
                    //value={text}
                    value={price}
                    onChangeText={text => setPrice(text)}
                />
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%', alignContent: 'center', alignItems: 'center'}}>
                <Text style={styles.nif_newinvoice}>NIF do Comerciante</Text>
                <TextInput style={styles.select_nif_newinvoice}
                    theme={{ colors: { primary: '#800000',underlineColor:'transparent',}}}    
                    keyboardType = 'numeric'           
                    //value={text}
                    value={NIF}
                    onChangeText={text => setNIF(text)}
                />
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%'}}>
                <Text style={styles.submetido_newinvoice}>Submetido</Text>
                <Switch theme={theme} value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>

                
        
                


      <View style={{ flexDirection: 'row', marginTop: 40, alignContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity  activeOpacity={.5} style={styles.btn_select_image} onPress={() => showImagePicker()} >
          <Image source={require('../imgs/galeria.png')} resizeMode='contain' style={{flex:1 }} />
        </TouchableOpacity>
        <Text >OU</Text>
        <TouchableOpacity activeOpacity={.5} style={styles.btn_pick_image} onPress={() => openCamera()} >
          <Image source={require('../imgs/camara.png')} resizeMode='contain' style={{flex:1 }} />
        </TouchableOpacity>
      </View>
      

      <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginBottom: '10%', marginTop: 15}}>
      <TouchableOpacity activeOpacity={.5} style={styles.btn_save_invoice} onPress={() => retrieveData()} >
                <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} style={styles.btn_cancel_invoice} onPress={() => navigation.goBack(setName(null),
            setDay(null),
            setMonth(null),
            setYear(null),
            setPrice(null),
            setNIF(null),
            setImage(null),
            setValue(null),
            setIsSwitchOn(false))} >
                <Text style={{ color: "#ffffff", fontSize: 20, textAlign: "center" }}>Cancelar</Text>
            </TouchableOpacity>

            </View>

            </View>
            }
        </SafeAreaView>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </ScrollView>
    );
}



 /* <View style={{ flexDirection: 'row', marginTop: 40}}>
                <Picker
                    style={select_categoria_newinvoice}
                    placeholder={{ label: "Selecione uma categoria", value: null }}
                    onValueChange={(value) => console.log(value)} 
                    items={[
                        { label: 'Despesas Gerais Familiares', value: 'desp_ger_fam' },
                        { label: 'Saúde', value: 'saude' },
                        { label: 'Educação', value: 'educacao' },
                        { label: 'Habitação', value: 'habitacao' },
                        { label: 'Lares', value: 'lares' },
                        { label: 'Reparação de Automóveis', value: 'rep_automoveis' },
                        { label: 'Reparação de Motociclos', value: 'rep_motociclos' },
                        { label: 'Restauração e Alojamento', value: 'rest_aloj' },
                        { label: 'Cabeleireiros', value: 'cabeleireiros' },
                        { label: 'Atividades Veterinárias', value: 'atv_veterinarias' },
                        { label: 'Passes Mensais', value: 'passes_mensais' },
                    ]}
                />
            </View> 
            
            
                const [pickedImagePath, setPickedImagePath] = useState('');

            // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("O utilizador não permitiu o acesso á câmara!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A data selecionada foi: ", date);
      hideDatePicker();
    };

            <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
      </View>

      <Button onPress={openCamera} title="Tirar fotografia" />
      
      const select_categoria_newinvoice = {
        inputIOS: {
            color: 'black',
            paddingHorizontal: 35,
            paddingBottom: 10,
        },
        inputAndroid: {
            color: 'black',
        },
        placeholderColor: 'black',
        underline: { borderTopWidth: 0 },
        
        
    };
      */