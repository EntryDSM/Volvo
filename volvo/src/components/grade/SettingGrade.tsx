import React, { useState } from "react";
import { GColumnFactor } from "../../constance/grade";
import * as s from "./style";
const SettingGrade = ()=>{
    const [isClick, setIsClick]= useState<number | null>(null);
    
    const GradeOnClick=(e:React.MouseEvent<HTMLDivElement>)=>{
        setIsClick(Number(e.currentTarget.id));
    }
    return(
        <s.SettingGradeWrapper>
            <p>전체 성적 초기화</p>
            {
                GColumnFactor.map((props :string,i:number)=>
                    <s.SettingGradeTitle isClick={i===isClick} key={i} id={String(i)} onClick={GradeOnClick}>{props}</s.SettingGradeTitle>
                )
            }
        </s.SettingGradeWrapper>
    )
}

export default SettingGrade;