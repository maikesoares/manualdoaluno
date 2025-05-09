import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaVermelha } from "../../legendas/vermelho";
import { LegendaAmarela } from "../../legendas/amarelo";
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
  '2024-06': {
      events: {
        '2024-06-08': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-06-15': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-06-22': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-06-29': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-06-01': { periods: [{ endingDay: true, color: '#ee2222' }] },
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '1 a 30 – Greve',
        '1 – Feriado Municipal (Aniversário da Cidade)',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2024-06-01'
    },
}

const CalendarJunho: React.FC = () => {
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
              <LegendaAmarela />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarJunho}

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