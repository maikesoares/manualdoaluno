import { View, Text, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function ApoioPsicologicoScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome5 name="brain" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE APOIO PSICOLÓGICO</Text>
        </View>
        <Text style={servicosStyle.body}>
          Esse programa tem como objetivo promover o bem-estar biopsicossocial dos estudantes e a
          preservação da saúde mental, por meio de ações de natureza preventiva e interventiva, que
          respeitem a ética e os direitos humanos e priorizem a multidisciplinaridade, além do
          acompanhamento dos discentes e realização de encaminhamentos quando necessário, aos demais
          Programas da Assistência Estudantil do IFNMG, bem como para outras políticas públicas
          municipais/estaduais/federais.
        </Text>
      </View>
    </ScrollView>
  );
}
