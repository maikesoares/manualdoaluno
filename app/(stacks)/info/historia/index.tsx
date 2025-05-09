import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  tintColorBackGround,
  tintColorBlack,
  tintColorGreenDark,
  tintColorGreenLight,
  tintColorWhite,
} from '~/src/constants/colors';

export default function HistoriaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>História do IFNMG</Text>
        <Text style={styles.text}>
          O Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais (IFNMG) foi
          criado em 29 de dezembro de 2008, pela Lei nº 11.892. A criação do IFNMG foi resultado da
          reorganização da rede federal de educação profissional, que passou a contar com 38
          Institutos Federais de Educação, Ciência e Tecnologia (IFETs) em todo o Brasil.
        </Text>
        <Text style={styles.text}>
          O IFNMG é uma autarquia federal vinculada ao Ministério da Educação (MEC). O seu
          desenvolvimento histórico está relacionado com a história de algumas das instituições que
          o compõem:
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Escola de Iniciação Agrícola de Salinas</Text>
          <Text style={styles.text}>
            A "Pedra Fundamental" da escola foi lançada em 2 de setembro de 1953, a pedido do então
            deputado federal Dr. Clemente Medrado Fernandes.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campus Januária</Text>
          <Text style={styles.text}>
            A história do campus remonta a outubro de 1960, durante os festejos do centenário do
            município de Januária. A instituição passou por diversas alterações de nome, sendo
            inicialmente a Escola Agrícola de Januária, depois Colégio Agrícola de Januária, Escola
            Agrotécnica Federal de Januária, e por fim Centro Federal de Educação Profissional e
            Tecnológica (CEFET) Januária.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campus Pirapora</Text>
          <Text style={styles.text}>
            O campus foi criado a partir da integração do CEFET de Januária e da Escola Agrotécnica
            Federal de Salinas, juntamente com as Unidades de Ensino Descentralizadas (UNEDs) de
            Almenara, Araçuaí, Arinos e Montes Claros.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: tintColorBackGround,
  },
  card: {
    backgroundColor: tintColorWhite,
    borderRadius: 10,
    padding: 20,
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: tintColorGreenLight,
    marginBottom: 16,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: tintColorGreenDark,
    paddingBottom: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: tintColorGreenLight,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: tintColorBlack,
  },
});
