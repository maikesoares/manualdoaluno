import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaVermelha } from "../../legendas/vermelho";
import { LegendaRosa } from "../../legendas/rosa";
import { LegendaVerdeEscuro } from "../../legendas/verdeEscuro";
import { tintColorBackGround, tintColorBlack } from '~/src/constants/colors';

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
  '2025-01': {
      events: {
        '2025-01-01': { periods: [{ endingDay: true, color: '#ee2222' }] },
        '2025-01-02': { periods: [{ endingDay: true, color: '#f38af7' }] },'2025-01-03': { periods: [{ endingDay: true, color: '#f38af7' }] },
        '2025-01-06': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-07': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-08': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-09': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-10': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-11': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-12': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-13': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-14': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-15': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-16': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2025-01-17': { periods: [{ endingDay: true, color: '#228B22' }] },
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '1 - Confraternização Universal - Dia do Ano Novo',
        '2 e 3 - Recesso',
        '6 a 17 – Férias 2024 (3º período - 12 dias)',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2025-01-01'
    },
}

const CalendarJaneiro: React.FC = () => {
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
              {legends.map((legend:string, index:number) => (
                <Text style={styles.eventos} key={index}>
                  {legend}
                </Text>
              ))}

              <LegendaVermelha />
              <LegendaRosa />
              <LegendaVerdeEscuro />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarJaneiro}

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