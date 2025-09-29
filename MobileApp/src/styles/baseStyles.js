import {
    StyleSheet
} from 'react-native';

// Styles are here
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
     
    keyboard: {
        flex: 1
    },

    btnentrar: {
        justifyContent:'center'  ,       
        marginTop: 120,
        backgroundColor: "#000000",
        width: 150,
        height: 50,
        borderRadius: 10,
         
    },
    btncriarconta: {
        justifyContent:'center'  ,       
        marginTop: 50,
        backgroundColor: "#800000",
        width: 240,
        height: 50,
        borderRadius: 10,
    },
    home_image: {
        width: 195,
        height: 65
    },
    login_image: {
        width: 195,
        height: 65
    },
    login_email_txtinput: {
        marginTop: 90,
        width: '74%',
        backgroundColor: 'transparent',
    },
    login_password_txtinput: {
        width: '74%',
        backgroundColor: 'transparent'
    },
    btn_login_entrar: {
        justifyContent:'center'  ,       
        marginTop: 80,
        backgroundColor: "#000000",
        width: 180,
        height: 50,
        borderRadius: 10
    },
    btn_login_forgetpass: {
        padding: 11,
        marginTop: 50,
        backgroundColor: "#800000",
        width: 290,
        height: 50,
        borderRadius: 10,
    },
    registo_nome_txtinput: {
        marginTop: 70,
        width: '32%',
        backgroundColor: 'transparent',
        marginRight: '10%',
    },
    registo_apelido_txtinput: {
        marginTop: 70,
        width: '32%',
        backgroundColor: 'transparent',
    },    
    registo_email_txtinput: {
        width: '74%',
        backgroundColor: 'transparent',
    },   
    registo_password_txtinput: {
        width: '74%',
        backgroundColor: 'transparent',
    },   
    btn_registo_criarconta: {
        justifyContent:'center'  ,       
        marginTop: 85,
        backgroundColor: "#000000",
        width: 220,
        height: 50,
        borderRadius: 10
    },
    forgetpassword_email_txtinput: {
        marginTop: 50,
        width: 310,
        backgroundColor: 'transparent',
    },
    btn_recuperar_forgetpassword: {
        padding: 11,
        marginTop: 100,
        backgroundColor: "#800000",
        width: 195,
        height: 50,
        borderRadius: 10,
    },
    PaginaInicial: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1
    },
    header_title: {
        fontSize: 25,
        color: '#800000',
        letterSpacing: 1,
        position: 'relative'
    },
    header: {
        borderColor: '#ffffff', 
        borderBottomWidth: 15, 
        borderTopWidth: 5, 
        backgroundColor: "#ffffff" , 
        flexDirection: "row", 
        alignItems: 'center', 
        paddingRight: 10, 
        paddingLeft: 10
    },

    headerlist: {
        borderColor: '#ffffff', 
        borderTopWidth: 5, 
        backgroundColor: "#ffffff" , 
        alignItems: 'center', 
        textAlign: 'center',
        alignContent: 'center',
        paddingRight: 20, 
        paddingLeft: 20,
        borderBottomWidth: 15, 
    },

    header_title_list: {
        fontSize: 22,
        color: '#800000',
        letterSpacing: 1,
        position: 'relative',
        alignItems: 'center', 
        textAlign: 'center',
        alignContent: 'center'    },

    headerinvoice: {
        borderColor: '#ffffff', 
        borderBottomWidth: 15, 
        borderTopWidth: 5, 
        backgroundColor: "#ffffff" , 
        flexDirection: "row", 
        alignItems: 'center', 
        paddingRight: 10, 
        paddingLeft: 10, 
        marginBottom: 30
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 30,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2, 
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    },

    //Botões de todas as categorias
    btn_todasfaturas: {
        padding: 11,
        marginTop: '3%',
        backgroundColor: "#000000",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '6%'
    },
    btn_despesas_gerais_familiares: {
        padding: 11,
        marginTop: '3%',
        backgroundColor: "#49c1dc",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '4%'
    },
    btn_saude: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#ff5958",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '6%'
    },
    btn_educaçao: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#f58b37",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '4%'
    },
    btn_habitaçao: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#95d854",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '6%'
    },
    btn_lares: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#6eb565",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '4%'
    },
    btn_reparaçao_de_automoveis: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#2f7dc8",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '6%'
    },
    btn_reparaçao_de_motociclos: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#55a1d3",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '4%'
    },
    btn_restauraçao_e_alojamento: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#f8be1e",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '6%'
    },
    btn_cabeleireiros: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#ae92dd",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '4%'
    },
    btn_atividades_veterinarias: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#cb746b",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '6%',
        marginBottom: 25
    },
    btn_passes_mensais: {
        padding: 11,
        marginTop: 25,
        backgroundColor: "#279efc",
        width: '40%',
        height: 125,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: '4%',
        marginLeft: '4%',
        marginBottom: 25
    },
        //Acabaram os botões de todas as categorias

    btn_account_changepass: {
        padding: 11,
        marginTop: 150,
        backgroundColor: "#000000",
        width: 300,
        height: 50,
        borderRadius: 10,
        //borderWidth: 2,
    },
    btn_account_changeemail: {
        padding: 11,
        marginTop: 20,
        backgroundColor: "#000000",
        width: 300,
        height: 50,
        borderRadius: 10,
        //borderWidth: 2,
    },
    btn_account_deleteaccount: {
        padding: 11,
        marginTop: 20,
        backgroundColor: "#000000",
        width: 300,
        height: 50,
        borderRadius: 10,
        //borderWidth: 2,
    },
    btn_account_logout: {
        padding: 11,
        marginTop: 20,
        backgroundColor: "#000000",
        width: 300,
        height: 50,
        borderRadius: 10,
        //borderWidth: 2,
    },

    //Alterar a palavra-passe
    container_change_password: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    change_password_image: {
        alignItems: "center",
        justifyContent: "center"
    },
    changepassword_atual_txtinput: {
        marginTop: 50,
        width: 290,
        backgroundColor: 'transparent',
    },
    changepassword_new_txtinput: {
        width: 290,
        backgroundColor: 'transparent',
    },

    btn_alterar_changepassword: {
        padding: 11,
        marginTop: 90,
        backgroundColor: "#800000",
        width: 240,
        height: 50,
        borderRadius: 10,

    },
    btn_cancelar_changepassword: {
        padding: 11,
        marginTop: 20,
        backgroundColor: "#000000",
        width: 240,
        height: 50,
        borderRadius: 10,
    },

    //Alterar o E-mail
    changeemail_atual_txtinput: {
        marginTop: 40,
        width: 290,
        backgroundColor: 'transparent',
    },
    changeemail_novo_txtinput: {
        width: 290,
        backgroundColor: 'transparent',
    },
    btn_alterar_changeemail: {
        padding: 11,
        marginTop: 90,
        backgroundColor: "#800000",
        width: 240,
        height: 50,
        borderRadius: 10,
    },
    btn_cancelar_changeemail: {
        padding: 11,
        marginTop: 20,
        backgroundColor: "#000000",
        width: 240,
        height: 50,
        borderRadius: 10,
    },

    //Eliminar Conta
    deleteaccount_password_txtinput: {
        marginTop: 40,
        width: 290,
        backgroundColor: 'transparent',
    },
    btn_eliminarconta_deleteaccount: {
        padding: 11,
        marginTop: 90,
        backgroundColor: "#800000",
        width: 240,
        height: 50,
        borderRadius: 10,
    },
    btn_cancelar_deleteaccount: {
        padding: 11,
        marginTop: 20,
        backgroundColor: "#000000",
        width: 240,
        height: 50,
        borderRadius: 10,
    },

    //Nova Fatura
    nome_newinvoice: {
        fontSize: 16,
        marginRight: '10%'

    },
    nome_newinvoice_txtinput: {
        width: '65%',
        backgroundColor: 'transparent',
        height: 30,
        marginTop: '1%',
        alignContent: 'center',
    },
    categoria_newinvoice: {
        fontSize: 15,
        marginRight: '5%',
        marginLeft: '35%'
    },

    select_categoria_newinvoice: {
        width: '65%',
        fontSize: 15,
        backgroundColor: "#ffffff",
        borderColor: '#ababab'
        
    },

    select_dia_data: {
        height: 30,
        width: '15%',
        backgroundColor: 'transparent',
        marginLeft: '3%',
        marginRight: '3%',
    },

    select_ano_data: {
        height: 30,
        width: '20%',
        backgroundColor: 'transparent',
        marginLeft: '3%',

    },

    data_newinvoice: {
        marginTop: '1%',
        fontSize: 15,
        marginRight: '10%'
    },

    barras_newinvoice: {
        marginTop: '1%',
        fontSize: 15,
    },

    valor_newinvoice: {
        marginTop: '1%' ,
        fontSize: 15,
    },

    select_valor_newinvoice: {
        height: 30,
        width: '30%',
        backgroundColor: 'transparent',
        marginLeft: '28%',
    },

    nif_newinvoice: {
        marginTop: '1%',
        fontSize: 15,
    },

    select_nif_newinvoice: {
        height: 30,
        width: '30%',
        backgroundColor: 'transparent',
        marginLeft: '20%',
    },

    submetido_newinvoice: {
        marginRight: '53%',
        marginTop: '2%',
        fontSize: 15,
    },

    viewimage: {
        flex: 1,
        alignItems: 'center',
        
      },

      detalhetext: {
        fontSize: 16,
         marginTop: 10,
        
      },
      detalhetext1: {
        fontSize: 16,
         marginTop: 10,
         textAlign: 'center'
        
      },

    imageContainer: {
        padding: 15,
      },
      
    image: {
        width: 140,
        height: 200,
        resizeMode: 'cover',
      },

    btn_select_image: {
        padding: 20,
        backgroundColor: "#000000",
        width: 70,
        height: 70,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight: 36

      },

      btn_pick_image: {
        padding: 20,
        backgroundColor: "#000000",
        width: 70,
        height: 70,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 36,
        
        
      },
      
    btn_save_invoice: {
        padding: '3%',
        marginTop: '8%',
        backgroundColor: "#800000",
        width: '40%',
        height: '65%',
        borderRadius: 10,
      },
      
      btn_cancel_invoice: {
        padding: '3%',
        marginTop: '8%',
        backgroundColor: "#000000",
        width: '40%',
        height: '65%',
        borderRadius: 10,
        marginLeft: '5%'
      },

      btn_delete_invoice: {
        justifyContent:'center',
        marginTop: '8%',
        backgroundColor: "#800000",
        width: 220,
        height: 50,
        borderRadius: 10,
        marginBottom: '5%'
      },

    datePickerStyle: {
        width: 200,
        marginTop: 20,
      },
      btnContainer: {
        padding: 30,
      },
      // This only works on iOS
      datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
     
});