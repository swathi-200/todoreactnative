import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todos from './todos';
import Todolist from './todolist';
import { store } from './store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Todos />
      <Todolist/>
   </View>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
