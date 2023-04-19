import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './todoslice';
export default function Todos() {
    const dispatch=useDispatch();
    const [todo,settodo]=useState();
    
  return (
    <View>
       
    <View style={styles.textinput}>
      <TextInput placeholder='Add a todo' style={styles.text} onChangeText={settodo} />
    </View>
    <View style={styles.todo}>
       <TouchableOpacity onPress={()=>dispatch(addTask({todo}))}>
           <Text style={{color:'white',fontSize:25}}>Add</Text>
        </TouchableOpacity> 
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textinput:{
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginVertical:50,
        marginHorizontal:10,
        height:50,
         
    },
    text:{
        color:'gray',
        fontSize:20,
        marginHorizontal:10
    },
    todo:{
        backgroundColor:'black',
        
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        margin:5,
        borderRadius:5,
        borderColor:'gray',
        marginHorizontal:10,
        marginBottom:40
        

    }
 
})