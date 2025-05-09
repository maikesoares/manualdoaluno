import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaRoxa } from "../../legendas/roxo";
import { tintColorBackGround, tintColorBlack } from "~/src/constants/colors";

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
  '2025-05': {
      events: {
        '2025-05-10': { periods: [{ endingDay: true, color: '#7108b8' }] },
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '10 – Colação de grau para concluintes em 2/2024',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2025-05-01'
    },
}

const CalendarMaio: React.FC = () => {
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

              <LegendaRoxa />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarMaio}

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