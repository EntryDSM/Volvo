import styled, { css } from 'styled-components';
// index.tsx style
export const GradeWrapper = styled.div`
  width: 1220px;
  margin: 0px auto;
  padding-top: 125px;
`;
export const GradeTitles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 65px;
`;
export const GradeSchoolTitle = styled.p`
  font-size: 20px;
  font-weight: 300;
`;
export const GradeBigTitle = styled.p`
  font-size: 35px;
  letter-spacing: 1.05px;
`;
export const PageMoveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 0 120px;
  > button {
    width: 140px;
    height: 50px;
    border-radius: 8px;
    background-color: white;
    padding: 0px 20px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
  }
`;
//SettingGrade
export const SettingGradeWrapper = styled.div`
  display: flex;

  > p {
    font-size: 16px;
    margin-right: 11px;
  }
`;
export const SettingGradeTitle = styled.div<{
  isClick: boolean;
}>`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  font-size: 15px;
  margin-left: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props =>
    props.isClick ? '1px solid rgb(245, 114, 120)' : '1px solid rgb(175, 175, 175)'};
  color: ${props => (props.isClick ? 'rgb(245, 114, 120)' : 'black')};
`;

//volunteer.tsx
export const VolunteerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    margin-bottom: 15px;
    font-size: 20px;
    letter-spacing: -0.8px;
    font-weight: 400;
  }
`;
export const VolunteerTable = styled.table`
  margin-bottom: 77px;
  width: '100%';
  table-layout: fixed;
  tr,
  td,
  th {
    border: 1px solid rgb(203, 203, 203);
    border-collapse: collapse;
    font-weight: 500;
  }
  > tbody {
    > tr {
      > th {
        width: 151px;
        background-color: rgb(255, 235, 236);
        font-size: 20px;
        box-sizing: border-box;
        text-align: center;
        height: 70px;
      }
      > td {
        font-weight: 400;
        width: 530px;
        height: 70px;
        box-sizing: border-box;
        padding: 0px 32px;
        font-size: 18px;
      }
    }
  }
`;
//gradetable.tsx
export const GradeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GradeSettingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const GradeTableTitle = styled.p`
  width: fit-content;
  margin-bottom: 15px;
  font-size: 20px;
  letter-spacing: -0.4px;
  font-weight: 400;
`;

export const GradeTableFrame = styled.table`
  tr,
  td,
  th {
    border: 1px solid rgb(203, 203, 203);
    border-collapse: collapse;
    font-weight: 500;
  }
  > tbody {
    > tr {
      > th {
        font-size: 20px;
        box-sizing: border-box;
        text-align: center;
        background-color: rgb(255, 235, 236);
      }
      > td {
        padding: 0 32px;
      }
    }
  }
`;

//VolunteerColumn.tsx
export const VolunteerColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const VolunteerColumnInputWrapper = styled.div`
  display: flex;
  align-items: center;
  > input {
    border-radius: 5px;
    outline: none;
    border: 1px solid rgb(112, 112, 112);
    width: 4.75rem;
    height: 2.25rem;
    text-align: center;
    font-size: 18px;
  }
  > p {
    margin-left: 15px;
  }
`;
export const VolunteerColumnTitle = styled.p`
  font-size: 18px;
`;
export const VolunteerColumnDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  > span {
    color: #f57278;
    font-size: 12px;
  }
  > p {
    font-size: 12px;
  }
`;
//gradeColumn
export const GradeColumnFontWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 18px;
    margin: 0 3px;
    :hover {
      color: rgb(245, 114, 120);
      font-weight: 900;
      cursor: pointer;
    }
  }
`;
