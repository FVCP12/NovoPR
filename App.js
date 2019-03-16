import { createStackNavigator, createAppContainer } from 'react-navigation';

//importando telas
import Ini   from './src/telas/Ini';
import Login from './src/telas/Login';
import Mesas from './src/telas/Mesas';

const AppNavegarPaginas = createStackNavigator({
  Ini: Ini,
  Logar: Login,
  Mesas: Mesas
}, { initialRouteName: 'Mesas'});

export default createAppContainer(AppNavegarPaginas);
