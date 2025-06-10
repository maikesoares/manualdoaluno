import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/utils/firebase';

export const fetchInformacoesGerais = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'informacoes_gerais'));
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar informações gerais:', error);
    return [];
  }
};
