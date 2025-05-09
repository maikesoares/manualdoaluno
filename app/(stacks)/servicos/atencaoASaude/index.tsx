import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function AtencaoASaudeScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="heartbeat" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE ATENÇÃO A SAÚDE</Text>
        </View>
        <Text style={servicosStyle.body}>
          Visa a prestação de atendimento eletivo, com ns de promoção da saúde e a prevenção de
          doenças e agravos por meio da assistência médica, odontológica, nutricional e enfermagem
          com a nalidade de promover ações de saúde, prevenindo situações como uso de drogas,
          doenças sexualmente transmissíveis, gravidez precoce, dentre outras.
          {'\n\n'}
          a) Nas situações que demandem atendimento de urgência e emergência ou atendimento
          prolongado, os estudantes deverão ser encaminhados à rede de saúde local.
          {'\n\n'}
          b) O destaque deste programa se consolida por meio de campanhas preventivas e de ações
          como, por exemplo, a implementação do dia D.
        </Text>
      </View>
    </ScrollView>
  );
}
