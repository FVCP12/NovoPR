import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';


const CamLogin = props => {

    return (
        <View style={{alignItems:'center'}}>
            <TextInput
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    backgroundColor: 'white',
                    borderColor: 'grey',
                    borderWidth: 1,
                    width: props.larg / 2,
                }}
                placeholderTextColor='rgb(220,220,220)'
                placeholder='Usuário'
                maxLength={20}
            />
            <TextInput
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    backgroundColor: 'white',
                    borderColor: 'grey',
                    borderWidth: 1,
                    width: props.larg / 2,
                    marginTop: 20
                }}
                placeholderTextColor='rgb(220,220,220)'
                placeholder='Senha'
                maxLength={12}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={props.onPress}
                style={{
                    backgroundColor: 'rgb(238,206,31)',
                    width: props.larg / 3,
                    height: 40,
                    marginTop: 30,
                    borderRadius: 50,
                    paddingTop: 9,
                }}
            >
                <Text style={{
                    textAlign: "center",
                }}>Login</Text>
            </TouchableOpacity>
        </View>
    );

}


export default CamLogin;