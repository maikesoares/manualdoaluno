import { router } from 'expo-router';
import { MenuItem } from '../types/types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    title: 'Informações Gerais',
    subItems: [
      {
        id: '1-1',
        title: 'Missão e visão da Instituição',
        onPress: () => router.push('../(stacks)/info/missaoEVisao'),
      },

      {
        id: '1-2',
        title: 'História da Instituição',
        onPress: () => router.push('../(stacks)/info/historia'),
      },
      {
        id: '1-3',
        title: 'Contatos Principais',
        onPress: () => router.push('../(stacks)/info/contatos'),
      },
    ],
  },
  {
    id: '2',
    title: 'Serviços de Apoio',
    subItems: [
      { id: '2-1', title: 'Conceito', onPress: () => router.push('../(stacks)/servicos/conceito') },
      {
        id: '2-2',
        title: 'Moradia Estudantil',
        onPress: () => router.push('../(stacks)/servicos/moradiaEstudantil'),
      },
      {
        id: '2-3',
        title: 'Assistência e Apoio',
        onPress: () => router.push('../(stacks)/servicos/apoioAoEstudante'),
      },
      {
        id: '2-4',
        title: 'Segurança Alimentar',
        onPress: () => router.push('../(stacks)/servicos/segurancaAlimentar'),
      },
      {
        id: '2-5',
        title: 'Inclusão Digital',
        onPress: () => router.push('../(stacks)/servicos/inclusaoDigital'),
      },
      {
        id: '2-6',
        title: 'Creche - Escola',
        onPress: () => router.push('../(stacks)/servicos/crecheEscola'),
      },
      {
        id: '2-7',
        title: 'Educação a Diversidade',
        onPress: () => router.push('../(stacks)/servicos/educacaoDiversidade'),
      },
      {
        id: '2-8',
        title: 'Necessidades Específicas',
        onPress: () => router.push('../(stacks)/servicos/necessidadesEspecificas'),
      },
      {
        id: '2-9',
        title: 'Atenção a Saúde',
        onPress: () => router.push('../(stacks)/servicos/atencaoASaude'),
      },
      {
        id: '2-10',
        title: 'Apoio Psicológico',
        onPress: () => router.push('../(stacks)/servicos/apoioPsicologico'),
      },
      {
        id: '2-11',
        title: 'Acompanhamento Social',
        onPress: () => router.push('../(stacks)/servicos/acompanhamentoSocial'),
      },
      {
        id: '2-12',
        title: 'Incentivo ao Esporte',
        onPress: () => router.push('../(stacks)/servicos/esporteELazer'),
      },
      {
        id: '2-13',
        title: 'Educação Artística',
        onPress: () => router.push('../(stacks)/servicos/educacaoArtisticaECultural'),
      },
      {
        id: '2-14',
        title: 'Programa Renovar',
        onPress: () => router.push('../(stacks)/servicos/programaRenovar'),
      },
      {
        id: '2-15',
        title: 'Integração Dos Estudantes',
        onPress: () => router.push('../(stacks)/servicos/integracaoDosEstudantes'),
      },
      {
        id: '2-16',
        title: 'Formação à Cidadania',
        onPress: () => router.push('../(stacks)/servicos/incentivoACidadania'),
      },
      {
        id: '2-17',
        title: 'Participação à Eventos',
        onPress: () => router.push('../(stacks)/servicos/participacaoAEventos'),
      },
      {
        id: '2-18',
        title: 'Auxílio Emergencial',
        onPress: () => router.push('../(stacks)/servicos/auxilioEmergencial'),
      },
      {
        id: '2-19',
        title: 'Mobilidade Acadêmica',
        onPress: () => router.push('../(stacks)/servicos/mobilidadeAcademica'),
      },
      {
        id: '2-20',
        title: 'Pesquisa e Extensão',
        onPress: () => router.push('../(stacks)/servicos/pesquisaEExtensao'),
      },
    ],
  },
  {
    id: '3',
    title: 'Recursos Acadêmicos',
    subItems: [
      {
        id: '3-1',
        title: 'Biblioteca',
        onPress: () => router.push('../(stacks)/recursos/biblioteca'),
      },
      {
        id: '3-2',
        title: 'Laboratórios',
        onPress: () => router.push('../(stacks)/recursos/laboratorio'),
      },
    ],
  },
  {
    id: '4',
    title: 'Calendário Acadêmico',
    subItems: [
      {
        id: '4-1',
        title: 'Ensino Superior - 2024',
        onPress: () => router.push('../(stacks)/calendar2024/superior'),
      },
      {
        id: '4-2',
        title: 'Ensino Médio - 2024',
        onPress: () => router.push('../(stacks)/calendar2024/medio'),
      },
      {
        id: '4-3',
        title: 'Curso Técnico - 2024',
        onPress: () => router.push('../(stacks)/calendar2024/tecnico'),
      },
      {
        id: '4-4',
        title: 'Ensino Superior - 2025',
        onPress: () => router.push('../(stacks)/calendar2025/superior'),
      },
      {
        id: '4-5',
        title: 'Ensino Médio - 2025',
        onPress: () => router.push('../(stacks)/calendar2025/medio'),
      },
      {
        id: '4-6',
        title: 'Curso Técnico - 2025',
        onPress: () => router.push('../(stacks)/calendar2025/tecnico'),
      },
    ],
  },
];
