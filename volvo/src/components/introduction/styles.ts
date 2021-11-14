import styled from 'styled-components';

interface StylePropsType {
    isNotZero : boolean;
}

export const CoverLetterPageWrapper = styled.section`
    width: 1220px;
    margin: 0 auto;
    padding-bottom: 100px;
`
export const SchoolName = styled.p`
    font-family: 'NotoSansKR';
    font-weight: lighter;
    font-size: 20px;
    line-height: 29px;
    margin-top: 90px;
`
export const Title = styled.p`
    font-family: 'NotoSansKR';
    font-weight: normal;
    font-size: 35px;
    line-height: 51px;
    letter-spacing: 1.05px;
    margin-bottom: 10px;
`

export const DescriptionAndInputWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`

export const InputType = styled.p`
    font-family: 'NotoSansKR';
    font-size: 25px;
    font-weight: normal;
    font-stretch : normal;
    font-style: normal;
    font-weight: 1.36;
    letter-spacing: normal;
`

export const InputDescription = styled.p`
    width: 1068px;
  height: 50px;
  font-family: 'NotoSansKR';
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-bottom: 20px;
`

export const InputWrapper = styled.label`
    width: 1220px;
    height: 410px;
    border: 1px solid #606060;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-sizing: border-box;
`

export const Input = styled.textarea`
    width: 1192px;
    height: 336px;
    margin: 18px 10px 11px 18px;
    overflow: scroll;
    box-sizing: border-box;
    padding-right: 6px;
    border: none;
    font-family: 'NotoSansKR';
    font-weight: lighter;
    font-size: 16px;
    line-height: 24px;
    resize: none;
`

export const TextCount = styled.section`
    height: 45px;
    /* margin: 11px 0 0; */
    opacity: 0.7;
    border-radius: 0 0 4px 4px;
    background-color: ${(props:StylePropsType)=>props.isNotZero ? '#ff9b9f' : ''};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > div {
        margin-right: 18px;
        font-family: 'NotoSansKR';
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: left;
        line-height: 24px;
        text-align: center;
        color: #606060;
    }
`