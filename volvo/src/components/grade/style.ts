import styled from "styled-components";

export const GradeWrapper = styled.div`
    width: 1220px;
    margin: 0px auto;
    padding-top:125px ;
`
export const GradeTitles = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 125px;
`
export const GradeSchoolTitle = styled.p`
    font-size:20px;
    font-weight: 300;
`
export const GradeBigTitle = styled.p`
    font-size: 35px;
    letter-spacing: 1.05px;
`
export const VolunteerWrapper= styled.div`
    display: flex;
    flex-direction: column;
    >p{
        margin-bottom: 15px;
        font-size: 20px;
        letter-spacing: -0.8px;
        font-weight: 400;
    }   
    
`
export const VolunteerTable = styled.table`
    margin-bottom: 77px; 
    >tr{
        
        >th{
        width: 151px;
        background-color: rgb(255, 235, 236);
        font-size: 20px;
        box-sizing: border-box;
        text-align: center;
        height: 70px;
        padding: 25px 0px;
        }
        >td{
        width: 530px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0px 32px;
        font-size: 18px;
        border-bottom: 1px solid rgb(203, 203, 203);
        border-right: 1px solid rgb(203, 203, 203);
        }
    }
`