import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Cadastro({ navigation }) {

  var email = '';
  var password = '';
  var passwordAgain = '';

  function Cadastrar() {
    if(email == '') {
      Alert.alert('Erro', 'Digite seu Email');
    }else if(password == '') {
      Alert.alert('Erro', 'Digite uma Senha');
    }else if(passwordAgain == '') {
      Alert.alert('Erro', 'Digite Novamente a Senha');
    }else if(password != passwordAgain) {
      Alert.alert('Erro', 'As Senhas Não Combinam.');
    }else {
      Alert.alert('Cadastro Feito!', 'Seu cadastro foi feito com sucesso.');
      navigation.navigate('Login');
    }
  }

  return(
    <View style={styles.contentContainer}>
      <ScrollView>
        <TextInput
          placeholder="Seu Email"
          autoCapitalize="none"
          onChangeText={ (text) => email = text }
          style={styles.input}
        />

        <TextInput
          placeholder="Sua Senha"
          secureTextEntry={true}
          onChangeText={ (text) => password = text }
          style={styles.input}
        />

        <TextInput
          placeholder="Repita a Senha"
          secureTextEntry={true}
          onChangeText={ (text) => passwordAgain = text }
          style={styles.input}
        />
      </ScrollView>

      <TouchableOpacity
        onPress={ Cadastrar }
        style={styles.submit}
      >
        <Text style={styles.submitText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

 contentContainer: {
      width: '100%',
      height: '92%',
      backgroundColor: '#fff',
      paddingHorizontal: 30,
      paddingTop: 50,
      position: 'relative',
  },

  input: {
      paddingVertical: 20,
      borderBottomColor: '#F0AFA1',
      borderBottomWidth: 1,
      fontSize: 23,
      marginBottom: 15,
  },

  submit: {
      alignItems: 'center',
      backgroundColor: '#FE5530',
      paddingVertical: 15,
      borderRadius: 30,
      marginTop: 30,
      position: 'absolute',
      bottom: 20,
      left: 20,
      width: '100%',
  },

  submitText: {
      color: '#fff',
      fontSize: 18,
  },

  cadastro: {
      alignItems: 'center',
      backgroundColor: '#FE5530',
      paddingVertical: 15,
      borderRadius: 30,
      marginTop: 30,
      position: 'absolute',
      bottom: 20,
      left: 20,
      width: '100%',
  },

  cadastroText: {
      color: '#fff',
      fontSize: 18,
  },
});
