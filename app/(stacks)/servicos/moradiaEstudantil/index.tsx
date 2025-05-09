import { View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function MoradiaEstudantilScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <MaterialIcons name="home" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>Programa de Moradia Estudantil</Text>
        </View>
        <Text style={servicosStyle.body}>
          Destinado aos estudantes de cursos presenciais em situação de vulnerabilidade social,
          oriundos da zona rural ou de outro município, diferente da sede do campus; este programa
          será executado nos campi que possuem moradia estudantil e terá regulamentação própria,
          respeitadas as diretrizes e princípios do regulamento.
        </Text>
      </View>
    </ScrollView>
  );
}
