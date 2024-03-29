import React, { FC } from 'react';
import * as S from '../style';
import SignUpRuleCheckbox from './SignUpRuleCheckbox';

interface Props {
  setRuleCheck: (payload: boolean) => void;
  ruleCheck: boolean;
}

const SignUpRule: FC<Props> = props => {
  return (
    <>
      <S.SignUpRuleWrapper>
        <S.SignUpRule>
          <pre>
            본 입학원서에 기재된 지원자의 개인정보는 신입생 입학관리업무의 원활한 수행을 위하여
            개인정보의 수집‧유출‧오용‧남용으로부터 사생활의 비밀 등을 보호하도록 한{'\n'}
            개인정보보호법규정에 따라 다음과 같이 수집‧이용‧제공됩니다.{' '}
          </pre>
          <h4>1. (개인정보 처리의 법령상 근거) </h4>
          <pre>
            {' '}
            본 입학원서에 기재된 개인정보의 처리업무는 초‧중등교육법 제47조 및 동법 시행령 제81조,
            제82조, 제84조, 제98조 및 본교의 입학전형 실시계획 등에 근거하고{'\n'}
            있습니다.
          </pre>
          <h4>2. (정보주체의 권리) </h4>
          <pre>
            {' '}
            지원자는 자신이 제공한 개인정보에 대하여 개인정보 보호법 제4조 및 제35조부터
            제38조까지에 따라 열람‧처리‧정지‧정정‧삭제‧파기 등을 요구할 수 있으며, 개인정보{'\n'}
            보호법을 위반한 행위로 인한 손해 발생시에는 개인정보 보호법 제39조에 따라 손해배상을
            청구할 수 있습니다
          </pre>
          <h4>3. (개인정보 수집항목) </h4>
          <pre>
            {' '}
            입학관리 업무의 원활한 수행을 위하여 수집하는 개인정보는 성명, 생년월일, 증명사진, 주소,
            전화번호, 학력, 출결사항·교과성적 등입니다.
          </pre>
          <h4>4. (개인정보의 수집·이용 목적) </h4>
          <pre>
            {' '}
            수집한 지원자의 개인정보는 원서접수, 지원자격·지원결격 사유 확인, 지원자 본인확인,
            성적산출, 합격자 명부 관리, 합격증명서 발급,성적 통지, 통계자료 산출 등 입학관리 업무를
            위한 정보로 이용됩니다.
          </pre>
          <h4>5. (개인정보 제공) </h4>
          <pre>
            {' '}
            1) 수집한 개인정보는 지원자격·지원결격 사유 조회 및 교과성적 확인 등을 위하여 지원자가
            졸업한 중학교 등 관련된 기관에 제공될 수 있습니다. {'\n '}2) 코로나19 감염
            확산으로(사회적 거리두기 2,3 단계시) 2차 전형이 온라인실시간 평가로 전환시 평가에 필요한
            개인정보를 시행업체(제 3자)에게 제공될 수 있습니다.
          </pre>
          <h4>6. (개인정보의 보유기간 및 이용기간) </h4>
          <pre>
            {' '}
            수집한 개인정보는 입학관리 업무를 계속하는 동안 보유ㆍ이용할 수 있으며, 입학관리 업무
            완료 후 5년간 보관의 목적으로만 관리하고 이후에는 바로 폐기합니다.
          </pre>
          <h4>7. (개인정보의 수집·이용·제공에 대한 동의 거부) </h4>
          <pre>
            {' '}
            지원자는 개인정보의 수집·이용·제공에 대한 동의를 거부할 수 있으며, 동의를 거부할 경우
            지원결격 사유 조회 등 입학관리 업무를 수행할 수 없으므로 원서를 접수할 수 없습니다.
          </pre>
        </S.SignUpRule>
      </S.SignUpRuleWrapper>
      <SignUpRuleCheckbox {...props} />
    </>
  );
};
export default SignUpRule;
