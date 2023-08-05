import React from 'react'

let initialState = {
    userId:null,
    postId:null,
    imgSrc:"",
    title:'',
    body:''
}

const selectedData = (state=initialState,action)=>{
        switch(action.type){
            case "selectedData" :
                return {
                    ...state,
                    userId:action.payload.userId,
                    postId:action.payload.id,
                    imgSrc:action.payload.imgSrc,
                    title: action.payload.title,
                    body:  action.payload.body
                }
            default :
                return initialState ;
        }
}

export default selectedData ;