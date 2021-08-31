import { TYPES } from "./constants";

export const loginReducer = (state={user:false},action)=>{
  switch(action.type){
   case TYPES.LOGIN  :
       return{
           ...state,
           user:action.payload
       }


       default:
           return state
  }
}