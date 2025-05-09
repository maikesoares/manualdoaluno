import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones
import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';
export default function EsporteELazerScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="soccer-ball-o" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE INCENTIVO AO ESPORTE E LAZER</Text>
        </View>
        <Text style={servicosStyle.body}>
          Este programa objetiva contribuir para a formação física e intelectual e como aporte para
          a inclusão social com ns ainda em colaborar na formação cidadã de nossos jovens e adultos,
          podendo desenvolver ações a exemplo de ocinas que desenvolvam atividades esportivas,
          atividades lúdicas e de lazer, e poderá ainda se efetivar por meio do nancia mento de
          projetos relacionados a sua nalida de, de servidores e discentes via chamadas públicas.
        </Text>
      </View>
    </ScrollView>
  );
}
