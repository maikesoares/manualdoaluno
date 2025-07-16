import React, { useState } from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, updateDoc } from 'firebase/firestore';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { db } from '~/utils/firebase';
import {
  tintColorWhite,
  tintColorBlack,
  tintColorGreenDark,
  tintColorGreenLight,
} from '~/src/constants/colors';

const EditarLabs = () => {
  const { title: titleParam, subtitle: subtitleParam, labs: labsParam } = useLocalSearchParams();
  const [title, setTitle] = useState(String(titleParam || ''));
  const [subtitle, setSubtitle] = useState(String(subtitleParam || ''));
  const [labs, setLabs] = useState<any>(JSON.parse(String(labsParam || '{}')));
  const [editingLab, setEditingLab] = useState<string | null>(null);
  const [editingEquip, setEditingEquip] = useState<number | null>(null);
  const [newLabModal, setNewLabModal] = useState(false);
  const [newLabName, setNewLabName] = useState('');
  const router = useRouter();

  const handleSave = async () => {
    try {
      const docRef = doc(db, 'recursos', 'laboratorios');
      await updateDoc(docRef, {
        title,
        subtitle,
        labs,
      });
      Alert.alert('Sucesso', 'Laboratórios atualizados com sucesso!');
      router.back();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar as alterações.');
      console.error(error);
    }
  };

  const addNewLab = () => {
    if (!newLabName.trim()) {
      Alert.alert('Atenção', 'Digite um nome para o laboratório');
      return;
    }

    const labId = `lab${Object.keys(labs).length + 1}`;

    setLabs((prev: any) => ({
      ...prev,
      [labId]: {
        title: newLabName,
        equipments: [],
      },
    }));

    setNewLabName('');
    setNewLabModal(false);
  };

  const updateLabTitle = (labKey: string, newTitle: string) => {
    setLabs((prev: any) => ({
      ...prev,
      [labKey]: {
        ...prev[labKey],
        title: newTitle,
      },
    }));
  };

  const updateEquipment = (labKey: string, index: number, field: string, value: string) => {
    setLabs((prev: any) => {
      const newLabs = { ...prev };
      newLabs[labKey].equipments[index][field] = value;
      return newLabs;
    });
  };

  const addEquipment = (labKey: string) => {
    setLabs((prev: any) => {
      const newLabs = { ...prev };
      newLabs[labKey].equipments.push({
        icon: 'desktop',
        description: 'Novo equipamento',
      });
      return newLabs;
    });
  };

  const removeEquipment = (labKey: string, index: number) => {
    setLabs((prev: any) => {
      const newLabs = { ...prev };
      newLabs[labKey].equipments.splice(index, 1);
      return newLabs;
    });
  };

  const removeLab = (labKey: string) => {
    setLabs((prev: any) => {
      const newLabs = { ...prev };
      delete newLabs[labKey];
      return newLabs;
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Editar Laboratórios</Text>

        <Text style={styles.label}>Título Principal</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Título principal"
        />

        <Text style={styles.label}>Subtítulo</Text>
        <TextInput
          style={[styles.input, { minHeight: 100 }]}
          value={subtitle}
          onChangeText={setSubtitle}
          placeholder="Subtítulo"
          multiline
        />

        <TouchableOpacity style={styles.addLabButton} onPress={() => setNewLabModal(true)}>
          <MaterialIcons name="add" size={24} color={tintColorWhite} />
          <Text style={styles.addLabButtonText}>Adicionar Laboratório</Text>
        </TouchableOpacity>

        {Object.keys(labs).map((labKey) => (
          <View key={labKey} style={styles.labContainer}>
            <View style={styles.labHeader}>
              <TextInput
                style={[styles.input, styles.labTitleInput]}
                value={labs[labKey].title}
                onChangeText={(text) => updateLabTitle(labKey, text)}
                placeholder="Nome do laboratório"
              />
              <TouchableOpacity style={styles.removeLabButton} onPress={() => removeLab(labKey)}>
                <MaterialIcons name="delete" size={20} color="#FF6347" />
              </TouchableOpacity>
            </View>

            {labs[labKey].equipments.map((equip: any, index: number) => (
              <View key={`${labKey}-${index}`} style={styles.equipContainer}>
                {editingLab === labKey && editingEquip === index ? (
                  <>
                    <Text style={styles.label}>Ícone (nome do ícone)</Text>
                    <TextInput
                      style={styles.input}
                      value={equip.icon}
                      onChangeText={(text) => updateEquipment(labKey, index, 'icon', text)}
                      placeholder="Ícone (ex: desktop, fan, etc)"
                    />

                    <Text style={styles.label}>Descrição do Equipamento</Text>
                    <TextInput
                      style={[styles.input, { minHeight: 80 }]}
                      value={equip.description}
                      onChangeText={(text) => updateEquipment(labKey, index, 'description', text)}
                      placeholder="Descrição do equipamento"
                      multiline
                    />

                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => removeEquipment(labKey, index)}>
                      <Text style={styles.removeButtonText}>Remover Equipamento</Text>
                    </TouchableOpacity>

                    <Button
                      title="Salvar Alterações"
                      color={tintColorGreenDark}
                      onPress={() => {
                        setEditingLab(null);
                        setEditingEquip(null);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      style={styles.tableRow}
                      onPress={() => {
                        setEditingLab(labKey);
                        setEditingEquip(index);
                      }}>
                      <View style={styles.tableIcon}>
                        <MaterialCommunityIcons name={equip.icon} size={24} color="#228B22" />
                      </View>
                      <Text style={styles.tableText}>{equip.description}</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            ))}

            <Button
              title="Adicionar Equipamento"
              color="#4682B4"
              onPress={() => addEquipment(labKey)}
            />
          </View>
        ))}

        <Button title="Salvar Todas Alterações" color={tintColorGreenDark} onPress={handleSave} />
      </ScrollView>

      <Modal
        visible={newLabModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setNewLabModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo Laboratório</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do laboratório (ex: LAB IV)"
              value={newLabName}
              onChangeText={setNewLabName}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" color="#FF6347" onPress={() => setNewLabModal(false)} />
              <Button title="Adicionar" color={tintColorGreenDark} onPress={addNewLab} />
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: tintColorWhite,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: tintColorBlack,
    marginBottom: 20,
    textAlign: 'center',
  },
  labContainer: {
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  labHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  labTitleInput: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  removeLabButton: {
    marginLeft: 10,
    padding: 5,
  },
  equipContainer: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: tintColorBlack,
  },
  input: {
    borderWidth: 1,
    borderColor: tintColorBlack,
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    minHeight: 40,
    textAlignVertical: 'top',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 12,
  },
  tableIcon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
    flex: 1,
    fontWeight: '600',
  },
  removeButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  removeButtonText: {
    color: tintColorWhite,
    fontWeight: 'bold',
  },
  addLabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tintColorGreenLight,
    padding: 15,
    borderRadius: 8,
    marginVertical: 15,
  },
  addLabButtonText: {
    color: tintColorWhite,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: tintColorWhite,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default EditarLabs;
