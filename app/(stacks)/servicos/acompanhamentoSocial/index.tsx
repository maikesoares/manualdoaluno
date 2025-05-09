import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function AcompanhamentoSocialScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="link" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE ACOMPANHAMENTO SOCIAL</Text>
        </View>
        <Text style={servicosStyle.body}>
          Prestar orientações e atendimentos aos estudantes e seus familiares, na perspectiva de
          contribuir para o acesso e a permanência do estudante na Instituição, acompanhando-os,
          especialmente os que se encon tram em situação de vulnerabilidade e risco social,
          realizando encaminhamentos, quando necessário, aos demais Programas da Assistência
          Estudantil do IFNMG, bem como para outras políticas públicas
          municipais/estaduais/federais.
        </Text>
      </View>
    </ScrollView>
  );
}
