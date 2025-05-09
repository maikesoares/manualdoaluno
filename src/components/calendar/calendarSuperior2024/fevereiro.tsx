import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { LegendaVerdeEscuro } from "../../legendas/verdeEscuro";
import { LegendaVermelha } from "../../legendas/vermelho";
import { LegendaMarrom } from "../../legendas/marrom";
import { LegendaRosa } from "../../legendas/rosa";
import { tintColorBackGround, tintColorBlack } from '~/src/constants/colors';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'pt-br';

type EventPeriod = {
  startingDay?: boolean;
  endingDay: boolean;
  color: string;
}

type EventData = {
  periods: EventPeriod[];
}

type MonthData = {
  events: Record<string, EventData>;
  legends: string[];
  initialDate: string;
};

const monthData: Record<string, MonthData> = {
  '2024-02': {
      events: {
        '2024-02-01': { periods: [{ startingDay: true, endingDay: true, color: '#228B22' }]},
        '2024-02-02': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-03': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-04': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-05': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-06': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-07': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-08': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-09': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-10': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-11': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-12': { periods: [
          { endingDay: true, color: '#228B22' },
          { endingDay: true, color: '#f38af7' }
        ] },
        '2024-02-13': { periods: [
          { endingDay: true, color: '#228B22'}, 
          { endingDay: true, color: '#ee2222'}
        ] },
        '2024-02-14': { periods: [
          { endingDay: true, color: '#228B22' },
          { endingDay: true, color: '#f38af7' }
        ] },
        '2024-02-15': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-16': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-17': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-18': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-19': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-20': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-21': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-22': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-23': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-26': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-02-27': { periods: [{ endingDay: true, color: '#2e1a08b2' }] },
        '2024-02-28': { periods: [{ endingDay: true, color: '#2e1a08b2' }] },
        '2024-02-29': { periods: [{ endingDay: true, color: '#2e1a08b2' }] },
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '1 a 23 - Férias docentes 2023 (2º Período)',
        '12 - Recesso',
        '13 – Carnaval',
        '14 – Recesso (Quarta-feira de cinzas)',
        '20 a 23 – Renovação de matrículas, renovação de matrícula trancada e reabertura de matrícula.',
        '26 - Férias 2024 (1º período - 1 dia)',
        '27 a 29 – Jornada Pedagógica',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2024-02-01'
    },
}

const CalendarFevereiro = () => {
  return (
    <>
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
              {legends.map((legend:string, index:number) => (
                <Text style={styles.eventos} key={index}>
                  {legend}
                </Text>
              ))}

              <LegendaVerdeEscuro />
              <LegendaVermelha />
              <LegendaMarrom />
              <LegendaRosa />
            </View>
          </View>
        );
          })}
    </>
  )
}

export {CalendarFevereiro}

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
  },
});