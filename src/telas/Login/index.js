import React from 'react';
import { View, ImageBackground, Image, Dimensions } from 'react-native';
import { Constants } from "expo";

import img from './img';
import CamLogin from './CamLogin';

class Login extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

    }
    logar = () => {
        this.props.navigation.navigate('Mesas');
    }
    render() {
        const dim = {
            W: Dimensions.get('window').width,
            H: Dimensions.get('window').height
        }
        return (
            <ImageBackground
                source={img.fundo}
                style={{ flex: 1, marginTop: Constants.statusBarHeight }}
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
                    
                    <CamLogin altu={dim.H} larg={dim.W} onPress={this.logar}/>

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