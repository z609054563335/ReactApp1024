import {useState,useEffect,useRef} from 'react'
import {API_GET_DATA}from '../../global/constants'

import Edit from "./Edit"
import List from './List';
import './index.css'

async function fetchData(setData){
const res=await fetch(API_GET_DATA)
const {data}=await res.json()
setData (data)
}

async function fetchSetData(data){
    await fetch(API_GET_DATA,
    {method:"PUT",
        headers:{
            'Content-type':'applicstion/json'
        },
        body: JSON.stringify({data})
    })
    }


const Home =()=>{
    const[data,setData]=useState([])
    const submittingStatue=useRef(false)


    useEffect(()=>{
        if(!submittingStatue.current){
            return
        }
        fetchSetData(data)
        .then(data=>submittingStatue.current=false)
    },[data])

    useEffect(()=>{
       fetchData(setData)
    },[] )

return<div className="app">
 <Edit add={setData} submittingStatue={submittingStatue}/>
 <List listdata={data} deleteData={setData} submittingStatue={submittingStatue}/>
</div>
}

export default Home