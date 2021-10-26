import React from "react";
import * as s from "../style";
type VolunteerColumnProps ={
    text?:string,
    unit:string
}

const VolunteerColumn:React.FC<VolunteerColumnProps>=({text,unit})=>{
    return(
    <s.VolunteerColumnWrapper>
        {text&&<s.VolunteerColumnTitle>{text}</s.VolunteerColumnTitle>}
        <s.VolunteerColumnInputWrapper>
            <input type="number" defaultValue={0}></input>
            <p>{unit}</p>
        </s.VolunteerColumnInputWrapper>
    </s.VolunteerColumnWrapper>
    )
}

export default VolunteerColumn;