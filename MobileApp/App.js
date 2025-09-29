import React from 'react';
import { LoginScreen } from "./src/Screens/LoginScreen";
import { HomeScreen } from "./src/Screens/HomeScreen";
import { RegistoScreen } from "./src/Screens/RegistoScreen";
import { ForgetPasswordScreen } from "./src/Screens/ForgetPasswordScreen";
import { PaginaInicialScreen } from "./src/Screens/PaginaInicialScreen";
import { Camara } from "./src/Screens/CamaraScreen";
import { ChangePasswordScreen } from "./src/Screens/ChangePasswordScreen";
import { ChangeEmailScreen } from "./src/Screens/ChangeEmailScreen";
import { DeleteAccountScreen } from "./src/Screens/DeleteAccountScreen";
import { NewInvoice } from "./src/Screens/NewInvoiceScreen";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { InvoicesSent } from './src/Screens/InvoicesSent';
import { AccountScreen } from './src/Screens/AccountScreen';
import { ListagemScreen } from './src/Screens/ListagemScreen';
import { DespesasGeraisFamiliares } from './src/Screens/DespesasGeraisFamiliares';
import { DetalheScreen } from './src/Screens/DetalheScreen';
import { SaudeScreen } from './src/Screens/Saude';
import { EducacaoScreen } from './src/Screens/Educacao';
import { HabitacaoScreen } from './src/Screens/Habitacao';
import { LaresScreen } from './src/Screens/Lares';
import { Rep_AutomoveisScreen } from './src/Screens/Rep_Automoveis';
import { Rep_MotociclosScreen } from './src/Screens/Rep_Motociclos';
import { RestauracaoeAlojamentoScreen } from './src/Screens/RestauracaoeAlojamento';
import { CabeleireirosScreen } from './src/Screens/Cabeleireiros';
import { AtividadesVeterinariasScreen } from './src/Screens/AtividadesVeterinarias';
import { PassesMensaisScreen } from './src/Screens/PassesMensais';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// IMPORTANT: this will cause FormData requests to fail.
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
GLOBAL.FormData = GLOBAL.originalFormData || GLOBAL.FormData


const tabs = () => (
  <Tab.Navigator tabBarOptions={{
    activeTintColor: '#800000',
    inactiveTintColor: '#ababab',
    style: {
      backgroundColor: '#ffffff',
    },
  }}>
    <Tab.Screen name="Pagina" component={PaginaInicialScreen} options={{
          tabBarLabel: 'Faturas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document" color={color} size={size}/>
          ),
        }}
        />
    <Tab.Screen name="NewInvoice" component={NewInvoice} options={{
          tabBarLabel: 'Nova Fatura',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }}/>
    
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="RegistoScreen" component={RegistoScreen} options={{headerShown:false}}/>
          <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} options={{headerShown:false}}/>
          <Stack.Screen name="PaginaInicialScreen" component={tabs} options={{headerShown:false}}/>
          <Stack.Screen name="ListagemScreen" component={ListagemScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Educacao" component={EducacaoScreen} options={{headerShown:false}}/>
          <Stack.Screen name="DespesasGeraisFamiliares" component={DespesasGeraisFamiliares} options={{headerShown:false}}/>
          <Stack.Screen name="Saude" component={SaudeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Habitacao" component={HabitacaoScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Lares" component={LaresScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Rep_Automoveis" component={Rep_AutomoveisScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Rep_Motociclos" component={Rep_MotociclosScreen} options={{headerShown:false}}/>
          <Stack.Screen name="RestauracaoeAlojamento" component={RestauracaoeAlojamentoScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Cabeleireiros" component={CabeleireirosScreen} options={{headerShown:false}}/>
          <Stack.Screen name="AtividadesVeterinarias" component={AtividadesVeterinariasScreen} options={{headerShown:false}}/>
          <Stack.Screen name="PassesMensais" component={PassesMensaisScreen} options={{headerShown:false}}/>
          <Stack.Screen name="DetalheScreen" component={DetalheScreen} options={{headerShown:false}}/>


          <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{headerShown:false}}/>
          <Stack.Screen name="ChangeEmailScreen" component={ChangeEmailScreen} options={{headerShown:false}}/>
          <Stack.Screen name="DeleteAccountScreen" component={DeleteAccountScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer> 
);

export default App;