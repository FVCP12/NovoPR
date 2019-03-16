import React from 'react';
import { View, ImageBackground, Image, Dimensions } from 'react-native';
import { Constants } from "expo";

import img from './img';

class Ini extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
      
        const intervalo = setInterval(() => {   
           this.props.navigation.navigate('Logar');
           clearInterval(intervalo);
        }, 1000);


    }
    render() {
        const dim = {
            W: Dimensions.get('window').width,
            H: Dimensions.get('window').height
        }
        return (
            <ImageBackground
                source={img.fundo}
                style={{ flex: 1 , marginTop: Constants.statusBarHeight }}
                imageStyle={{ resizeMode: 'stretch' }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={img.logoNomeApli}
                        style={{ marginTop: dim.H / 27, width: dim.W / 2, height: dim.W / 6 }}
                    />
                </View>
                <View style={{ flex: 5, alignItems: 'center' }}>
                    <Image source={img.paletoTodo}
                        style={{ marginTop: dim.W / 80, width: dim.W / 1.6, height: dim.H * 2 / 3  }}
                    />
                    <View style={{position: 'absolute', paddingTop: dim.W / 4}}>
                      <Image source={img.botLogo}
                          style={{ marginBottom: dim.W / 20 , width: dim.W / 15, height: dim.W / 15 }}
                      />
                      <Image source={img.botLogo}
                          style={{ marginBottom: dim.W / 20, width: dim.W / 15, height: dim.W / 15 }}
                      />
                      <Image source={img.botLogo}
                          style={{ marginBottom: dim.W / 20, width: dim.W / 15, height: dim.W / 15 }}
                      />
                    </View>
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

export default Ini;