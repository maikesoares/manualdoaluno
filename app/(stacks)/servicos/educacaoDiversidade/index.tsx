import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function MoradiaEstudantilScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="globe" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE EDUCAÇÃO PARA A DIVERSIDADE</Text>
        </View>
        <Text style={servicosStyle.body}>
          Este programa tem a nalidade de aprofundar as discussões sobre equidade na Instituição,
          garantindo espaços de reexão sobre diversidade de etnia, gênero, religião, orientação
          sexual e, assim como os demais programas, também almeja contribuir no processo de estímulo
          à permanência nos estudos pelos estudantes, sem perder de vista a perspectiva da discussão
          sobre direitos e cidadania, destacando a necessidade de desnudar práticas
          discriminatórias, oriundas da falta de debates e informações, com ações como a criação de
          grupos de estudos e pesquisa, a exemplo do NEABI
        </Text>
      </View>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f1f1f1', // Cor de fundo suave
//   },
//   card: {
//     backgroundColor: '#ffffff', // Fundo branco para o cartão
//     borderRadius: 12,
//     padding: 16,
//     marginVertical: 8,
//     elevation: 5, // Sombra para destacar o cartão
//     shadowColor: '#000', // Cor da sombra
//     shadowOffset: { width: 0, height: 4 }, // Offset da sombra
//     shadowOpacity: 0.2, // Opacidade da sombra
//     shadowRadius: 6, // Raio da sombra
//     overflow: 'hidden', // Garante que a sombra não ultrapasse os limites do cartão
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 16,
//     padding: 12,
//     backgroundColor: '#004d40', // Cor de fundo para o cabeçalho
//     borderRadius: 12,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#ffffff', // Cor branca para o título
//     marginLeft: 8,
//   },
//   body: {
//     fontSize: 16,
//     color: '#424242', // Cor do texto
//     lineHeight: 24,
//     textAlign: 'justify', // Justifica o texto
//   },
// });
