import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';

import stylesGlobal from '../../styleGlobal'
import styles from './styles';
import image from '../../../assets/icon_churras_b.png';
//icon_churras_b.png';


export default function Login() {
    const [user, setUser] = useState();
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    function navigationToNewUser() {
        navigation.navigate('NewUser');
    }
    function login(){
        const login_user = 0;
        
        if(user == 'adm' && senha == 'adm123'){
            navigation.navigate('HomeAdm');
        }else{
            if(user == 'user' && senha == 'user123'){
                navigation.navigate('HomeUser');
            }else{
                alert('Usuário ou senha incorretos')
            }
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#880000" />
            <View style={styles.header}>
                <Image source={image} style={stylesGlobal.image} />
            </View>
            <View style={styles.body}>
                <View style={styles.access}>
                    <Text style={styles.descInp}> USUÁRIO </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Usuário"
                        onChangeText={text => setUser(text)}
                        value={user}
                    />
                    <Text style={styles.descInp}> SENHA </Text>
                    <TextInput
                        style={styles.input}
                        textContentType='password'
                        secureTextEntry={true} 
                        placeholder='********'
                        onChangeText={text => setSenha(text)}
                        value={senha}
                    />
                </View>
                <TouchableOpacity
                    onPress={login}
                    style={styles.btnLogin}>
                    <Text style={styles.btnFont}>LOGAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={navigationToNewUser}
                    >
                    <Text style={styles.link} >
                        CRIAR UMA CONTA
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}