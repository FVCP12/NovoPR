import React from 'react';
import { View, ImageBackground, Image, Dimensions, Text, FlatList, ActivityIndicator } from 'react-native';
import { Constants } from "expo";

import img from './img';
import Mesa from './Mesa';
import BarInf from '../../BarInf';
import Icon from 'react-native-vector-icons/FontAwesome';

class Mesas extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

        this.state = {
            _mes: [],
            retornoOk: false,
            retornoErro: false,
        }

    }
    atuLisMes = () => {
        fetch('http://192.168.0.14:3000/Mesas')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    _mes: responseJson,
                    retornoOk: true
                });
            })
            .catch(
                this.setState({
                    retornoErro: true
                })
            )
    }
    componentDidMount() {
        this.atuLisMes();
    }
    _mesasRender = ({ item }) => {
        return <Mesa nome={item.nome} status={item.status} />
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
                {
                    this.state.retornoOk ?
                        <View style={{
                            flex: 12,
                            //backgroundColor: 'red'
                        }}>
                            <FlatList
                                data={this.state._mes}
                                renderItem={this._mesasRender}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        : this.state.retornoErro ?
                            <View style={{
                                flex:12,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Icon name='frown-o' size={80} color='rgb(238,206,31)' />
                                <Text>Erro ao conectar com o servidor!</Text>
                            </View>
                            :
                            <ActivityIndicator size="large" color="rgb(238,206,31)" />
                }
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