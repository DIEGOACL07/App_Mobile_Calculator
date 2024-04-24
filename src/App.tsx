/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, View } from 'react-native';
import { styles } from './config/app-theme';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';

function App() {
  return (
    <View style= { styles.background }>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen></CalculatorScreen>
    </View>
  );
}

export default App;
