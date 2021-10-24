import React from "react";

const Page1=()=>{

    const StyleSheet={
        width:"90vw",
        height:"100vh",
        backgroundColor:"#FF2E63",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
         <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>
          這裡是第一頁
         </h1> 
        </div>
    )
}
export default Page1;