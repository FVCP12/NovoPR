import { createStackNavigator, createAppContainer } from 'react-navigation';

//importando telas
import Login from './src/telas/Login';

const AppNavegarPaginas = createStackNavigator({
  Logar: Login
}, { initialRouteName: 'Logar'});

export default createAppContainer(AppNavegarPaginas);
