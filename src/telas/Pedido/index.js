import React from 'react';
import { View, ImageBackground, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Constants } from "expo";

import img from './img';
import BarInf from '../../BarInf';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemPedido from './ItemPedido';

class Pedido extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

        this.state = {
            status: true, // indica se a mesa tem pedido ou não

        }

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
                    //backgroundColor: 'red'
                }}>
                    <ItemPedido />
                    <ItemPedido />
                    <ItemPedido />
                    <ItemPedido />

                </View>
                <View style={{
                    flex: 1.5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: dim.W / 1.2,
                    //marginLeft: dim.W * 3.8/5
                }}>
                    {
                        this.state.status ?
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: dim.W / 1.5,
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: 'rgb(238,206,31)',
                                    borderRadius: 45
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                        width: dim.W / 4,
                                        height: dim.H / 20,
                                        color: 'white',
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>
                                        Finalizar
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: 'red',
                                    borderRadius: 45
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                        width: dim.W / 4,
                                        height: dim.H / 20,
                                        color: 'white',
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <TouchableOpacity style={{
                                    backgroundColor: 'green',
                                    borderRadius: 45
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                        width: dim.W / 4,
                                        height: dim.H / 20,
                                        color: 'white',
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>
                                        Iniciar
                                </Text>
                                </TouchableOpacity>
                            </View>
                    }
                    <TouchableOpacity>
                        <Icon name='plus-circle' size={40} color='rgb(238,206,31)' />
                    </TouchableOpacity>
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