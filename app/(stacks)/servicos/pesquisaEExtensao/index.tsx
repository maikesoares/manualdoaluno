import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones
import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function PesquisaEExtensaoScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="search" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE INCENTIVO A PESQUISA E EXTENSÃO</Text>
        </View>
        <Text style={servicosStyle.body}>
          Atividades de pesquisa e extensão poderão ser incentivadas, por meio do fomento de ações
          das áreas supracitadas priorizando o atendimento de estudantes beneciários das ações
          armativas do IFNMG.
          {'\n\n'}
          São objetivos do programa:
          {'\n\n'}
          I. Possibilitar a concessão de Bolsas de Iniciação Cientíca, de Iniciação tecnológica e
          bolsas de Extensão a alunos devidamente matriculados nesta instituição, visando o
          incentivo aos estudos, à pesquisa e a extensão;
          {'\n\n'}
          II. Incentivar a participação dos alunos em atividades que possibilitem a complementação
          da aprendizagem, através do engajamento em Projetos de Incentivo à pesquisa e a extensão;
          {'\n\n'}
          III. Proporcionar ao aluno bolsista, atividades que possibilitem o seu crescimento pessoal
          e prossional e envolvimento com a comunidade estimulando o desenvolvimento de competências
          e habilidades voltadas para o mundo do trabalho, da pesquisa e da extensão;
        </Text>
      </View>
    </ScrollView>
  );
}
