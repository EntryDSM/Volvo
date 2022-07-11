import React, { useMemo, useState } from 'react';
import * as S from '../styles';
interface PropsType {
  type: "introduction" | "studyPlan";
  onChangeText: (string: string) => void;
  text: string;
}

const textLimit = 1600;

const DescriptionAndInput: React.FC<PropsType> = ({ type, onChangeText, text }) => {
  const constantText = useMemo(
    () => {
      if (type === 'introduction') {
        return {
          inputType: '자기소개서',
          description:
            '자기소개서 내용은 특별한 형식이 없습니다. 개인의 특성 및 성장과정, 취미・특기와 학교생활, 가족 안에서의 역할, 남들보다 뛰어나다고 생각하는 자신의 장점(특성 혹은 능력)과 보완・발전시켜야 할 단점에 대하여 기술해 주세요.',
        }
      } else if (type === "studyPlan") {
        return {
          inputType: '학업계획서',
          description:
            '학업 계획서는 자신이 본교를 선택하게 된 구체적인 사유(지원 동기)와 고등학생이 된 후 이루고자 하는 목표를 달성하기 위해 생각하는 학업계획을 상세하게 기술해 주세요.',
        }
      } else {
        return {
          inputType: "수정",
          description: "수정"
        }
      }
    }, [type]
  )

  const onChageContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= textLimit) {
      onChangeText(e.target.value);
    }
  };

  const isCoverletter = type === "introduction";
  const [focus, setFocus] = useState(false);
  return (
    <S.DescriptionAndInputWrapper>
      <S.InputType>&nbsp;{constantText.inputType}</S.InputType>
      <S.InputDescription>&nbsp;{constantText.description}</S.InputDescription>
      <S.InputWrapper>
        <S.Input
          onChange={onChageContent}
          name={isCoverletter ? 'coverLetter' : 'studyPlan'}
          value={text}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <S.TextCount isFocus={focus}>
          <div>
            {text.length}/{textLimit} (빈칸 포함)
          </div>
        </S.TextCount>
      </S.InputWrapper>
    </S.DescriptionAndInputWrapper>
  );
};
export default DescriptionAndInput;
