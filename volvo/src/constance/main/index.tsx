import React from 'react';
import { processType } from '../../modules/redux/reducer/status/interface';
import { currentYear } from '../default';

export const START_DATE = 'START_DATE' as const;
export const END_DATE = 'END_DATE' as const;
export const FIRST_ANNOUNCEMENT = 'FIRST_ANNOUNCEMENT' as const;
export const BEFORE_INTERVIEW = 'BEFORE_INTERVIEW' as const;
export const INTERVIEW = 'INTERVIEW' as const;
export const SECOND_ANNOUNCEMENT = 'SECOND_ANNOUNCEMENT' as const;
export const BEFORE_SECOND_ANNOUNCE = 'BEFORE_SECOND_ANNOUNCEMENT' as const;
export const NOT_APPLICATION_PERIOD = 'NOT_APPLICATION_PERIOD' as const;
export const BEFORE_FIRST_ANNOUNCE = 'BEFORE_FIRST_ANNOUNCEMENT' as const;
export const APPLICATION_PERIOD = 'APPLICATION_PERIOD' as const;
export const END = 'END' as const;

export type statusType =
  | typeof NOT_APPLICATION_PERIOD
  | typeof APPLICATION_PERIOD
  | typeof BEFORE_FIRST_ANNOUNCE
  | typeof FIRST_ANNOUNCEMENT
  | typeof BEFORE_INTERVIEW
  | typeof INTERVIEW
  | typeof BEFORE_SECOND_ANNOUNCE
  | typeof SECOND_ANNOUNCEMENT
  | typeof END;

const mainConstance: Record<statusType, processType> = {
  [NOT_APPLICATION_PERIOD]: {
    title: <p>지금은 원서 접수기간이 아닙니다.</p>,
    getDescription: (date: string) => <p>원서 접수 기간은 {<span>{date}</span>}에 시작됩니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: false,
    uri: '/',
  },
  [APPLICATION_PERIOD]: {
    title: <p>지금은 {<span>원서 작성</span>} 기간입니다.</p>,
    getDescription: (date: string) => (
      <p>
        원서 접수 기간은
        <br /> {<span>{date}</span>}
        <br />
        까지 입니다.
      </p>
    ),
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: true,
    uri: '/select-type',
  },
  [BEFORE_FIRST_ANNOUNCE]: {
    title: <p>원서 접수가 끝났습니다.</p>,
    getDescription: (date: string) => <p>1차 발표일은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: false,
    uri: '',
  },
  [FIRST_ANNOUNCEMENT]: {
    title: <p>지금은 {<span>1차 발표</span>} 기간입니다.</p>,
    getDescription: () => '학교 페이지에서 결과를 확인해 주세요.',
    isHaveTerm: true,
    buttonText: '1차 발표 결과',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [BEFORE_INTERVIEW]: {
    title: <p>면접 진행 전입니다.</p>,
    getDescription: (date: string) => <p>면접 기간은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '면접 일정 확인',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [INTERVIEW]: {
    title: <p>지금은 {<span>면접</span>} 기간입니다.</p>,
    getDescription: (date: string) => <p>면접 기간은 {<span>{date}</span>}입니다. </p>,
    isHaveTerm: true,
    buttonText: '면접 일정 확인',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [BEFORE_SECOND_ANNOUNCE]: {
    title: <p>면접이 끝났습니다.</p>,
    getDescription: (date: string) => <p>2차 발표일은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '발표 일정 확인',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [SECOND_ANNOUNCEMENT]: {
    title: <p>지금은 {<span>발표 및 등록</span>} 기간입니다.</p>,
    getDescription: (date: string) => <p>등록 기간은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '결과 보기',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [END]: {
    title: <p>{currentYear}학년도 입학 전형이 모두 끝났습니다.</p>,
    getDescription: () => <p>내년을 기약해 주세요.</p>,
    isHaveTerm: true,
    buttonText: '학교로 이동',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
};

export const mainProcessNumber = {
  [NOT_APPLICATION_PERIOD]: 1,
  [APPLICATION_PERIOD]: 2,
  [BEFORE_FIRST_ANNOUNCE]: 3,
  [FIRST_ANNOUNCEMENT]: 4,
  [BEFORE_INTERVIEW]: 5,
  [INTERVIEW]: 6,
  [BEFORE_SECOND_ANNOUNCE]: 7,
  [SECOND_ANNOUNCEMENT]: 8,
  [END]: 9,
};

export default mainConstance;
