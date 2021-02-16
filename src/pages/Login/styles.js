import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#880000',
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        height:'40%',
        alignItems: 'center',
        justifyContent:'center',
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    body:{
        height:'50%',
    },
    access: {  
        height: 200,
        paddingHorizontal: '10%',
        justifyContent: "space-evenly"
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
    btnLogin: {
        paddingHorizontal:50,
        paddingVertical:50,
        alignItems:'center'
    },
    btnFont: {
        paddingHorizontal:60,
        paddingVertical:10,
        backgroundColor:'#FFA800',
        color:'white',
        fontWeight:'bold',
        borderRadius:20
    },
    footer: {
        height:100,
        justifyContent: 'center',
        alignItems:'center'
    },
    link:{
        color:'white',
        textDecorationLine: 'underline'
    }
})