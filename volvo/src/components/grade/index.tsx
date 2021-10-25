import * as s from "./style";
import Volunteer from "./table/Volunteer";

function Grade (){
    return (
        <s.GradeWrapper>
            <s.GradeTitles>
                <s.GradeSchoolTitle>대덕소프트웨어마이스터고등학교</s.GradeSchoolTitle>
                <s.GradeBigTitle>2022년 지원자 성적 입력</s.GradeBigTitle>
            </s.GradeTitles>
            <Volunteer></Volunteer>
        </s.GradeWrapper>
    )
}

export default Grade;