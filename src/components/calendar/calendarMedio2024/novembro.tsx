import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaAmarela } from "../../legendas/amarelo";
import { LegendaVermelha } from "../../legendas/vermelho";
import { LegendaAzul } from "../../legendas/azul";
import { LegendaRoxa } from "../../legendas/roxo";
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
  '2024-11': {
      events: {
        '2024-11-02': { periods: [{ endingDay: true, color: '#ee2222' }] },
        '2024-11-09': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-11-15': { periods: [{ endingDay: true, color: '#ee2222' }] },
        '2024-11-20': { periods: [{ endingDay: true, color: '#ee2222' }] },
        '2024-11-21': { periods: [{ endingDay: true, color: '#7108b8' }] },
        '2024-11-22': { periods: [{ endingDay: true, color: '#7108b8' }] },
        '2024-11-23': { periods: [
          { endingDay: true, color: '#7108b8' },
          { endingDay: true, color: '#c0bd13' }
        ] },
        '2024-11-30': { periods: [
          { endingDay: true, color: '#159da7' },
          { endingDay: true, color: '#c0bd13' }
        ] },
      },
      legends: [
        '02 – Finados',
        '9 – Sábado letivo referente a terça-feira',
        '15 –Proclamação da República',
        '20 – Dia Nacional da Consciência Negra',
        '21 a 23 – Ações voltadas à celebração do dia da Consciência Negra',
        '23 – Sábado letivo referente a quarta-feira',
        '25 – Data limite para envio do Relatório Individual de Trabalho – RIT do semestre/ano anterior',
        '25 – Data limite para envio do Plano Individual de Trabalho – PIT referente ao 2º semestre de 2024',
        '30 – Sábado letivo referente a quinta-feira',
        '30 – Fim do 2º Trimestre',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2024-11-01'
    },
}

const CalendarNovembro: React.FC = () => {
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
              <LegendaAzul />
              <LegendaRoxa />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarNovembro}

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