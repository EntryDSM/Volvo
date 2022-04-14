import React, { FC } from 'react';
import { FooterDiv, FooterText, FooterTitle, FooterImgButtonDiv } from './style';
import { facebook, github } from '../../assets/footer';
import FooterLink from './FooterLink';
import FooterImgLink from './FooterImgLink';

import {
  BUSINESS_NUMBER,
  SCHOOL_ADDRESS,
  SCHOOL_PHONE_NUMBER,
  TERMS,
} from '../../constance/footer';
import { currentYear } from '../../constance/default';

const Footer: FC = () => (
  <FooterDiv>
    <div>
      <div>
        <FooterTitle>Entry</FooterTitle>
        <FooterText margin='20'>ⓒ {currentYear - 1} Entry</FooterText>
        <FooterText>{TERMS}</FooterText>
        <FooterText>{SCHOOL_ADDRESS}</FooterText>
        <FooterText>{SCHOOL_PHONE_NUMBER}</FooterText>
        <FooterText>{BUSINESS_NUMBER}</FooterText>
      </div>
      <div>
        <FooterLink link='https://www.entrydsm.hs.kr/'>Entry 소개</FooterLink>
        <FooterLink link='https://www.entrydsm.hs.kr/#portfolio'>시스템 소개</FooterLink>
        <FooterLink link='https://www.entrydsm.hs.kr/#page-team'>개발자 소개</FooterLink>
        <FooterImgButtonDiv>
          <FooterImgLink link='https://github.com/EntryDSM' img={github} alt='github로' />
          <FooterImgLink
            link='https://www.facebook.com/entrydsm'
            img={facebook}
            alt='facebook으로'
          />
        </FooterImgButtonDiv>
      </div>
    </div>
  </FooterDiv>
);

export default Footer;
