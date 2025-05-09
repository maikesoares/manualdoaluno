import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function NecessidadesEspecificasScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="wheelchair" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>
            PROGRAMA DE APOIO A PESSOAS COM NECESSIDADES ESPECÍFICAS
          </Text>
        </View>
        <Text style={servicosStyle.body}>
          Tem por nalidade fomentar e colaborar na prática da inclusão dos estudantes com deciência,
          transtornos globais do desenvolvimento, altas habilidades e superdotação, promovendo
          condições especícas que permitam o acompanhamento das atividades de ensino, pesquisa e
          extensão na Instituição, subsidiando as ações do NAPNE (Núcleo de Apoio a Pessoas com
          Necessidades Especícas) e se efetiva por meio de ações que fomentam a inclusão e a
          acessibilidade a exemplo da destinação de recursos nanceiros para aquisição de tecnologias
          assistivas.
        </Text>
      </View>
    </ScrollView>
  );
}
