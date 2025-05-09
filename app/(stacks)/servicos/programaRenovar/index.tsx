import { View, Text, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { servicosStyle } from "~/src/styles/serviceStyle";
import { tintColorWhite } from "~/src/constants/colors";



export default function ProgramaRenovarScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="refresh" size={50} color= {tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA RENOVAR</Text>
        </View>
        <Text style={servicosStyle.body}>
          Visa a redução do índice de reprovações nos diversos cursos doIFNMG, por meio de ações que perpassam o mundo da aprendizagem; acompanhamento psicossocial e pedagógico aos estudantes com histórico de reprovação e/ou com diculdade de
          aprendizagem, promovendo um espaço para reetir criticamente sua trajetória na vida escolar/acadêmica, tendo, como ação estratégica, o planejamento de estudo,trabalhando com a tríplice dimensão: aprender, estudar e pesquisar, propiciando condições para o domínio de métodos e técnicas de planejamento, leitura analítica, documentação e elaboração de trabalho acadêmico, desenvolvido de forma articulada com o Ensino.
        </Text>
      </View>
    </ScrollView>
  );
}