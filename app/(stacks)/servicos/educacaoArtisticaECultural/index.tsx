import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function EducacaoArtisticaECulturalScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="paint-brush" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>
            PROGRAMA DE INCENTIVO À EDUCAÇÃO ARTÍSTICA E CULTURAL
          </Text>
        </View>
        <Text style={servicosStyle.body}>
          Visa oferecer uma formação ampliada, de modo a incentivar o desenvolvimento da
          criatividade e do olhar analítico, promovendo a prática da sensibilidade, o aprimoramento
          do acadêmico e produção do conhecimento, proporcionando, aos estudantes o acesso a bens e
          serviços culturais que estejam em consonância com as propostas dos componentes
          curriculares dos cursos, podendo se efetivar por meio do nanciamento de projetos,
          relacionados a sua nalidade, de servidores e discentes, via chamadas públicas.
        </Text>
      </View>
    </ScrollView>
  );
}
