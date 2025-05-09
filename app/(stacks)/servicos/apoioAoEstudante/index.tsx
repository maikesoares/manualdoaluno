import { View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite } from '~/src/constants/colors';

export default function ApoioAoEstudanteScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <MaterialIcons name="groups" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>PROGRAMA DE ASSISTÊNCIA E APOIO AO ESTUDANTE</Text>
        </View>
        <View>
          <Text style={servicosStyle.bodyText}>
            Destinado aos discentes de cursos presenciais, visa desenvolver ações de oferta de
            auxílios financeiros e acompanhamento aos estudantes em situação de vulnerabilidade
            social, contribuindo para que os beneficiários tenham condições de suprir necessidades
            básicas, como alimentação, itens escolares dentre outras, possuindo três tipos de
            auxílios financeiros:
          </Text>
          <Text style={servicosStyle.bodyText}>
            a) Permanência I: será concedido aos discentes em situação socioeconômica considerada
            insuficiente para sua manutenção no IFNMG.
          </Text>
          <Text style={servicosStyle.bodyText}>
            b) Permanência II: será concedido aos discentes em situação socioeconômica considerada
            parcialmente insuficiente para sua manutenção no IFNMG.
          </Text>
          <Text style={servicosStyle.bodyText}>
            c) Permanência III: será concedido aos discentes em nível socioeconômico considerado
            razoável para a manutenção do estudante na instituição.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
