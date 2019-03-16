import React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { Constants } from "expo";

import img from './img';
import Icon from 'react-native-vector-icons/FontAwesome';

const BarInf = props => {
    const dim = {
        W: Dimensions.get('window').width,
        H: Dimensions.get('window').height
    }
    return (

        <View style={{
            justifyContent: 'flex-end',
        }}>
            <View style={{
                flexDirection: 'row',
                width: dim.W / 1.2,
                justifyContent: 'space-between',
                alignItems: 'flex-end'
            }}>
                <Icon name='list-alt' size={30} color='#999' />
                <Icon name='credit-card' size={40} color='#999' />
                <Icon name='home' size={60} color='#999' />
                <Icon name='book' size={40} color='#999' />
                <Icon name='cogs' size={30} color='#999' />
            </View>
        </View>

    );
};

export default BarInf;