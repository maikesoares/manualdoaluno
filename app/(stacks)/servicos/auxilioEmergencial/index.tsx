import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function AuxilioEmergencialScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="plus-square" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE AUXÍLIO EMERGENCIAL</Text>
        </View>
        <Text style={servicosStyle.body}>
          Poderá ser concedido auxílio emergencial, no valor equivalente ao Auxílio I, II ou III, a
          estudantes que, momentaneamente, necessitem de apoio nanceiro para conseguir continuar
          suas atividades escolares/acadêmicas.
          {'\n\n'}
          a) Esse auxílio se aplica em caso de perda momentânea da principal renda familiar por
          desemprego, ou por morte do provedor, bem como por envolvimento da família em alguma
          calamidade pública, ou outras vicissitudes a serem avaliadas pelo(a) Assistente Social, e
          que possam implicar negativamente nas condições de permanência escolar do discente.
        </Text>
      </View>
    </ScrollView>
  );
}
