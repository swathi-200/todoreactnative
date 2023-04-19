import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import {Ionicons} from '@expo/vector-icons'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletetask } from "./todoslice";
const data = [
  {
    id: 1,
    title: "hellooo",
  },
  {
    id: 2,
    title: "How are you",
  },
];
export default function Todolist() {
    const dispatch=useDispatch();
    const name=useSelector(state=>state.task.todo)
    console.log("naaaaaaaaame",name)

  return (
    <View>
      <FlatList
        data={name}
        renderItem={({ item }) => (
          <View style={styles.todoslist}>
            <Text style={{fontSize:20}}>{item.name}</Text>
            <TouchableOpacity onPress={()=>dispatch(deletetask(item.id))}>
                <Ionicons name="trash" size={30}/>
            </TouchableOpacity>

          </View>
        )}
     keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  todoslist: {
    
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    marginVertical:5,
    padding:10,
    margin:10,
    marginTop:30,
    backgroundColor:'yellow',
    

  },
});
