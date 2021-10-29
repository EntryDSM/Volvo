import * as s from "../style";
import React,{useState} from "react";
import {GColumnFactor} from "../../../constance/grade";
interface Props{
    gradeState:string;
    stateSequence:number;
}

const GradeColumn:React.FC<Props>=(props)=>{
    const {gradeState,stateSequence}= props
    const [isOpen, setIsOpen]=useState<boolean>(false);
    const GColumnOnclickEvent =(props:string)=>{
        
    } 
    return (
        <s.GradeColumnFontWrapper>
            {isOpen?
                GColumnFactor.map(props=>(<p onClick={(e)=>{
                    setIsOpen(!isOpen);
                    GColumnOnclickEvent(props);
                }}>{props}</p>)):
                <p onClick={()=>setIsOpen(!isOpen)}>{gradeState}</p>
            }
        </s.GradeColumnFontWrapper>
    );
}

export default GradeColumn;