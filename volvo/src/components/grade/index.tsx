import * as s from "./style";
import GradeTable from "./table/GradeTable";
import Volunteer from "./table/Volunteer";
import { currentYear } from '../../constance/default';

function Grade (){
    return (
        <s.GradeWrapper>
            <s.GradeTitles>
                <s.GradeSchoolTitle>대덕소프트웨어마이스터고등학교</s.GradeSchoolTitle>
                <s.GradeBigTitle>{currentYear}년 지원자 성적 입력</s.GradeBigTitle>
            </s.GradeTitles>
            <Volunteer></Volunteer>
            <GradeTable></GradeTable>
            <s.PageMoveWrapper>
                <button>이전</button>
                <button>다음</button>
            </s.PageMoveWrapper>
            <div>footer</div>
        </s.GradeWrapper>
    )
}

export default Grade;