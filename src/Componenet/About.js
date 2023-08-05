import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react';
import { fetchdata } from '../Redux/actions/DataActions';
const About = () => {
    const [activeButton, setActiveButton] = useState('details');
    // console.log('inside about') ;
    let dispatch  = useDispatch() ;
    let data = useSelector(state=>state.selectedData) ;
    let storedata = useSelector(state=>state.reducer) ;

    // console.log(storedata) ;
    let res = [] ;
    res[0] = storedata.posts[0] ;
    res[1] = storedata.posts[1] ;
    res[2] = storedata.posts[2] ;

    // console.log(res) ;

    // console.log('inside about')
    const[info,setInfo] = useState(data.body) ;
    // console.log(data) ;
    const details = ()=>{
        setActiveButton('details');
        setInfo(`SOME INFORMATION : ${data.body}`) ;
    }
    const userInfo = ()=>{
        setActiveButton('userInfo');
        setInfo(`Post was posted by ${data.userId}`) ;
    }

  return (
    <div className='about-container'>
        <h2> Post Number is {data.postId}</h2>
        <div className='selected-post'>
                <div className='left'>
                  <img src={data.imgSrc} alt='logo'/> 
                  <h3 id='ttl'>{data.title}</h3>  
                </div>
               
                  
            <div className='sub-part'>
                <div className='btns'>
                    <button onClick={details} id='btn1' className={activeButton === 'details' ? 'active' : ''}>details</button>
                    <button onClick={userInfo} id='btn2' className={activeButton === 'userInfo' ? 'active' : ''}>user info</button>
                </div>
                <div id='img-info'>
                    <p>{info}</p>
                </div>
            </div>
        </div>
        <h1>More Posts</h1>
        <div className='sugg-container'>
            {
                res.length >= 1 && res.map((curr,index) => {
                    return (
                        <div  key={index} className='card'>
                            <img src={curr.imgSrc}/>
                            <h3>title : {curr.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default About