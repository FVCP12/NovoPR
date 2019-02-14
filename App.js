import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      /* Fazendo teste com transform */
      <View style={styles.container}>
        <View style={styles.child}/>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  child: {
    flex: 1,
    backgroundColor: "blue",
    transform: [
        {perspective: 850}, //parece que nao tem muita importacia no Android (feito teste no emulador online
        // e o android sem esse objeto funcionou normalmente, no ios deu erro ficou apenas um tira azul 
        //sem o efeito de 3d)
        {translateX: - Dimensions.get('window').width * 0.24}, // move o objeto no eixo x 
        {rotateY: '60deg'}, // rotaciona o objeto nno eixo y
    ],
  },
});
