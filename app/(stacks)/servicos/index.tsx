import { router } from 'expo-router';
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Service } from '~/src/types/types';
import { tintColorBlack, tintColorGreenDark, tintColorWhite } from '~/src/constants/colors';

const services: Service[] = [
  { name: 'conceito', label: 'CONCEITO', icon: 'newspaper-o' },
  { name: 'moradiaEstudantil', label: 'MORADIA ESTUDANTIL', icon: 'home' },
  { name: 'apoioAoEstudante', label: 'ASSISTÊNCIA E APOIO AO ESTUDANTE', icon: 'users' },
  { name: 'segurancaAlimentar', label: 'SEGURANÇA ALIMENTAR', icon: 'cutlery' },
  { name: 'inclusaoDigital', label: 'INCLUSÃO DIGITAL', icon: 'laptop' },
  { name: 'crecheEscola', label: 'CRECHE - ESCOLA', icon: 'building' },
  { name: 'educacaoDiversidade', label: 'EDUCAÇÃO PARA A DIVERSIDADE', icon: 'globe' },
  {
    name: 'necessidadesEspecificas',
    label: 'APOIO A PESSOAS COM NECESSIDADES ESPECÍFICAS',
    icon: 'wheelchair',
  },
  { name: 'atencaoASaude', label: 'ATENÇÃO À SAÚDE', icon: 'heartbeat' },
  { name: 'apoioPsicologico', label: 'APOIO PSICOLÓGICO', icon: 'heart' },
  { name: 'acompanhamentoSocial', label: 'ACOMPANHAMENTO SOCIAL', icon: 'link' },
  { name: 'esporteELazer', label: 'INCENTIVO AO ESPORTE E LAZER', icon: 'soccer-ball-o' },
  {
    name: 'educacaoArtisticaECultural',
    label: 'INCENTIVO À EDUCAÇÃO ARTÍSTICA E CULTURAL',
    icon: 'paint-brush',
  },
  { name: 'programaRenovar', label: 'PROGRAMA RENOVAR', icon: 'refresh' },
  {
    name: 'integracaoDosEstudantes',
    label: 'INTEGRAÇÃO DOS ESTUDANTES INGRESSANTES',
    icon: 'weixin',
  },
  { name: 'incentivoACidadania', label: 'INCENTIVO À FORMAÇÃO DE CIDADANIA', icon: 'flag' },
  {
    name: 'participacaoAEventos',
    label: 'INCENTIVO À PARTICIPAÇÃO EM EVENTOS E REUNIÕES DOS ÓRGÃOS COLEGIADOS DO IFNMG',
    icon: 'calendar',
  },
  { name: 'auxilioEmergencial', label: 'AUXÍLIO EMERGENCIAL', icon: 'plus-square' },
  { name: 'mobilidadeAcademica', label: 'INCENTIVO À MOBILIDADE ACADÊMICA – PIMA', icon: 'plane' },
  { name: 'pesquisaEExtensao', label: 'INCENTIVO À PESQUISA E EXTENSÃO', icon: 'search' },
];

export default function ServicosScreen() {
  const backgroundImage = require('~/assets/backGroundSecundario.jpg');

  const handleNavigate = (path: string) => {
    router.push(`../(stacks)/servicos/${path}`);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Assistência Estudantil</Text>
        {services.map((service) => (
          <TouchableOpacity
            key={service.name}
            style={styles.gridItem}
            onPress={() => handleNavigate(service.name)}
            activeOpacity={0.7}
            accessibilityLabel={service.label}>
            <FontAwesome name={service.icon} size={32} color={styles.icon.color} />
            <Text style={styles.gridText}>{service.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    flexGrow: 1,
    resizeMode: 'cover',
  },

  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: tintColorWhite,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: tintColorGreenDark,
    padding: 12,
    borderRadius: 10,
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  gridItem: {
    backgroundColor: tintColorWhite,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: tintColorGreenDark,
  },

  gridText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: tintColorBlack,
  },

  icon: {
    color: tintColorGreenDark,
  },
});
