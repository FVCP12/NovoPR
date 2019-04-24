import React from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';

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
                    {
                        props.status ?
                            <Text style={{color: 'red'}}>Status: Ocupado</Text>
                        :
                            <Text style={{color: 'green'}}>Status: Disponível</Text>
                    }
                    
                </View>
                <TouchableOpacity style={{
                    justifyContent:'center',
                }}
                //onPress={}
                >
                    <Icon name='chevron-right' size={30} color='#999' />
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

export default Mesa;