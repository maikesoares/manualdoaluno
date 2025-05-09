import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function ParticipacaoAEventosScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="calendar" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>
            PROGRAMA DE INCENTIVO À PARTICIPAÇÃO EM EVENTOS E REUNIÕES DOS ÓRGÃOS COLEGIADOS DO
            IFNMG
          </Text>
        </View>
        <Text style={servicosStyle.body}>
          Visa oferecer auxílio nanceiro para ajuda de custo em viagens acadêmicas/escolares, para
          participação em eventos de natureza acadêmica/escolar, cientíca, tecnológica, desportiva,
          artística e cultural e participação em órgãos colegiados do IFNMG, no caso de
          representação discente.
          {'\n\n'}
          a) Este programa de incentivo para participação em eventos e nos órgãos colegiados do
          IFNMG terá normatização própria, assim como as ações relativas às visitas técnicas.
          {'\n\n'}
          b) O orçamento para execução deste programa, poderá ser de responsabilidade compartilhada
          entre as pró-reitorias ediretorias sistêmicas.
        </Text>
      </View>
    </ScrollView>
  );
}
