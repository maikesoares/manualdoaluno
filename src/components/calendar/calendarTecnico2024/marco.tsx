import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaVermelha } from "../../legendas/vermelho";
import { LegendaMarrom } from "../../legendas/marrom";
import { LegendaAmarela } from "../../legendas/amarelo";
import { LegendaRosa } from "../../legendas/rosa";
import { tintColorBackGround } from '~/src/constants/colors';

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
  '2024-03': {
      events: {
        '2024-03-01': { periods: [{ startingDay: true, endingDay: true, color: '#2e1a08b2' }]},
        '2024-03-04': { periods: [{ endingDay: true, color: '#159da7' }] },
        '2024-03-09': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-03-16': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-03-23': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-03-28': { periods: [{ endingDay: true, color: '#f38af7' }] },
        '2024-03-29': { periods: [{ endingDay: true, color: '#ee2222' }] },
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '1 – Jornada Pedagógica',
        '4 – Início do ano letivo/1º trimestre',
        '8 – Dia Internacional da Mulher',
        '9 - Sábado letivo referente a segunda-feira',
        '16 – Sábado letivo referente a terça-feira',
        '22 – Data limite para solicitação de direito de ausência em razão de guarda religiosa',
        '22 – Data limite para solicitação de aproveitamento de estudos, de experiências e de conhecimentos anteriores',
        '23 – Sábado letivo (referente a quarta-feira)',
        '26 – Reunião de pais de alunos ingressantes (extra-turno)',
        '28 – Recesso',
        '29 – Paixão de Cristo (Sexta-feira Santa)',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2024-03-01'
    },
}

const CalendarMarco: React.FC = () => {
  return (
    <View>
      {Object.keys(monthData).map((monthKey) => {
        const { events, legends, initialDate } = monthData[monthKey];

        return (
          <View key={monthKey} style={styles.container}>
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
              
              <LegendaVermelha />
              <LegendaMarrom />
              <LegendaAmarela />
              <LegendaRosa />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarMarco}

const styles = StyleSheet.create({

  container: {
    marginBottom: 20,
  },

  eventosContainer: {
    padding: 10,
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