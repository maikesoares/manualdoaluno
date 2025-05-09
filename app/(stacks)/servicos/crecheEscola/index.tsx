import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';
export default function CrecheEscolaScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="building" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA CRECHE - ESCOLA</Text>
        </View>
        <Text style={servicosStyle.body}>
          Objetiva dar suporte às mães estudantes, de cursos regulares e presenciais que residam com
          lhos de até 05 anos de idade e ou crianças sob a sua guarda, em situação de
          vulnerabilidade social, por meio da oferta de um auxílio nanceiro, para que a mãe
          estudante permaneça em seus estudos.
          {'\n\n'}
          a) Este auxílio será concedido mediante a comprovação da ausência de vaga em creche do seu
          município, mediante declaração da própria estudante atestando que o lho não está
          matriculado;
          {'\n\n'}
          b) Este auxílio nanceiro terá o valor equivalente ao auxílio Permanência II do Programa de
          Assistência e Apoio aos estudantes;
        </Text>
      </View>
    </ScrollView>
  );
}
