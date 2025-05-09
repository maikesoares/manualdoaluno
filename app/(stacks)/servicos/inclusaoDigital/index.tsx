import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function InclusaoDigitalScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="laptop" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE INCLUSÃO DIGITAL</Text>
        </View>
        <Text style={servicosStyle.body}>
          Visa a inserção de estudantes em situação de vulnerabilidade social no mundo digital por
          meio do fornecimento de um valor nanceiro, equivalente ao valor de mercado, para a compra
          de um computador, ou outro bem ou serviço da área de sua formação que promova a inserção
          digital. Caso o campus tenha condições de realizar a compra, poderá ser ofertado o item ou
          o serviço.
        </Text>
      </View>
    </ScrollView>
  );
}
