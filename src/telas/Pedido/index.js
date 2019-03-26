import React from 'react';
import { View, ImageBackground, Image, Dimensions, Text } from 'react-native';
import { Constants } from "expo";

import img from './img';
import Mesa from './Mesa';
import BarInf from '../../BarInf'

class Mesas extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

    }
    render() {
        const dim = {
            W: Dimensions.get('window').width,
            H: Dimensions.get('window').height
        }
        return (
            <ImageBackground
                source={img.fundo}
                style={{
                    flex: 1,
                    marginTop: Constants.statusBarHeight,
                    alignItems: 'center',
                    paddingTop: dim.H / 20,
                    paddingBottom: dim.H / 20
                }}
                imageStyle={{ resizeMode: 'stretch' }}
            >
                <View style={{
                    flex: 1,
                   // backgroundColor: 'blue'
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>
                        Mesas
                </Text>
                </View>
                <View style={{
                    flex:12,
                    //backgroundColor: 'red'
                }}>
                    <Mesa nome={'1'} status={'Disponivel'} />
                    <Mesa nome={'1'} status={'Disponivel'} />
                    <Mesa nome={'1'} status={'Disponivel'} />
                    <Mesa nome={'1'} status={'Disponivel'} />
                </View>
                <View style={{
                    justifyContent: 'flex-end',
                    flex: 2,
                   // backgroundColor: 'green'
                }}>
                    <BarInf />
                </View>
            </ImageBackground>
        );
    }

}

export default Mesas;