import * as s from "./style";
import GradeTable from "./table/GradeTable";
import Volunteer from "./table/Volunteer";
import { currentYear } from '../../constance/default';
import { GradeType } from "../../constance/grade";
 interface Props {
    volunteerTime: number,
    absence: number,//결석
    leave: number,//조퇴
    lateness: number,//지각
    truancy: number,//무단 결석
    grade: GradeType,
    isSuccessSaveGrade?: boolean,
    setInput:(paylode:{name:string,value:number})=>void
    setGrade:(paylode:{subject:string,value:string,stateSequence:number})=>void
}

const Grade:React.FC<Props> =({
    volunteerTime,
    absence,
    leave,
    lateness,
    truancy,
    grade,
    isSuccessSaveGrade,
    setInput,
    setGrade
})=>{
    
    return (
        <s.GradeWrapper>
            <s.GradeTitles>
                <s.GradeSchoolTitle>대덕소프트웨어마이스터고등학교</s.GradeSchoolTitle>
                <s.GradeBigTitle>{currentYear}년 지원자 성적 입력</s.GradeBigTitle>
            </s.GradeTitles>
            <Volunteer 
                volunteerTime={volunteerTime}
                absence={absence}
                leave={leave}
                lateness={lateness}
                truancy={truancy}
                setInput={setInput} />
            <GradeTable {...grade} />
            <s.PageMoveWrapper>
                <button>이전</button>
                <button>다음</button>
            </s.PageMoveWrapper>
            <div>footer</div>
        </s.GradeWrapper>
    )
}

export default Grade;