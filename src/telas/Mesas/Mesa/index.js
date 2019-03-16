import React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { Constants } from "expo";

import img from './img';
import Icon from 'react-native-vector-icons/FontAwesome';

const Mesa = props => {
    const dim = {
        W: Dimensions.get('window').width,
        H: Dimensions.get('window').height
    }
    return (

        <View style={{
            justifyContent: 'center'
        }}>
            <View style={{
                flexDirection:'row',
                justifyContent: 'space-between',
            }}>
                <View>
                    <Text style={{
                        fontSize:20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>Mesa:{props.nome}</Text>
                    <Text>Status:{props.status}</Text>
                </View>
                <View style={{
                    justifyContent:'center',
                }}>
                    <Icon name='chevron-right' size={30} color='#999' />
                </View>
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

export default Mesa;