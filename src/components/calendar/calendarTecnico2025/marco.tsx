import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LegendaAmarela } from '../../legendas/amarelo';
import { LegendaRoxa } from '../../legendas/roxo';
import { LegendaVerdeClaro } from '../../legendas/verdeClaro';
import { LegendaVermelha } from '../../legendas/vermelho';
import { LegendaAzul } from '../../legendas/azul';
import { LegendaLaranja } from '../../legendas/laranja';
import { LegendaVerdeEscuro } from '../../legendas/verdeEscuro';
import { LegendaRosa } from '../../legendas/rosa';
import { LegendaMarrom } from '../../legendas/marrom';
import { tintColorBackGround, tintColorBlack } from '~/src/constants/colors';

type EventPeriod = {
  startingDay?: boolean;
  endingDay: boolean;
  color: string;
};

type EventData = {
  periods: EventPeriod[];
};

type MonthData = {
  events: Record<string, EventData>;
  legends: string[];
  initialDate: string;
};

const monthData: Record<string, MonthData> = {
  '2025-03': {
    events: {
      '2025-03-03': { periods: [{ endingDay: true, color: '#ee2222' }] },
      '2025-03-04': { periods: [{ endingDay: true, color: '#ee2222' }] },
      '2025-03-05': { periods: [{ endingDay: true, color: '#f38af7' }] },
      '2025-03-08': { periods: [{ endingDay: true, color: '#c0bd13' }] },
      '2025-03-15': { periods: [{ endingDay: true, color: '#c0bd13' }] },
      '2025-03-19': { periods: [{ endingDay: true, color: '#f3870c' }] },
      '2025-03-20': { periods: [{ endingDay: true, color: '#f3870c' }] },
      '2025-03-21': { periods: [{ endingDay: true, color: '#84f875' }] },
      '2025-03-22': { periods: [{ endingDay: true, color: '#c0bd13' }] },
      '2025-03-24': {
        periods: [
          { endingDay: true, color: '#84f875' },
          { endingDay: true, color: '#159da7' },
        ],
      },
      '2025-03-25': { periods: [{ endingDay: true, color: '#84f875' }] },
      '2025-03-26': { periods: [{ endingDay: true, color: '#f3870c' }] },
      '2025-03-27': { periods: [{ endingDay: true, color: '#84f875' }] },
      '2025-03-28': {
        periods: [
          { endingDay: true, color: '#2e1a08b2' },
          { endingDay: true, color: '#7108b8' },
        ],
      },
      '2025-03-31': { periods: [{ endingDay: true, color: '#228B22' }] },
      // Adicione mais datas e eventos aqui
    },
    legends: [
      '03 e 04 – Carnaval',
      '05 – Quarta-feira de Cinzas (recesso)',
      '08 – Sábado letivo referente a quarta-feira',
      '15 – Sábado letivo referente a sexta-feira',
      '19 e 20 – Recuperação parcial (extra-turno)',
      '21 – Data limite para entrega dos resultados parciais referentes à etapa 2',
      '21, 24 e 25 – Conselho de classe (extra-turno)',
      '21 – Publicação do edital de vagas',
      '21 – Publicação do edital de vagas remanescentes para o semestre 1/2025',
      '22 – Sábado letivo referente a quinta-feira',
      '24 – Fim do 2º Semestre/Final da Etapa 2/Ano Letivo',
      '24 a 28 – Conferência de diários de classe',
      '26 – Recuperação final',
      '27 – Conselho de classe final',
      '28 – Entrega dos Resultados Finais e envio de diários de classe à CRE.',
      '28 – Cerimônia de formatura',
      '31 – Férias 2024 (4º período - 1 dia)',
      // Adicione mais itens de legenda aqui
    ],
    initialDate: '2025-03-01',
  },
};

const CalendarMarco: React.FC = () => {
  return (
    <View>
      {Object.keys(monthData).map((monthKey) => {
        const { events, legends, initialDate } = monthData[monthKey];

        return (
          <View key={monthKey}>
            <Calendar
              hideArrows={true}
              hideExtraDays={true}
              initialDate={initialDate}
              markingType={'multi-period'}
              markedDates={events}
              theme={{
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#000000',
                dayTextColor: '#2d4150',
                monthTextColor: '#000000',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                arrowColor: 'black',
              }}
            />
            <View style={styles.eventosContainer}>
              {legends.map((legend: string, index: number) => (
                <Text style={styles.eventos} key={index}>
                  {legend}
                </Text>
              ))}

              <LegendaAmarela />
              <LegendaRoxa />
              <LegendaVerdeClaro />
              <LegendaVermelha />
              <LegendaAzul />
              <LegendaLaranja />
              <LegendaVerdeEscuro />
              <LegendaRosa />
              <LegendaMarrom />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export { CalendarMarco };

const styles = StyleSheet.create({
  eventosContainer: {
    marginBottom: 10,
    padding: 10,
    borderColor: tintColorBlack,
    backgroundColor: tintColorBackGround,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  eventos: {
    fontSize: 14,
    fontWeight: 'bold',
    borderBottomColor: 'red',
  },
});
