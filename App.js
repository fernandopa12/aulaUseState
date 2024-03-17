import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/favicon.png')}/>
      <Text>Seja bem vindo</Text>
      <TextInput placeholder='Digite seu e-mail' style={styles.txtInput}/>
      <Button title='ENTRAR' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:20
  },
  txtInput:{
    width:'80%',
    backgroundColor:'#808080',
    height:40,
    borderRadius:20
  }
});
