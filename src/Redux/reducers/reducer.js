import React from 'react'

let initialState = {
    loading:false ,
    posts:[],
    error:null,
}

const reducer = (state=initialState,action)=>{
    switch(action.type)  {
        case "loading" :
            return {
                ...state,loading:true 
            }
        case "loaddataSucces" :
            return {
                ...state,loading:true,posts:action.payload
            }
        case "loadDataFailure" :
            return {
                ...state,loading:false,posts:[],error:action.payload
            }
        default :
            return {...state };
    }
}

export default reducer ;