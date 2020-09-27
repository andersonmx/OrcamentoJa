import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Home({ navigation }) {
	return(
		<View style={styles.container}>
			<ScrollView>
				<Image
					source={ require('../../assets/img/background.jpeg') }
					style={styles.background}
				/>

				<Text style={styles.apresentacaoTitle}>Orçamento Já</Text>
				<Text style={styles.apresentacaoText}>
					Faça aqui seu orçamento, cobrimos qualquer oferta!
				</Text>

				<TouchableOpacity
        			style={styles.orcamento}
				>
					<Text style={styles.orcamentoText}>Fazer Orçamento</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},

	background: {
		width: '100%',
	},

	apresentacaoTitle: {
		fontSize: 30,
		alignSelf: 'center',
		marginTop: 20,
	},

	apresentacaoText: {
		fontSize: 30,
		textAlign: 'justify',
		paddingHorizontal: 20,
		marginTop: 20,
		marginBottom: 30,
	},

	orcamento: {
		backgroundColor: '#FE5530',
		marginHorizontal: '20%',
		alignItems: 'center',
	},

	orcamentoText: {
		color: '#fff',
		fontSize: 24,
		padding: 15,
	},
});