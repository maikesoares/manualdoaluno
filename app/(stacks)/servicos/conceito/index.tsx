import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { servicosStyle } from '~/src/styles/serviceStyle';

export default function ConceitoScreen() {
  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.header}>
        <Text style={servicosStyle.title}>ASSISTÊNCIA ESTUDANTIL</Text>
        <Text style={servicosStyle.subtitle}>O que é isso?</Text>
      </View>

      <View style={servicosStyle.iconsRow}>
        <MaterialIcons name="school" size={24} color="black" />
        <MaterialIcons name="local-hospital" size={24} color="black" />
        <MaterialIcons name="restaurant" size={24} color="black" />
        <MaterialIcons name="directions-bus" size={24} color="black" />
        <MaterialIcons name="sports-soccer" size={24} color="black" />
        <MaterialIcons name="work" size={24} color="black" />
        <MaterialIcons name="handshake" size={24} color="black" />
      </View>

      <View style={servicosStyle.content}>
        <Text style={servicosStyle.text}>
          A Assistência Estudantil executada no âmbito do IFNMG, que foi construída com fundamento
          na Política Nacional de Assistência Estudantil – PNAES aprovada pelo Decreto 7.234/2010 e
          com princípios pautados em valores éticos e humanos, compreende programas, serviços,
          projetos e ações. O objetivo da Assistência Estudantil é favorecer e ampliar a permanência
          e o êxito na vida escolar/acadêmica dos discentes matriculados nos cursos regularmente
          ofertados pelo IFNMG, nos diversos campi, nas perspectivas de educação profissional,
          técnica e básica, nos níveis médio, superior e de formação inicial e continuada da classe
          trabalhadora.
        </Text>
      </View>

      <View style={servicosStyle.footer}>
        <Image source={require('~/assets/logo.png')} style={servicosStyle.logo} />
        <Text style={servicosStyle.footerText}>
          Diretoria de Assuntos Estudantis e Comunitários
        </Text>
      </View>
    </ScrollView>
  );
}
