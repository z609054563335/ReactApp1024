import { useState } from "react"
import { v4 } from "uuid"
import { HashRouter,Route,Switch } from "react-router-dom"
import Page1 from "../Page1"

const Edit =({add,submittingStatue})=>{

    const[note,setNote]=useState("")
    function noteChange(e){
        setNote(e.target.value)
    }  

    const[date,setDate]=useState("")
    function dateChange(e){
        setDate(e.target.value)
    }  

    const[time,setTime]=useState("")
    function timeChange(e){
        setTime(e.target.value)
    }  


    function addItem(){
        submittingStatue.current=true
     add(function(prevData)
        {
         return[
             {
             id:v4(),
             note,
             date,
             time
             },
              ...prevData,
            ]
        })
    }

function newpage(){
    window.location.href='https://my-app-bn1l7avf1-z609054563335.vercel.app/#/'

}

function newpage2(){
   
    window.location.href='https://my-app-bn1l7avf1-z609054563335.vercel.app/#/second'
}

    return<HashRouter>
        <Switch>
    <div>
        <h1>備忘錄</h1>
        <p>要記錄的事項:</p>
        <input type="text" value={note} onChange={noteChange}/>
        <p>提醒日期:</p>
        <input type="date" value={date} onChange={dateChange}/>
        <p>提醒時間:</p>
        <input type="time" value={time} onChange={timeChange}/>
        <button onClick={addItem} className="add">新增提醒事項</button>
        <button onClick={newpage} className="newadd">回來</button>
        <Route path="/second" component={Page1}/>
        <button onClick={newpage2} className="newadd">另一個分頁</button>
    </div>
    </Switch>
    </HashRouter>
    }
    
    export default Edit