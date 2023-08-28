import React, { useContext, useEffect, useState } from 'react'
import { Appearance, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/globalTheme'
import { lightTheme } from '../theme/lightTheme'
import { useForm } from '../hooks/useForm'
import { Keyboard } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { Alert } from 'react-native'

export const LoginScreen = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme);
    });

    const {signIn, errorMessage, removeError} = useContext(AuthContext);

    const { correo, contrasena, onChange } = useForm({
        correo: '',
        contrasena: ''
    });

    useEffect(() => {
        if (errorMessage?.length === 0) return;
        if (errorMessage && errorMessage.length > 0) {
            Alert.alert('Inicio de sesión incorrecto', errorMessage,
            [
                {
                    text: 'Ok',
                    onPress: removeError
                }
            ]   
            );
        }
    }, [errorMessage])
    

    const onLogin = () => {
        Keyboard.dismiss();
        signIn({correo, contrasena});  
    }

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >
                <View style={{ ...styles.globalMargin, alignItems: 'center', flex: 1, justifyContent: 'center' }}>

                    <Text style={{ ...theme == 'light' ? lightTheme.title : styles.title }}>Inicio de sesión</Text>

                    <View style={{ width: '100%', marginTop: 40 }}>
                        <Text style={{ ...theme == 'light' ? lightTheme.title : styles.title, fontSize: 20, marginLeft: 10, opacity: 0.7 }}>Correo</Text>
                        <TextInput
                            placeholder='email@email.com'
                            placeholderTextColor= {theme == 'light' ? 'grey' : 'white'}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={{ backgroundColor: theme == 'light' ? 'white' : '#24262d', borderColor: theme == 'light' ? 'grey' : 'white', borderRadius: 5, borderWidth: 1, marginHorizontal: 10, padding: 10, marginBottom: 20, opacity: theme == 'light' ? 1 :0.7, color: theme == 'light' ? 'black' : 'white' }}

                            onChangeText={(value) => onChange(value, 'correo')}
                            value={correo}
                            onSubmitEditing={onLogin}

                        />
                        <Text style={{ ...theme == 'light' ? lightTheme.title : styles.title, fontSize: 20, marginLeft: 10, opacity: 0.7 }}>Contraseña</Text>
                        <TextInput
                            placeholder='**********'
                            placeholderTextColor= {theme == 'light' ? 'grey' : 'white'}
                            style={{ backgroundColor: theme == 'light' ? 'white' : '#24262d', borderColor: theme == 'light' ? 'grey' : 'white', borderRadius: 5, borderWidth: 1, marginHorizontal: 10, padding: 10, marginBottom: 20, opacity: theme == 'light' ? 1 :0.7, color: theme == 'light' ? 'black' : 'white' }}
                            secureTextEntry
                            onChangeText={(value) => onChange(value, 'contrasena')}
                            value={contrasena}
                            onSubmitEditing={onLogin}
                        />
                        <View style={{ marginHorizontal: 10 }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#7e3af2",
                                    width: '100%',
                                    height: 40,
                                    borderRadius: 8,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    marginTop: 25,
                                }}
                                onPress={onLogin}
                            >
                                <Text style={{ ...styles.title, fontSize: 18 }}>Iniciar sesión</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </KeyboardAvoidingView>

        </>
    )
}
