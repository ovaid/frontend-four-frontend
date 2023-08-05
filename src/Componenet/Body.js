import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import { fetchdata } from '../Redux/actions/DataActions';
import { addData } from '../Redux/actions/selectedDataAction';
import { useNavigate } from 'react-router';
const Body = () => {
    const[info,setInfo] = useState() ; 
    let data = useSelector(state=>state.reducer) ;
    let navigate = useNavigate() ;

    let dispatch = useDispatch() ;
    // console.log(data) ;
    let post = data.posts ;
  
    // console.log(post) ;
    // console.log('working');

    useEffect(()=>{
         dispatch(fetchdata());
    },[])
    
  return (
    <div className='body-container'>
      <h2>Social Media For Travellers</h2>
      <input type='text' placeholder='seach here'/>
      <div className='post-container'>
        {/* map through the posts */} 
        {
          post.length && post.map((post,index) => {
            return (
              <div key={post.id} className='card'>
                <img src={post.imgSrc}/>
                <h3>{post.title}</h3>
                <div className='p-b'>
                    <p> {post.body}</p>
                    <button onClick={()=>
                    {
                      dispatch(addData(post));
                      navigate('/aboute')
                    }
                    }><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkglUK-XSgJbRotMASTT4Emm2rfGF4CK3-MQ&usqp=CAU'/></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Body ;