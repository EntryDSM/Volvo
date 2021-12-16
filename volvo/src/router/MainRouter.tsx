import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  MainContainer,
  SignUpContainer,
  SelectTypeContainer,
  PreviewContainer,
  GradeContainer,
  InformationContainer,
} from '../containers';
import { useFooter, useModal } from '../util/hooks/default';
import HeaderContainer from '../containers/header';
import IntroductionContainer from '../containers/introduction';

const MainRouter = () => {
  const Footer = useFooter();
  const Modal = useModal();
  return (
    <>
      <HeaderContainer />
      {Modal}
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/signup' element={<SignUpContainer />} />
        <Route path='/select-type' element={<SelectTypeContainer />} />
        <Route path='/information' element={<InformationContainer />} />
        <Route path='/preview' element={<PreviewContainer />} />
        <Route path='/grade' element={<GradeContainer />} />
        <Route path='/introduction' element={<IntroductionContainer/>} />
      </Routes>
      {Footer}
    </>
  );
};

export default MainRouter;
