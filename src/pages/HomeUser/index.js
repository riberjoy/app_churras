import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Alert, Modal, TouchableHighlight, TextInput } from 'react-native';

import stylesGlobal from '../../styleGlobal'
import styles from './styles'

export default function HomeUser() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [isChecked, setChecked] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [part, setPart] = useState(false);
    const [conv, setConv] = useState(false);
    const churras = [];

    function navigationBack() {
        navigation.goBack();
    }

    function limpaInputs() {
        setNome('');
        setChecked(true);
        setModalVisible(false);
    }

    function participar() {
        if (part == false) {
            setPart(true);
        } else {
            setPart(false);
            setConv(false)
        }
    }

    function addConvidado() {
        setModalVisible(false);
        setConv(true);
    }

    function remConvidado() {
        if (conv != false) {

            setConv(false)
        }
    }


    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={stylesGlobal.centeredView}>
                    <View style={stylesGlobal.modalView}>
                        <TouchableHighlight
                            style={stylesGlobal.closeButton}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <AntDesign name="closecircleo" size={24} color="black" />
                        </TouchableHighlight>
                        <View style={stylesGlobal.modalViewContent} >
                            <Text style={stylesGlobal.modalText}> CONVIDADO</Text>
                            <View>
                                <Text style={styles.descInp}> NOME </Text>
                                <TextInput
                                    style={stylesGlobal.input_color}
                                    placeholder="Nome Completo"
                                    onChangeText={text => setNome(text)}
                                    value={nome}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                <Checkbox
                                    text='Ira bebêr'
                                    style={styles.checkbox}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#A66D00' : undefined}
                                />
                                <Text style={styles.descInp}> IRA BEBÊR </Text>
                            </View>

                            <TouchableHighlight
                                style={{ ...stylesGlobal.openButton, backgroundColor: '#FFA800' }}
                                onPress={addConvidado}>
                                <Text style={stylesGlobal.textStyle}>ADICIONAR</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={stylesGlobal.header}>
                <Text style={stylesGlobal.titlePage}> CHURRASCO HAMMER </Text>

                <TouchableOpacity onPress={navigationBack}>
                    <Ionicons name="exit-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {
                churras.length >= 1 ?
                    <>

                        <View style={stylesGlobal.body}>

                        </View>

                        <View style={stylesGlobal.footer}>
                            {part == false ?
                                <TouchableOpacity
                                    onPress={participar}
                                    style={styles.btn}>
                                    <Text style={stylesGlobal.btnFont}> PARTICIPAR </Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={participar}
                                    style={styles.btn}>
                                    <Text style={{ ...stylesGlobal.btnFont, backgroundColor: '#A66D00' }}> CANCELAR PART. </Text>
                                </TouchableOpacity>
                            }

                            {part != false ?
                                conv != true ?
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalVisible(true)
                                        }}
                                        style={styles.btn}
                                        visible={!part && !conv}>
                                        <Text style={stylesGlobal.btnFont}>ADD. CONVIDADO</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={remConvidado}
                                        style={styles.btn}
                                        visible={conv}>
                                        <Text style={{ ...stylesGlobal.btnFont, backgroundColor: '#A66D00' }}>REMOVER CONVIDADO</Text>
                                    </TouchableOpacity>
                                :
                                null
                            }

                        </View>
                    </>
                    :
                    <View style={stylesGlobal.body}>
                        <Text style={stylesGlobal.textEmpty}> NENHUM CHURRASCO MARCADO </Text>
                    </View>
            }
        </View>
    );
}

