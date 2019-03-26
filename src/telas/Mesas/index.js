import React from 'react';
import { View, ImageBackground, Image, Dimensions, Text, FlatList } from 'react-native';
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
    _mesasRender = ({item}) => {
        return <Mesa nome={item.nome} status={item.status} />
    }
    render() {
        const dim = {
            W: Dimensions.get('window').width,
            H: Dimensions.get('window').height
        }
        const _mes = [
            {
                nome: "1",
                status: 'Disponivel'
            },
            {
                nome: "2",
                status: 'Disponivel'
            },
            {
                nome: "3",
                status: 'Disponivel'
            },
            {
                nome: "4",
                status: 'Disponivel'
            },
            {
                nome: "5",
                status: 'Disponivel'
            },
            {
                nome: "6",
                status: 'Disponivel'
            },
        ]
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
                        fontSize: 40,
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
                    <FlatList
                        data={_mes}
                        renderItem={this._mesasRender}
                        keyExtractor={item=>item.nome}
                    />
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