import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaAmarela } from "../../legendas/amarelo";
import { LegendaAzul } from "../../legendas/azul";
import { LegendaVerdeClaro } from "../../legendas/verdeClaro";
import { LegendaRoxa } from "../../legendas/roxo";
import { LegendaLaranja } from "../../legendas/laranja";
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
        '2024-12-01': { periods: [{ endingDay: true, color: '#7108b8' }] },
        '2024-12-02': { periods: [
          { endingDay: true, color: '#7108b8' },
          { endingDay: true, color: '#159da7' }
        ] },
        '2024-12-03': { periods: [
          { endingDay: true, color: '#7108b8' },
          { endingDay: true, color: '#f3870c' }
        ] },
        '2024-12-04': { periods: [
          { endingDay: true, color: '#7108b8' },
          { endingDay: true, color: '#f3870c' }
        ] },
        '2024-12-05': { periods: [
          { endingDay: true, color: '#7108b8' },
          { endingDay: true, color: '#f3870c' }
        ] },
        '2024-12-06': { periods: [{ endingDay: true, color: '#7108b8' }] },
        '2024-12-07': { periods: [
          { endingDay: true, color: '#7108b8' },
          { endingDay: true, color: '#c0bd13' }
        ] },
        '2024-12-10': { periods: [{ endingDay: true, color: '#84f875' }] },
        '2024-12-11': { periods: [{ endingDay: true, color: '#84f875' }] },
        '2024-12-12': { periods: [{ endingDay: true, color: '#84f875' }] },
        '2024-12-13': { periods: [{ endingDay: true, color: '#84f875' }] },
        '2024-12-14': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-12-18': { periods: [{ endingDay: true, color: '#84f875' }] },
        '2024-12-19': { periods: [{ endingDay: true, color: '#84f875' }] },
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
        '1 a 7 - JIFENMG',
        '2 – Início do 3º Trimestre',
        '2 – Entrega dos resultados parciais referentes ao 2º trimestre',
        '3 a 5 – Recuperação parcial do 2º trimestre (extra-turno)',
        '7 – Sábado letivo referente a sexta-feira',
        '12 – Dia letivo referente a quarta-feira',
        '10 a 13 – Conselhos de classe (extra-turno)',
        '14 – Sábado letivo referente a segunda-feira',
        '18 e 19 – Reunião de pais (extra-turno)',
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
              <LegendaAzul />
              <LegendaVerdeClaro />
              <LegendaRoxa />
              <LegendaLaranja />
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