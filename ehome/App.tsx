import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Autentication } from './src/config/auth';
import {global} from './src/style/global';
import { Header, Paragraph } from './src/components/Text';
import { Login } from './src/pages/login';
import { Acount } from './src/pages/acount';


export default function App() {

  Autentication();

  return (
    <Acount/>
  )

  // return (
  //   <Login/>
  // )


  // return (
  //   <View style={styles.container}>
  //     <Header txt="My Title"/>
  //     <Paragraph txt='My Description'/>
  //     <Text>E-Home Teste</Text>
  //     <StatusBar style="inverted" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2E40',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
