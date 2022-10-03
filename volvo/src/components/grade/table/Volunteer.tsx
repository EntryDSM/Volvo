import React from 'react';
import VolunteerColumn from '../column/VolunteerColumn';
import * as s from '../style';

interface Props {
  volunteerTime: number;
  absence: number;
  leave: number;
  lateness: number;
  truancy: number;
  setInput: (paylode: { name: string; value: number }) => void;
}
const Volunteer: React.FC<Props> = ({
  volunteerTime,
  absence,
  leave,
  lateness,
  truancy,
  setInput,
}) => {
  return (
    <s.VolunteerWrapper>
      <p>봉사 {'&'} 출석</p>
      <s.VolunteerTable>
        <tbody>
          <tr>
            <th>봉사시간</th>
            <td>
              <VolunteerColumn
                setInput={setInput}
                unit={'시간'}
                name={'volunteerTime'}
                value={volunteerTime}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <th rowSpan={2}>출석정보</th>
            <td>
              <VolunteerColumn setInput={setInput} text={'결석'} name={'absence'} value={absence} />
            </td>
            <td>
              <VolunteerColumn setInput={setInput} text={'조퇴'} name={'leave'} value={leave} />
            </td>
          </tr>
          <tr>
            <td>
              <VolunteerColumn
                setInput={setInput}
                text={'지각'}
                name={'lateness'}
                value={lateness}
              />
            </td>
            <td>
              <VolunteerColumn setInput={setInput} text={'결과'} name={'truancy'} value={truancy} />
            </td>
          </tr>
        </tbody>
      </s.VolunteerTable>
    </s.VolunteerWrapper>
  );
};

export default Volunteer;
