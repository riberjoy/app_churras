import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import styles from './styles';

export default function Login() {
    const initialText = 'Usuário';
    const [user, setUser] = useState(initialText);
    const [senha, setSenha] = useState('*****');
    const navigation = useNavigation();

    function navigationToNewUser() {
        navigation.navigate('NewUser');
    }
    function login(){
        const login_user = 0;
        
        if(login_user == 1){
            navigation.navigate('HomeAdm');
        }else{
            navigation.navigate('HomeUser');
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#880000" />
            <View style={styles.header}>
                <Text style={styles.title}>
                    LOGIN
                </Text>
            </View>
            <View style={styles.body}>
                <View style={styles.access}>
                    <Text style={styles.descInp}> USUÁRIO </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setUser(text)}
                        value={user}
                    />
                    <Text style={styles.descInp}> SENHA </Text>
                    <TextInput
                        style={styles.input}
                        textContentType='password'
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