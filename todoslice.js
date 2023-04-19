import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState= {
            todo:[]
}
const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
                addTask:(state,action)=>
                {
                    console.log(action.payload.todo)
                    const newtask={
                        id:nanoid(),
                        name:action.payload.todo,
                        
                    }
                    console.log("dvvvvvvvvvvvvvv",newtask.name)
                    state.todo.push(newtask)
            

                },

                deletetask:(state,action)=>
                {
                      console.log(action.payload)
                     return state.todo.filter((item)=>console.log("item",item.id )!== console.log("action payload id",action.payload))
                        
                }
    }
})
export default todoslice.reducer;
export const {addTask,deletetask}=todoslice.actions;