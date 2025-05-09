import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function IncentivoACidadaniaScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="flag" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE INCENTIVO À FORMAÇÃO DE CIDADANIA</Text>
        </View>
        <Text style={servicosStyle.body}>
          Este programa visa incentivar o estudante, para que se integre ao contexto institucional,
          contribuindo para a sua formação integral cidadã e estimulando sua participação política e
          o protagonismo nas organizações estudantis, além de criar espaços para discussões e
          reexões sobre temas interdisciplinares com a educação e juventude, estimulando a
          organização dos espaços de representação estudantil e acadêmica.
        </Text>
      </View>
    </ScrollView>
  );
}
