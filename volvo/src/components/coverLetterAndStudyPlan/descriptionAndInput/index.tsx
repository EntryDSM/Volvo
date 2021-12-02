import React, { useState } from 'react';
import * as S from '../styles';
interface PorpsType {
    type? : string;
}
const DescriptionAndInput = ({type}:PorpsType) => {
    let inputType = ''
    let description = ''
    if(type === 'coverLetter') {
        inputType = '자기소개서';
        description = '  자기소개서 내용은 특별한 형식이 없습니다. 개인의 특성 및 성장과정, 취미・특기와 학교생활, 가족 안에서의 역할, 남들보다 뛰어나다고 생각하는 자신의 장점(특성 혹은 능력)과 보완・발전시켜야 할 단점에 대하여 기술해 주세요.'
    }
    else {
        inputType = '학업계획서'
        description = '학업 계획서는 자신이 본교를 선택하게 된 구체적인 사유(지원 동기)와 고등학생이 된 후 이루고자 하는 목표를 달성하기 위해 생각하는 학업계획을 상세하게 기술해 주세요.'
    }
    const [text,setText] = useState({
        coverLetter : '',
        studyPlan : ''
    })
    const onChageText = (e:any) => {
        // setText({

        // })
    }
    return(
        <S.DescriptionAndInputWrapper>
            <S.InputType>&nbsp;{inputType}</S.InputType>
            <S.InputDescription>&nbsp;{description}</S.InputDescription>
            <S.InputWrapper>
                <S.Input onChange={onChageText} />
                <S.TextCount>
                    <p>1200/1600</p>
                </S.TextCount>
            </S.InputWrapper>
        </S.DescriptionAndInputWrapper>
    )
}
export default DescriptionAndInput;