import React from 'react';
import { View, ImageBackground, Image, Dimensions, TextInput, Button } from 'react-native';

import img from './img';

class Login extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

    }
    logar = () =>{
        console.log('Felipe')
    }
    render() {
        const dim = {
            W: Dimensions.get('window').width,
            H: Dimensions.get('window').height
        }
        return (
            <ImageBackground
                source={img.fundo}
                style={{ flex: 1 }}
                imageStyle={{ resizeMode: 'stretch' }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={img.logoNomeApli}
                        style={{ marginTop: dim.H / 27, width: dim.W / 2, height: dim.W / 6 }}
                    />
                </View>
                <View style={{ flex: 5, alignItems: 'center' }}>
                    <Image source={img.gravata}
                        style={{ marginTop: dim.H / 40, width: dim.W / 3, height: dim.W / 5.5 }}
                    />
                    <Image source={img.botLogo}
                        style={{ marginBottom: dim.H / 27, width: dim.W / 15, height: dim.W / 15 }}
                    />
                    <Image source={img.botLogo}
                        style={{ marginBottom: dim.H / 27, width: dim.W / 15, height: dim.W / 15 }}
                    />
                    <Image source={img.botLogo}
                        style={{ marginBottom: dim.H / 27, width: dim.W / 15, height: dim.W / 15 }}
                    />
                    <TextInput
                        style={{ fontSize: 20, textAlign: "center", marginTop: dim.H / 27}}
                        placeholderTextColor = 'black'
                        placeholder = 'Usuário'
                        maxLength = {20}
                    />
                    <TextInput
                        style={{ fontSize: 20, textAlign: "center", marginBottom: dim.H / 27}}
                        placeholderTextColor = 'black'
                        placeholder = 'Senha'
                        maxLength = {12}
                        secureTextEntry = {true}
                    />
                    <Button
                        onPress={this.logar}
                        title='Logar'
                        color='black'
                        
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={img.logoN}
                        style={{ marginBottom: dim.H / 27, width: dim.W / 3, height: dim.W / 6 }}
                    />
                </View>
            </ImageBackground>
        );
    }

}

export default Login;