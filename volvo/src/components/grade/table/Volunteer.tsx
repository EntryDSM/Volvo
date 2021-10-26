import VolunteerColumn from "../column/VolunteerColumn";
import * as s from "../style";


function Volunteer(){
    return(
        <s.VolunteerWrapper>
            <p>봉사 {'&'} 출석</p>
            <s.VolunteerTable style={{width:"100%",tableLayout:"fixed"}}>
                <tr>
                    <th>봉사시간</th>
                    <td><VolunteerColumn text={""} unit={"시간"}></VolunteerColumn></td>
                    <td></td>
                </tr>
                <tr>
                    <th rowSpan={2}>출석정보</th>
                    <td><VolunteerColumn text={"전체 미인정 결석 일수"} unit={"일"}></VolunteerColumn></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </s.VolunteerTable>
        </s.VolunteerWrapper>
    )
}

export default Volunteer;