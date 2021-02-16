import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import stylesGlobal from '../../styleGlobal'
import styles from './styles'

export default function HomeAdm() {
    const navigation = useNavigation();

    function navigationBack() {
        navigation.goBack();
    }

    let churrasco = [{
        'date': '2021/02/27',
        'id_part': [{
            'id': 2,
            'name': ''
        }],
    }]

    return (
        <View style={styles.container}>
            <View style={stylesGlobal.header}>
                <Text style={stylesGlobal.titlePage}> CHURRASCO HAMMER </Text>

                <TouchableOpacity onPress={navigationBack}>
                    <Ionicons name="exit-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <Text>
                Data Churras
                Qnt. Pessoas
                Total Arrecadado.


                Total Gasto.
                Total Gasto em Comida.
                Total Gasto em Bebida.


                Listar Participantes.
                Listar Convidados.
            </Text>
        </View>
    );
}