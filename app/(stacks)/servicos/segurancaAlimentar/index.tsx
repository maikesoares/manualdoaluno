import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function SegurancaAlimentarScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="cutlery" size={40} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE SEGURANÇA ALIMENTAR</Text>
        </View>
        <Text style={servicosStyle.body}>
          Consiste no desenvolvimento de ações e serviços para implementação e fortalecimento da
          prática de Educação Alimentar e Nutricional com intuito de promover a segurança alimentar
          para a comunidade discente, priorizando a oferta do auxílio “in natura”, isto é a oferta
          de refeições para os discentes, principalmente para os estudantes dos cursos de nível
          médio na modalidade integrada; de acordo a sua realidade, os campi do IFNMG poderão
          desenvolver este programa por meio das ações descritas nos itens a, b, e c abaixo, de
          forma isolada ou cumulativamente.
          {'\n\n'}
          a) Auxílio financeiro para o discente EaD De acordo os critérios do art. 5º, este auxílio
          poderá ser ofertado aos estudantes em situação de vulnerabilidade social dos cursos da
          Educação a Distância, nas atividades presenciais do curso, com matrícula e frequência
          regular, para atender as necessidades de alimentação e/ou transporte.
          {'\n\n'}
          b) Restaurante Estudantil Tem o objetivo de fortalecer a política de permanência do
          educando e contribuir na sua formação, por meio da oferta de refeições balanceadas e de
          qualidade, a baixo custo ou gratuitamente, destinadas aos estudantes regularmente
          matriculados, conforme termo de referência e dotação orçamentária dos campi.
          {'\n\n'}
          c) Acompanhamento nutricional dos discentes Promover ações de educação alimentar voltadas
          à segurança nutricional dos discentes, estimulando novas práticas e hábitos alimentares
          saudáveis; essa ação é dependente da presença, no campus, do profissional da área de
          Nutrição.
        </Text>
      </View>
    </ScrollView>
  );
}
