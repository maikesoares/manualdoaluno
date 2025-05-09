import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function MobilidadeAcademicaScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="plane" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>
            PROGRAMA DE INCENTIVO A MOBILIDADE ACADÊMICA – PIMA
          </Text>
        </View>
        <Text style={servicosStyle.body}>
          O Programa de Incentivo a Mobilidade Acadêmica – PIMA objetiva proporcionar, aos alunos em
          vulnerabilidade social do IFNMG, a possibilidade de realizarem atividades acadêmicas em
          instituições nacionais ou estrangeiras, com a atribuição de créditos em seus currículos
          escolares, mediante aproveitamento de estudos. Este programa será realizado em parceria
          com a Assessoria de Relações Internacionais (Arinter).
        </Text>
      </View>
    </ScrollView>
  );
}
