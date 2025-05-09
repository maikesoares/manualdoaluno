import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaAmarela } from "../../legendas/amarelo";
import { LegendaVermelha } from "../../legendas/vermelho";
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
  '2024-12': {
      events: {
        '2024-12-07': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-12-14': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-12-21': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-12-23': { periods: [{ endingDay: true, color: '#f38af7' }] },
        '2024-12-24': { periods: [{ endingDay: true, color: '#f38af7' }] },
        '2024-12-25': { periods: [{ endingDay: true, color: '#ee2222' }] },
        '2024-12-26': { periods: [{ endingDay: true, color: '#f38af7' }] },
        '2024-12-27': { periods: [{ endingDay: true, color: '#f38af7' }] },
        '2024-12-30': { periods: [{ endingDay: true, color: '#f38af7' }] },
        '2024-12-31': { periods: [{ endingDay: true, color: '#f38af7' }] },
        
      },
      legends: [
        '7 – Sábado letivo referente a sexta-feira',
        '12 – Dia letivo referente a quarta-feira',
        '14 – Sábado letivo referente a segunda-feira',
        '21 – Sábado letivo referente a terça-feira',
        '23, 24, 26, 27, 30 e 31 - Recesso',
        '25 - Natal',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2024-12-01'
    },
}

const CalendarDezembro: React.FC = () => {
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

              <LegendaAmarela />
              <LegendaVermelha />
              <LegendaRosa />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarDezembro}

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