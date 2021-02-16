import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput,TextField } from 'react-native';

import styles from './styles'

export default function NewUser() {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState();
    const [confSenha, setConfSenha] = useState();
    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');
    const navigation = useNavigation();

    function coonfirmaSenha() {
        if (senha != confSenha) {
            alert('senhas não coincidem');
        }
    }

    function navigationBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigationBack}>
                    <Feather style={styles.icon} name="arrow-left" size={28} color='white' />
                </TouchableOpacity>
                <Text style={styles.title}>
                    NOVA CONTA
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.descInp}> NOME </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    onChangeText={text => setNome(text)}
                    value={nome}
                />
                <Text style={styles.descInp}> SETOR </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Setor da empresa"
                    onChangeText={text => setSetor(text)}
                    value={setor}
                />
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
                    placeholder="********"
                    onChangeText={text => setSenha(text)}
                    value={senha}
                />
                <Text style={styles.descInp}> CONFIRMAR SENHA </Text>
                <TextInput
                    style={styles.input}
                    textContentType='password'
                    placeholder="********"
                    onChangeText={text => { setConfSenha(text); coonfirmaSenha() }}
                    value={confSenha}
                />

                <TextField
                    label={'Senha'}
                    placeholder={'Digite sua senha'}
                />

                <TouchableOpacity
                    onPress={() => alert('cadastrado')}
                    style={styles.btnLogin}>
                    <Text style={styles.btnFont}>CADASTRAR</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}