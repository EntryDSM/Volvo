import styled from 'styled-components';

export const CoverLetterPageWrapper = styled.section`
    width: 1220px;
    margin: 0 auto;
    padding-bottom: 100px;
`
export const SchoolName = styled.p`
    font-family: 'NotoSansKR-Light';
    font-size: 20px;
    line-height: 29px;
    margin-top: 90px;
`
export const Title = styled.p`
    font-family: 'NotoSansKR-Regular';
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
  font-family: 'NotoSansKR';
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  margin-top: 2px;
  letter-spacing: normal;
`

export const InputWrapper = styled.label`
    width: 1220px;
    height: 410px;
    border: 1.5px solid #606060;
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
    font-family: 'NotoSansKR-Light';
    font-size: 16px;
    line-height: 24px;
`