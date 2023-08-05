import React from 'react'

export const addData = (data)=>{
    return{
        type:"selectedData",
        payload:data
    }
}