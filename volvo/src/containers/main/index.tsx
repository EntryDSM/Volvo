import React, { FC, Suspense, useEffect } from 'react';
import MainDummyData from '../../util/util/loadingDummyData/MainDummyData';
import { useProcess } from '../../util/hooks/main';
import { useAuth } from '../../util/hooks/auth';
import { useModal } from '../../util/hooks/modal';
import {
  APPLICATION_PERIOD,
  BEFORE_FIRST_ANNOUNCE,
  BEFORE_INTERVIEW,
  BEFORE_SECOND_ANNOUNCE,
  END_DATE,
  FIRST_ANNOUNCEMENT,
  INTERVIEW,
  NOT_APPLICATION_PERIOD,
  SECOND_ANNOUNCEMENT,
  START_DATE,
  END,
  statusType,
} from '../../constance/main';

const Main = React.lazy(() => import('../../components/main'));

const MainContainer: FC = () => {
  const processState = useProcess();
  const authState = useAuth();
  const modalState = useModal();
  const getNowProcess = (status: statusType) => {
    if (!processState.state.processes[status]) return MainDummyData;
    return processState.state.processes[status];
  };

  const defaultMainButtonClickHandler = () => {
    modalState.setState.setModalOn('signin');
  };

  const status = processState.state.status;
  const dates = processState.state.date && processState.state.date;

  const filterDate = (proccess: string) => {
    if (dates.length !== 0) return dates.filter(date => date.type === proccess)[0]?.date;
    else return '';
  };

  const getNowProcessDate = (status: statusType): string => {
    switch (status) {
      case NOT_APPLICATION_PERIOD:
        return filterDate(START_DATE);
      case APPLICATION_PERIOD:
        return filterDate(END_DATE);
      case BEFORE_FIRST_ANNOUNCE:
        return filterDate(FIRST_ANNOUNCEMENT);
      case FIRST_ANNOUNCEMENT:
        return filterDate(FIRST_ANNOUNCEMENT);
      case BEFORE_INTERVIEW:
        return filterDate(INTERVIEW);
      case INTERVIEW:
        return filterDate(INTERVIEW);
      case BEFORE_SECOND_ANNOUNCE:
        return filterDate(SECOND_ANNOUNCEMENT);
      case SECOND_ANNOUNCEMENT:
        return filterDate(SECOND_ANNOUNCEMENT);
      case END:
        return filterDate(END);
      default:
        return '';
    }
  };

  useEffect(() => {
    processState.setState.getStatus();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main
        status={status}
        date={getNowProcessDate(status)}
        process={getNowProcess(processState.state.status)}
        defaultMainButtonClickHandler={defaultMainButtonClickHandler}
        {...authState.state}
      />
    </Suspense>
  );
};

export default MainContainer;
