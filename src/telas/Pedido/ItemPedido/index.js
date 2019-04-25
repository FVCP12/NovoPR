import React from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';

import img from './img';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemPedido = props => {
    const dim = {
        W: Dimensions.get('window').width,
        H: Dimensions.get('window').height
    }
    return (

        <View style={{
            justifyContent: 'center'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 10,
                        }}>Item:{props.nomItem}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: dim.W / 1.8,
                    }}>
                        <Text>Valor Uni:{props.ValorUni}</Text>
                        <Text>Qtd:{props.qtd}</Text>
                        <Text>Valor:{props.Valor}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                }}
                //onPress={}
                >
                    <Icon name='edit' size={30} color='#999' />
                </TouchableOpacity>
            </View>
            <Image source={img.divis}
                style={{
                    width: dim.W / 1.2,
                    paddingBottom: 10,
                    paddingTop: 10
                }}
            />
        </View>

    );
};

export default ItemPedido;