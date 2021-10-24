import Item from "./Item"


const List =({listdata,deleteData,submittingStatue})=>{
  return(
    <div className="list">
         {listdata.map((item)=>{
          const{ note,date,time,id }=item;
          return(
          <Item 
             key={id} 
             id={id}
             note={note} 
             date={date} 
             time={time} 
             deleteData={deleteData}
             submittingStatue={submittingStatue}
             />     
              );  
         })} 
        </div>
        );
    };
    
    export default List;