import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function IntegracaoDosEstudantesScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="weixin" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>
            PROGRAMA DE INTEGRAÇÃO DOS ESTUDANTES INGRESSANTES
          </Text>
        </View>
        <Text style={servicosStyle.body}>
          Promove a integração dos discentes ingressantes no contexto acadêmico e estudantil,
          realizando ações de cunho informativo e cultural que orientem os estudantes ingressantes e
          pais quanto aos serviços oferecidos pelo IFNMG, sendo realizado em articulação com o
          Ensino e a Extensão.
        </Text>
      </View>
    </ScrollView>
  );
}
