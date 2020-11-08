import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';

export default function Orcamento({ navigation }) {
	const [selectedValue, setSelectedValue] = useState("");

	return(
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.pageDesc}>
					Orçamento Grátis de Instalação e Manuntenção de Ar Condicionados com os melhores profissionais.
				</Text>

				<View style={styles.formContainer}>
					<Text style={styles.formTitle}>
						Descreva o que você precisa
					</Text>

					<TextInput
			          placeholder="Seu Nome"
			          style={styles.input}
			        />

			        <TextInput
			          placeholder="Seu Email"
			          style={styles.input}
			        />

			        <Picker
			        	selectedValue={selectedValue}
        				style={styles.selectBox}
			        >
			        	<Picker.Item label="Selecione um Serviço" value="" />
			        	<Picker.Item label="Instalação" value="Instalacao" />
			        	<Picker.Item label="Manuntenção" value="Manuntencao" />
			        </Picker>

			        <Picker
			        	selectedValue={selectedValue}
        				style={styles.selectBox}
			        >
			        	<Picker.Item label="Selecione o Modelo do Aparelho" value="" />
			        	<Picker.Item label="Janela" value="Janela" />
			        	<Picker.Item label="Split" value="Split" />
			        	<Picker.Item label="Piso Teto" value="Piso_teto" />
			        	<Picker.Item label="Cassete" value="Cassete" />
			        	<Picker.Item label="Outros" value="Outros" />
			        </Picker>

			        <Picker
			        	selectedValue={selectedValue}
        				style={styles.selectBox}
			        >
			        	<Picker.Item label="O Aparelho apresenta problemas?" value="" />
			        	<Picker.Item label="Sim" value="Sim" />
			        	<Picker.Item label="Não" value="Nao" />
			        </Picker>

			        <Picker
			        	selectedValue={selectedValue}
        				style={styles.selectBox}
			        >
			        	<Picker.Item label="Selecione os BTUS do Ar Condicionado" value="" />
			        	<Picker.Item label="Até 9000" value="9000" />
			        	<Picker.Item label="12000" value="12000" />
			        	<Picker.Item label="18000" value="18000" />
			        	<Picker.Item label="24000" value="24000" />
			        	<Picker.Item label="Mais de 24000" value="24000+" />
			        </Picker>

			        <TouchableOpacity
				        onPress={ () => navigation.navigate('Home') }
				        style={styles.submit}
				    >
				    	<Text style={styles.submitText}>Solicitar Orçamento</Text>
				    </TouchableOpacity>

				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingTop: 20,
		paddingHorizontal: 15,
	},

	pageDesc: {
		color: '#272727',
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 20,
	},

	formContainer: {
		backgroundColor: '#FFF',
		padding: 20,
	},

	formTitle: {
		textAlign: 'center',
		fontSize: 20,
		marginBottom: 40,

	},

	input: {
		width: '100%',
		fontSize: 20,
		borderWidth: 1,
		borderColor: '#D1CFCE',
		marginBottom: 10,
		padding: 10,
	},

	selectBox: {
		width: '100%',
	},

	submit: {
		width: '100%',
		backgroundColor: '#FE5530',
		paddingVertical: 15,
		marginTop: 30,
	},

	submitText: {
		color: '#FFF',
		textAlign: 'center',
		fontSize: 20,
	},
});