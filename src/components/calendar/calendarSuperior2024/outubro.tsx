import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaAmarela } from "../../legendas/amarelo";
import { LegendaVermelha } from "../../legendas/vermelho";
import { LegendaAzul } from "../../legendas/azul";
import { LegendaRoxa } from "../../legendas/roxo";
import { LegendaLaranja } from "../../legendas/laranja";
import { LegendaMarrom } from "../../legendas/marrom";
import { LegendaVerdeEscuro } from "../../legendas/verdeEscuro";
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
  '2024-10': {
      events: {
        '2024-10-01': { periods: [{ endingDay: true, color: '#f3870c' }] },
        '2024-10-02': { periods: [{ endingDay: true, color: '#f3870c' }] },
        '2024-10-03': { periods: [{ endingDay: true, color: '#2e1a08b2' }] },
        '2024-10-04': { periods: [{ endingDay: true, color: '#2e1a08b2' }] },
        '2024-10-07': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-08': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-09': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-10': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-11': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-12': { periods: [
          { endingDay: true, color: '#228B22' },
          { endingDay: true, color: '#ee2222' }
        ] },
        '2024-10-13': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-14': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-15': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-16': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-17': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-18': { periods: [{ endingDay: true, color: '#228B22' }] },
        '2024-10-21': { periods: [{ endingDay: true, color: '#159da7' }] },
        '2024-10-25': { periods: [{ endingDay: true, color: '#7108b8' }] },
        '2024-10-26': { periods: [
          { endingDay: true, color: '#c0bd13' },
          { endingDay: true, color: '#7108b8' },

        ] },
        '2024-10-28': { periods: [{ endingDay: true, color: '#f38af7' }] },
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '01 e 02 – Exames finais',
        '03 – Conferência de diários',
        '04 – Entrega dos Resultados Finais e envio de diários de classe à CRA',
        '7 a 18 – Férias 2024 (2º período - 12 dias)',
        '12 - Nossa Senhora Aparecida - Padroeira do Brasil e Dia das Crianças',
        '16 a 18 - Renovação de matrículas, renovação de matrícula trancada e reabertura de matrícula',
        '21 – Início do 2º semestre letivo 2024',
        '21 a 25 – Período de reajuste de matrículas. Solicitação de matrícula em disciplina extracurricular',
        '25 e 26 – Semana Nacional de Ciência e Tecnologia',
        '26 – Sábado letivo referente a segunda-feira',
        '31 – Sábado letivo referente a quinta-feira',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2024-10-01'
    },
}

const CalendarOutubro: React.FC = () => {
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
              <LegendaLaranja />
              <LegendaMarrom />
              <LegendaVerdeEscuro />
              <LegendaRosa />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarOutubro}

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