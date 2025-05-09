import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaAmarela } from "../../legendas/amarelo";
import { LegendaVermelha } from "../../legendas/vermelho";
import { LegendaVerdeClaro } from "../../legendas/verdeClaro";
import { LegendaRoxa } from "../../legendas/roxo";
import { LegendaAzul } from "../../legendas/azul";
import { LegendaLaranja } from "../../legendas/laranja";
import { tintColorBackGround } from "../../../constants/colors";

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
  '2024-09': {
      events: {
        '2024-09-07': { periods: [{ endingDay: true, color: '#ee2222' }] },
        '2024-09-14': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-09-21': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-09-25': { periods: [{ endingDay: true, color: '#f3870c' }] },
        '2024-09-26': { periods: [{ endingDay: true, color: '#f3870c' }] },
        '2024-09-27': { periods: [{ endingDay: true, color: '#84f875' }] },
        '2024-09-28': { periods: [
          { endingDay: true, color: '#c0bd13' },
          { endingDay: true, color: '#7108b8' },
          { endingDay: true, color: '#159da7' }
        ] },
        '2024-09-30': { periods: [{ endingDay: true, color: '#84f875' }] },
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '07 – Independência do Brasil',
        '14 – Sábado letivo referente a sexta-feira',
        '17 – Dia letivo referente à segunda-feira',
        '21 – Sábado letivo referente a segunda-feira',
        '25 e 26 – Recuperação parcial referente à etapa 2 (extra-turno)',
        '27 – Publicação do edital de vagas remanescentes',
        '27 – Conselho de Classe (extra-turno)',
        '28 – Sábado letivo referente a sexta-feira',
        '28 – Fim do semestre letivo/Etapa 2',
        '28 – Data limite para entrega dos resultados parciais referentes à etapa 2',
        '28 – IF Show de Talentos',
        '30 – Conselho de classe',
        '30 – Conferência de diários de classe',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2024-09-01'
    },
}

const CalendarSetembro: React.FC = () => {
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
              <LegendaVerdeClaro />
              <LegendaRoxa />
              <LegendaAzul />
              <LegendaLaranja />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarSetembro}

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