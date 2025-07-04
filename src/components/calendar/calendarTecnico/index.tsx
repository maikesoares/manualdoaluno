import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { collection, getDocs, setDoc, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '~/utils/firebase';

type MarkedDate = {
  periods: { startingDay?: boolean; endingDay: boolean; color: string }[];
};

type Evento = {
  data: string;
  cor: string;
  descricao: string;
};

const CalendarAcademicoTecnico: React.FC = () => {
  const [markedDates, setMarkedDates] = useState<Record<string, MarkedDate>>({});
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [mesAtual, setMesAtual] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [eventoData, setEventoData] = useState('');
  const [eventoDescricao, setEventoDescricao] = useState('');
  const [eventoCor, setEventoCor] = useState('#228B22');

  useEffect(() => {
    verificarAdmin();
    carregarEventos();
  }, []);

  async function verificarAdmin() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userRef = doc(db, 'usuarios', user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        setIsAdmin(data.isAdmin === true);
      }
    }
  }

  async function carregarEventos() {
    const querySnapshot = await getDocs(collection(db, 'eventosAcademicosTecnico'));
    const novosEventos: Evento[] = [];
    const marcacoes: Record<string, MarkedDate> = {};

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data() as Evento;
      novosEventos.push(data);

      marcacoes[data.data] = {
        periods: [{ startingDay: true, endingDay: true, color: data.cor }],
      };
    });

    setMarkedDates(marcacoes);

    if (novosEventos.length > 0) {
      setMesAtual(novosEventos[0].data.slice(0, 7));
    } else {
      const hoje = new Date();
      setMesAtual(hoje.toISOString().slice(0, 7));
    }

    setEventos(novosEventos);
  }

  const onMonthChange = (month: DateData) => {
    setMesAtual(month.dateString.slice(0, 7));
  };

  const eventosFiltrados = eventos.filter((evento) => evento.data.startsWith(mesAtual));

  const abrirModal = (day: { dateString: string }) => {
    const eventoExistente = eventos.find((e) => e.data === day.dateString);

    if (!isAdmin && !eventoExistente) return;

    setEventoData(day.dateString);
    setEventoDescricao(eventoExistente ? eventoExistente.descricao : '');
    setEventoCor(eventoExistente ? eventoExistente.cor : '#228B22');
    setModalVisible(true);
  };

  const salvarEvento = async () => {
    if (!eventoDescricao.trim()) {
      Alert.alert('Erro', 'Descrição não pode estar vazia');
      return;
    }

    const evento: Evento = {
      data: eventoData.trim(),
      descricao: eventoDescricao,
      cor: eventoCor,
    };

    await setDoc(doc(db, 'eventosAcademicosTecnico', evento.data), evento);
    setModalVisible(false);
    carregarEventos();
  };

  const excluirEvento = async () => {
    Alert.alert(
      'Confirmação',
      'Deseja realmente excluir este evento?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await deleteDoc(doc(db, 'eventosAcademicosTecnico', eventoData.trim()));
            setModalVisible(false);
            carregarEventos();
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={abrirModal}
        onMonthChange={onMonthChange}
        markingType="multi-period"
        markedDates={markedDates}
        theme={{
          backgroundColor: '#fff',
          calendarBackground: '#fff',
          textSectionTitleColor: '#000',
          selectedDayBackgroundColor: '#006633',
          selectedDayTextColor: '#fff',
          todayTextColor: '#c62828',
          dayTextColor: '#000',
          monthTextColor: '#006633',
          arrowColor: '#006633',
          textDisabledColor: '#ccc',
        }}
      />

      <View style={styles.legendaContainer}>
        <Text style={styles.legendaTitulo}>Eventos de {mesAtual}</Text>
        <ScrollView style={styles.legendaScroll}>
          {eventosFiltrados.length === 0 ? (
            <Text style={styles.semEvento}>Nenhum evento neste mês.</Text>
          ) : (
            eventosFiltrados.map((evento, index) => (
              <View key={index} style={styles.eventoItem}>
                <View style={[styles.bolaCor, { backgroundColor: evento.cor }]} />
                <Text style={styles.eventoTexto}>
                  {evento.data} - {evento.descricao}
                </Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalOverlay}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Evento em {eventoData}</Text>

            <Text style={styles.label}>Descrição:</Text>
            <TextInput
              style={styles.input}
              value={eventoDescricao}
              onChangeText={setEventoDescricao}
              placeholder="Descrição do evento"
              multiline
              editable={isAdmin}
            />

            <Text style={styles.label}>Cor (hex):</Text>
            <TextInput
              style={styles.input}
              value={eventoCor}
              onChangeText={setEventoCor}
              placeholder="#006633"
              maxLength={7}
              editable={isAdmin}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <View style={styles.modalButtons}>
              {isAdmin && (
                <>
                  <TouchableOpacity
                    style={[styles.botao, styles.botaoSalvar]}
                    onPress={salvarEvento}>
                    <Text style={styles.botaoTexto}>Salvar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.botao, styles.botaoExcluir]}
                    onPress={excluirEvento}>
                    <Text style={styles.botaoTexto}>Excluir</Text>
                  </TouchableOpacity>
                </>
              )}

              <TouchableOpacity
                style={[styles.botao, styles.botaoCancelar]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.botaoTexto}>{isAdmin ? 'Cancelar' : 'Fechar'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
};

export { CalendarAcademicoTecnico };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    width: '100%',
  },
  calendar: {
    width: '100%',
  },
  legendaContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  legendaTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#006633', // IFNMG verde
  },
  legendaScroll: {
    marginTop: 10,
  },
  semEvento: {
    color: '#999',
    fontStyle: 'italic',
    paddingVertical: 10,
  },
  eventoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bolaCor: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 12,
  },
  eventoTexto: {
    fontSize: 14,
    color: '#444',
    flexShrink: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#006633',
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 16,
    color: '#222',
    backgroundColor: '#fafafa',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botao: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  botaoSalvar: {
    backgroundColor: '#006633',
  },
  botaoExcluir: {
    backgroundColor: '#B71C1C',
  },
  botaoCancelar: {
    backgroundColor: '#999',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
