import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    header: {
        backgroundColor: '#880000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    body: {
        height: '75%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    footer: {
        height: 120,
        alignContent: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    titlePage: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descInp: {
        color: 'white',
        fontWeight: 'bold',

    },
    input: {
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 20,
        height: 40,
        paddingLeft: 15
    },
    input_color: {
        marginBottom: 30,
        borderRadius: 20,
        height: 40,
        paddingLeft: 15,
        color: '#808080',
        backgroundColor: '#E2E2E2'
    },

    btn: {
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnFont: {
        textAlign: 'center',
        paddingHorizontal: 60,
        paddingVertical: 10,
        backgroundColor: '#FFA800',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 20
    },
    link: {
        color: 'white',
        textDecorationLine: 'underline'
    },
    textEmpty:{
        fontSize: 18, 
        paddingTop:50,
        paddingHorizontal:50,
    },


    // --------     MODAL     -----------
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 56,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalViewContent: {
        width: 250,
        height: 200,
        justifyContent: 'space-between'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    closeButton: {
        marginLeft: 210,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})