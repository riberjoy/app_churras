import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#880000',
    },
    header:{
        height:200,
        paddingTop: 20,
        paddingLeft:25
    },
    title:{
        color:"white",
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:'26%',
        paddingVertical:50,
        fontSize:30,
        fontWeight: 'bold',
    },
    body:{
        paddingHorizontal: '10%',
        justifyContent: "space-evenly",
        overflow: 'scroll'
    },
    input: {
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 20,
        height: 40,
        paddingLeft: 15
    },
    descInp: {
        color: 'white',
        fontWeight: 'bold',

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
})