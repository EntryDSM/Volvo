import * as s from "../style";

function Volunteer(){
    return(
        <s.VolunteerWrapper>
            <p>봉사 {'&'} 출석</p>
            <s.VolunteerTable>
                <tr>
                    <th>봉사시간</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th rowSpan={2}>출석정보</th>
                    <td></td>
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