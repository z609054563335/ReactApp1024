const Item =({id,note,date,time,deleteData,submittingStatue})=>{

    function deleteItem(){
        submittingStatue.current=true
        deleteData(function(prev){
            return prev.filter(item => item.id !==id)
        })

    }

    return<div className="item">
    <div>
        <p>{note}</p>
        <p>日期:{date} 時間:{time}</p>    
    </div>
    <button onClick={deleteItem} className="remove">刪除</button>
    </div>
    }
    
    export default Item