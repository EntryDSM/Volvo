import * as s from "../style";
import React,{useState} from "react";

function GradeColumn (){
    const [GColumn, setGColumn]=useState({
        isOpen:false,
        GCNum:"X"
    })
    const GColumnFactor=["A","B","C","D","E","X"]
    return (
        <s.GradeColumnFontWrapper>
            {GColumn.isOpen?
                GColumnFactor.map(props=>(<p onClick={()=>{setGColumn({isOpen:false,GCNum:props})}}>{props}</p>)):
                <p onClick={()=>setGColumn({...GColumn,isOpen:true})}>{GColumn.GCNum}</p>
            }
        </s.GradeColumnFontWrapper>
    );
}

export default GradeColumn;