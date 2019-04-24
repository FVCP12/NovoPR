import React from 'react';
import { View, ImageBackground, Image, Dimensions, Text } from 'react-native';
import { Constants } from "expo";

import img from './img';
import BarInf from '../../BarInf';
import Icon from 'react-native-vector-icons/FontAwesome';

class Pedido extends React.Component {
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
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    //backgroundColor: 'blue',
                    width: dim.W * 2 / 3
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>
                        Mesa: 1
                    </Text>
                    <View style={{
                        alignItems: 'center'
                    }}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 10,
                        }}
                        >Valor</Text>
                        <Text style={{
                            fontSize: 15,
                            marginBottom: 10,
                        }}
                        >30,00</Text>
                    </View>
                </View>
                <View style={{
                    flex: 11,
                    backgroundColor: 'red'
                }}>
                    <Text>FelipeCorpoDoPedido</Text>
                    <View style={{
                        marginBottom: 1,
                        marginRight: 10
                    }}>
                        <Icon name='plus-circle' size={60} color='rgb(238,206,31)' />
                    </View>
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

export default Pedido;