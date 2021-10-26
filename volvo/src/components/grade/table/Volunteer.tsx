import VolunteerColumn from "../column/VolunteerColumn";
import * as s from "../style";

function Volunteer(){
    
    return(
        <s.VolunteerWrapper>
            <p>봉사 {'&'} 출석</p>
            <s.VolunteerTable>
                <tr>
                    <th>봉사시간</th>
                    <td><VolunteerColumn text={""} unit={"시간"}/></td>
                    <td></td>
                </tr>
                <tr>
                    <th rowSpan={2}>출석정보</th>
                    <td><VolunteerColumn text={"전체 미인정 결석 일수"} unit={"일"}/></td>
                    <td><VolunteerColumn text={"전체 미인정 조퇴 일수"} unit={"일"}/></td>
                </tr>
                <tr>
                    <td><VolunteerColumn text={"전체 미인정 지각 일수"} unit={"일"}/></td>
                    <td><VolunteerColumn text={"전체 미인정 결과 일수"} unit={"일"}/></td>
                </tr>
            </s.VolunteerTable>
        </s.VolunteerWrapper>
    )
}

export default Volunteer;