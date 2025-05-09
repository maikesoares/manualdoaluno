import React from 'react';
import { Text, ScrollView, StyleSheet, View, Linking } from 'react-native';
import {
  tintColorBackGround,
  tintColorBlack,
  tintColorGreenDark,
  tintColorGreenDarkOpacity,
  tintColorWhite,
} from '~/src/constants/colors';

export default function BibliotecaScreen() {
  const openLink = () => {
    Linking.openURL('https://biblioteca.ifnmg.edu.br');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>
          REGULAMENTO DE CIRCULAÇÃO DE ACERVOS E SERVIÇOS DO SISTEMA INTEGRADO DE BIBLIOTECAS DO
          IFNMG - SIBI/IFNMG
        </Text>

        <Text style={styles.subHeading}>DAS DISPOSIÇÕES GERAIS</Text>

        <Text style={styles.paragraph}>
          Este regulamento visa estabelecer normas, procedimentos e serviços prestados pelas
          Bibliotecas que compõem o SIBI/IFNMG, garantindo, a seus usuários, o funcionamento
          eficiente e eficaz de suas atividades.
        </Text>

        <Text style={styles.paragraph}>
          Sendo assim, ficam sujeitas a este Regulamento todas as Bibliotecas do SIBI/IFNMG.
        </Text>

        <Text style={styles.subHeading}>OBJETIVOS</Text>

        <Text style={styles.paragraph}>Os objetivos deste Regulamento são:</Text>
        <Text style={styles.listItem}>
          I - padronizar serviços e produtos das Bibliotecas do IFNMG;
        </Text>
        <Text style={styles.listItem}>
          II - promover o acesso a informação, de forma atualizada e qualificada, aos usuários;
        </Text>
        <Text style={styles.listItem}>
          III - disponibilizar com eficiência os serviços e produtos das Bibliotecas do IFNMG;
        </Text>
        <Text style={styles.listItem}>
          IV - estabelecer os direitos e deveres dos usuários das Bibliotecas do IFNMG.
        </Text>

        <Text style={styles.subHeading}>FUNCIONAMENTO</Text>

        <Text style={styles.paragraph}>
          As Bibliotecas do SIBI/IFNMG atendem ao público interno e externo, nos dias e horários
          estabelecidos pelas coordenações/responsáveis e Direção de Ensino e/ou Geral dos campi.
        </Text>
        <Text style={styles.paragraph}>Sendo 07:00 às 23:00 o horário de funcionamento atual.</Text>

        <Text style={styles.subHeading}>SERVIÇOS</Text>
        <Text style={styles.paragraph}>
          As Bibliotecas integrantes do SIBI/IFNMG estão à disposição dos usuários, oferecendo-lhes,
          além da utilização do seu acervo, os seguintes serviços:
        </Text>
        <Text style={styles.listItem}>I - consulta ao acervo online e presencial;</Text>
        <Text style={styles.listItem}>II - circulação de materiais;</Text>
        <Text style={styles.listItem}>III - serviço de empréstimo e devolução de materiais;</Text>
        <Text style={styles.listItem}>IV - renovação e reserva presencial/online;</Text>
        <Text style={styles.listItem}>V - ambientes de estudo;</Text>
        <Text style={styles.listItem}>VI - rede de Internet sem fio (WIFI);</Text>
        <Text style={styles.listItem}>VII - treinamento de usuários;</Text>
        <Text style={styles.listItem}>VIII - capacitação de usuários;</Text>
        <Text style={styles.listItem}>
          IX - orientação à normalização de trabalhos científicos e acadêmicos;
        </Text>
        <Text style={styles.listItem}>
          X - confecção de fichas catalográficas em trabalhos científicos;
        </Text>
        <Text style={styles.listItem}>
          XI - serviço de referência presencial/online (atendimento direto aos usuários e resolução
          de dúvidas);
        </Text>
        <Text style={styles.listItem}>XII - Declaração de Nada Consta;</Text>
        <Text style={styles.listItem}>
          XIII - acesso às plataformas digitais de livros, normas técnicas e periódicos.
        </Text>

        <Text style={styles.subHeading}>USUÁRIOS</Text>
        <Text style={styles.paragraph}>São considerados usuários do SIBl/IFNMG:</Text>
        <Text style={styles.listItem}>I - discentes do IFNMG;</Text>
        <Text style={styles.listItem}>II - docentes do IFNMG;</Text>
        <Text style={styles.listItem}>III - professores substitutos/visitantes do IFNMG;</Text>
        <Text style={styles.listItem}>IV - técnicos administrativos do IFNMG;</Text>
        <Text style={styles.listItem}>V - estagiários, bolsistas do IFNMG;</Text>
        <Text style={styles.listItem}>VI - terceirizados do IFNMG;</Text>
        <Text style={styles.listItem}>
          VII - comunidade externa - poderá utilizar os recursos informacionais da Biblioteca
          somente na forma de consulta local.
        </Text>

        <Text style={styles.subHeading}>TIPOS DE OBRAS PARA EMPRÉSTIMO</Text>
        <Text style={styles.paragraph}>
          São considerados materiais disponíveis para o empréstimo domiciliar: livros, folhetos e
          multimeios.
        </Text>
        <Text style={styles.paragraph}>São de uso restrito ao recinto da Biblioteca:</Text>
        <Text style={styles.listItem}>
          I - Coleção de Referência: dicionários, enciclopédias, atlas, normas técnicas, publicações
          periódicas, mapas, catálogos, teses, dissertações, monografias;
        </Text>
        <Text style={styles.listItem}>
          II - Coleção Livro Exclusivo: livros destinados para consultas internas.
        </Text>
        <Text style={styles.listItem}>
          A coleção de Livro Exclusivo é destinada à consulta no ambiente das Bibliotecas, podendo
          ser emprestada apenas nos finais de semanas, observado o horário de funcionamento das
          Bibliotecas, devendo ser devolvida no seguinte dia útil, no início do expediente,
          impreterivelmente.
        </Text>
        <Text style={styles.paragraph}>
          O acesso ao catálogo online pode ser feito no Portal do IFNMG, por meio do link{' '}
          <Text style={styles.link} onPress={openLink}>
            https://biblioteca.ifnmg.edu.br
          </Text>
          .
        </Text>

        <Text style={styles.subHeading}>
          DO LIMITE DE OBRAS POR USUÁRIO E DO PRAZO DO EMPRÉSTIMO
        </Text>
        <Text style={styles.paragraph}>Sobre empréstimo de materiais:</Text>
        <Text style={styles.listItem}>
          I - Ao usuário discente são permitidos os empréstimos de até 05 itens por tipo de material
          pelo prazo de 07 dias;
        </Text>
        <Text style={styles.listItem}>
          II - Ao usuário docente são permitidos os empréstimos de até 07 itens por tipo de material
          pelo prazo de 14 dias;
        </Text>
        <Text style={styles.listItem}>
          III - Aos servidores / funcionários são permitidos os empréstimos de até 05 itens por tipo
          de material pelo prazo de 07 dias.
        </Text>

        <Text style={styles.subHeading}>SANÇÕES E DOS ATOS DE INDISCIPLINA </Text>
        <Text style={styles.paragraph}>
          O atraso na devolução de materiais retirados para empréstimo domiciliar implicará nas
          seguintes sanções:
        </Text>
        <Text style={styles.listItem}>
          I - suspensão do serviço de empréstimo/reserva/renovação; ou
        </Text>
        <Text style={styles.listItem}>II - pagamento de multa.</Text>
        <Text style={styles.paragraph}>
          A biblioteca poderá realizar cobranças dos materiais atrasados, de todas as categorias de
          usuários, utilizando mecanismos diversos, como: listagens, telefonemas, mensagens
          telefônicas, e-mail e correspondências.
        </Text>
        <Text style={styles.paragraph}>
          Após a cobrança efetuada pela Biblioteca, e findo o prazo de 15 (quinze) dias sem a
          correspondente devolução, os nomes dos inadimplentes de todas as categorias de usuários
          serão enviados à Direção de Ensino, que por sua vez terá o prazo de 15 dias para aplicação
          das sanções previstas na Instituição e na legislação vigente.
        </Text>
        <Text style={styles.paragraph}>
          A Biblioteca emitirá uma certidão positiva de débito, em nome dos usuários inadimplentes
          que se desligarem da instituição e esta será encaminhada ao diretor do campus, para que
          ele faça a cobrança por meio de processo administrativo, após esgotadas as tratativas
          previstas no caput deste artigo.
        </Text>
        <Text style={styles.paragraph}>
          No caso de perda, extravio ou danos causados aos materiais da Biblioteca, o usuário
          responderá pelo prejuízo, no prazo máximo de 30 (trinta) dias, das seguintes formas:
        </Text>
        <Text style={styles.listItem}>
          I - substituição da obra por outro exemplar exatamente igual (mesmo autor, título, edição,
          data, etc.), quando se tratar de equipamentos disponibilizados pela biblioteca aos
          usuários, os mesmos, deverão ser substituídos por outros de mesma marca e demais
          características idênticas ao equipamento que foi danificado ou extraviado;
        </Text>
        <Text style={styles.listItem}>
          II - havendo impossibilidade de reposição por outro exemplar/equipamento exatamente igual,
          por se achar a obra/equipamento esgotada, o usuário indenizará a biblioteca com outra
          publicação/equipamento atualizada sobre o mesmo assunto, mesmo valor contábil e de
          conteúdo, determinado pelo bibliotecário (a), com fundamentação em análise técnica;
        </Text>
        <Text style={styles.listItem}>
          III - no caso de obras compostas de volumes ou partes, a reposição será feita pela obra no
          todo, quando a publicação não for vendida separadamente;
        </Text>
        <Text style={styles.listItem}>
          IV - o usuário que não cumprir o prazo de reposição, ficará suspenso do serviço de
          empréstimo. Sendo encaminhado às coordenações e direções competentes documento sobre o
          fato ocorrido.
        </Text>
        <Text style={styles.paragraph}>
          O usuário poderá ter seu cadastro suspenso ou cancelado, e estará sujeito a sanções
          disciplinares, em caso de faltas previstas nos Regulamentos Disciplinar Discente, dos
          Cursos Técnicos de Nível Médio e dos Cursos de Graduação do IFNMG, cuja gravidade
          comprometa a boa ordem no recinto das Bibliotecas.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tintColorBackGround,
    padding: 16,
  },
  card: {
    backgroundColor: tintColorWhite,
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: tintColorWhite,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: tintColorGreenDark,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: tintColorWhite,
    marginTop: 28,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: tintColorGreenDarkOpacity,
    paddingVertical: 10,
    borderRadius: 8,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  paragraph: {
    fontSize: 18,
    color: tintColorBlack,
    lineHeight: 28,
    marginBottom: 14,
    textAlign: 'justify',
    padding: 14,
    backgroundColor: tintColorBackGround,
    borderRadius: 8,
  },
  listItem: {
    fontSize: 18,
    color: tintColorBlack,
    lineHeight: 28,
    marginBottom: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: tintColorBackGround,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },

  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
