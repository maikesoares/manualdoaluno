import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { tintColorBackGround, tintColorBlack, tintColorGreenDark } from '~/src/constants/colors';

const Labs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Laboratórios de Informática</Text>
        <Text style={styles.subtitle}>
          O IFNMG – Campus Pirapora conta com diversos laboratórios de informática e montagem e
          manutenção de hardware. Estes espaços são utilizados por alunos de cursos técnicos e
          superiores.
        </Text>

        {/* LAB I */}
        <View style={styles.labContainer}>
          <Text style={styles.labTitle}>LAB I</Text>
          <View style={styles.table}>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="desktop" size={24} color="#228B22" />
              </View>
              <Text style={styles.tableText}>31 Computadores (Core 2 Duo, 4GB RAM, 500GB HD)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="air-conditioner" size={24} color="#FF4500" />
              </View>
              <Text style={styles.tableText}>2 Aparelhos de ar condicionado "split"</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="fan" size={24} color="#1E90FF" />
              </View>
              <Text style={styles.tableText}>4 Ventiladores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="lan" size={24} color="#FFD700" />
              </View>
              <Text style={styles.tableText}>2 Switches 3com com 24 portas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="tv" size={24} color="#8A2BE2" />
              </View>
              <Text style={styles.tableText}>1 TV LCD 42 polegadas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="human-male-board" size={24} color="#4682B4" />
              </View>
              <Text style={styles.tableText}>1 Lousa</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* LAB II */}
        <View style={styles.labContainer}>
          <Text style={styles.labTitle}>LAB II</Text>
          <View style={styles.table}>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="desktop" size={24} color="#228B22" />
              </View>
              <Text style={styles.tableText}>
                31 Computadores (Core 2 Duo 2,93 GHz, 3 GB RAM, 500 GB HD)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="air-conditioner" size={24} color="#FF4500" />
              </View>
              <Text style={styles.tableText}>2 Aparelhos de ar condicionado "split"</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="fan" size={24} color="#1E90FF" />
              </View>
              <Text style={styles.tableText}>4 Ventiladores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="lan" size={24} color="#FFD700" />
              </View>
              <Text style={styles.tableText}>2 Switches com 24 portas marca 3com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="tv" size={24} color="#8A2BE2" />
              </View>
              <Text style={styles.tableText}>1 TV LCD 42 polegadas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="projector" size={24} color="#FFD700" />
              </View>
              <Text style={styles.tableText}>1 Projetor marca Epson</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="projector-screen" size={24} color="#4682B4" />
              </View>
              <Text style={styles.tableText}>1 Tela de Projeção</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="human-male-board" size={24} color="#4682B4" />
              </View>
              <Text style={styles.tableText}>1 Lousa</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* LAB III */}
        <View style={styles.labContainer}>
          <Text style={styles.labTitle}>LAB III</Text>
          <View style={styles.table}>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="desktop" size={24} color="#228B22" />
              </View>
              <Text style={styles.tableText}>
                32 Computadores (AMD Phenom II X 3.2 GHz, 4 GB RAM, 500 GB HD)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="air-conditioner" size={24} color="#FF4500" />
              </View>
              <Text style={styles.tableText}>1 Aparelho de ar condicionado modelo “split”</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="fan" size={24} color="#1E90FF" />
              </View>
              <Text style={styles.tableText}>4 Ventiladores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="lan" size={24} color="#FFD700" />
              </View>
              <Text style={styles.tableText}>2 Switches marca 3com com 24 portas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="tv" size={24} color="#8A2BE2" />
              </View>
              <Text style={styles.tableText}>1 TV LCD 42 polegadas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="projector" size={24} color="#FFD700" />
              </View>
              <Text style={styles.tableText}>1 Projetor marca Hitachi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="projector-screen" size={24} color="#4682B4" />
              </View>
              <Text style={styles.tableText}>1 Tela de Projeção</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="human-male-board" size={24} color="#4682B4" />
              </View>
              <Text style={styles.tableText}>1 Lousa</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* LAB IV */}
        <View style={styles.labContainer}>
          <Text style={styles.labTitle}>LAB IV</Text>
          <View style={styles.table}>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="desktop" size={24} color="#228B22" />
              </View>
              <Text style={styles.tableText}>
                32 Computadores (AMD Phenom II X 3.2 GHz, 4 GB RAM, 500 GB HD)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="desktop" size={24} color="#228B22" />
              </View>
              <Text style={styles.tableText}>
                26 Computadores (Core 2 Duo 2,93 GHz, 3 GB RAM, 500 GB HD)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="air-conditioner" size={24} color="#FF4500" />
              </View>
              <Text style={styles.tableText}>1 Aparelho de ar condicionado modelo “split”</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="fan" size={24} color="#1E90FF" />
              </View>
              <Text style={styles.tableText}>4 Ventiladores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="lan" size={24} color="#FFD700" />
              </View>
              <Text style={styles.tableText}>2 Switches marca 3com com 24 portas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="tv" size={24} color="#8A2BE2" />
              </View>
              <Text style={styles.tableText}>1 TV LCD 42 polegadas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="human-male-board" size={24} color="#4682B4" />
              </View>
              <Text style={styles.tableText}>1 Lousa</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* LAB V */}
        <View style={styles.labContainer}>
          <Text style={styles.labTitle}>LAB V (Montagem e Manutenção)</Text>
          <View style={styles.table}>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="desktop" size={24} color="#228B22" />
              </View>
              <Text style={styles.tableText}>13 Computadores (Core 2 Duo 2,93 GHz)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="toolbox" size={24} color="#FF6347" />
              </View>
              <Text style={styles.tableText}>10 Kits de Ferramenta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <FontAwesome5 name="fan" size={24} color="#1E90FF" />
              </View>
              <Text style={styles.tableText}>4 Ventiladores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="projector" size={24} color="#FFD700" />
              </View>
              <Text style={styles.tableText}>1 Projetor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tableRow} activeOpacity={0.6}>
              <View style={styles.tableIcon}>
                <MaterialCommunityIcons name="human-male-board" size={24} color="#4682B4" />
              </View>
              <Text style={styles.tableText}>1 Lousa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { Labs };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tintColorBackGround,
  },

  scrollContent: {
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    backgroundColor: tintColorGreenDark,
    borderRadius: 10,
    padding: 15,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 25,
    paddingHorizontal: 20,
    lineHeight: 28,
    backgroundColor: tintColorGreenDark,
    borderRadius: 8,
    padding: 15,
  },

  labContainer: {
    padding: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: tintColorBlack,
  },

  labTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: tintColorBlack,
    marginBottom: 20,
    textShadowColor: tintColorBlack,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textAlign: 'center',
  },

  table: {
    flexDirection: 'column',
  },

  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  tableIcon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tableText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
    flex: 1,
    fontWeight: '600',
  },
});
