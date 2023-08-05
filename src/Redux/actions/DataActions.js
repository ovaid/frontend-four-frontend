import React from 'react'
import axios from "axios"

export const loaddata = ()=>{
    return {
        type:"loading"
    }
}

export const loadDataSuccess = (data)=>{
    return {
        type:"loaddataSucces",
        payload:data
    }
}

export const loadDataFailure = (error)=>{
    return {
        type:"loadDataFailure",
        payload:error
    }
}

export function fetchdata(){
    return (
        async (dispatch) =>{
             dispatch(loaddata());
            // try{
            // axios.get('https://jsonplaceholder.typicode.com/posts')
            // .then((response)=> dispatch(loadDataSuccess(response.data)))
            // }
            // catch(err){
            //     dispatch(loadDataFailure(err))
            // }
            try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const updatedData = await Promise.all(response.data.map(async (item) => 
            {
            const imageUrl = `https://picsum.photos/200?random=${item.id}`;
            const imageResponse = await axios.get(imageUrl, { responseType: 'blob' });
            const imageSrc = URL.createObjectURL(imageResponse.data);
            return { ...item, imgSrc: imageSrc }
            }));
            dispatch(loadDataSuccess(updatedData))
            }
           catch(err){
                dispatch(loadDataFailure(err))
            }
        }
    )
}