import { createStore } from "@reduxjs/toolkit";


const initialState ={
  users : [],
  loggedUbUser : null,
}

const reducer = (state = initialState,action) => {
  switch(action.type){
    case 'REGISTER':
    return{
      ...state,
      users : [...state.users,action.payload]
    }
    case 'LOGIN':
      return {
        ...state,
        user : action.payload
      }

    default : 
    return state;
  }
}

export default createStore(reducer)