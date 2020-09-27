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

export default function Login({ navigation }) {

  var email = '';
  var password = '';

  function Logar() {
    if(email == '') {
      Alert.alert('Erro', 'Digite seu Email');
    }else if(password == '') {
      Alert.alert('Erro', 'Digite uma Senha');
    }else if(email != 'anderson@email.com') {
      Alert.alert('Erro', 'Email Incorreto');
    }else if(password != '1234') {
      Alert.alert('Erro', 'Senha Incorreta');
    }else {
      navigation.navigate('Home');
    }
  }

  return(
    <View style={styles.contentContainer}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.loginPageTitle}>Log in</Text>
        </View>

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
      </ScrollView>

      <TouchableOpacity
        onPress={ Logar }
        style={styles.submit}
      >
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => navigation.navigate('Cadastro') }
        style={styles.cadastro}
      >
        <Text style={styles.cadastroText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
  },

 contentContainer: {
      width: '100%',
      height: '92%',
      backgroundColor: '#fff',
      paddingHorizontal: 30,
      paddingTop: 50,
      position: 'relative',
  },

  loginPageTitle: {
      fontSize: 35,
      marginBottom: 30,
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
      bottom: 90,
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
