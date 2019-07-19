import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../Footer';
import Header from '../Header';
import HowDo from '../HowDo';
import Projects from '../Projects';
import AboutMe from '../AboutMe';
import AppStyle from './App.style';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppStyle className="App">
        <Helmet>
          <title>Arthur Assunção - Web Developer and Professor</title>
          <meta name="author" content="Arthur Assunção" />
          <meta name="dcterms.rightsHolder" content="Arthur Assunção" />
          <meta name="description" content="Arthur Assunção - Web Developer and Professor" />
          <meta name="keywords" content="Arthur Assunção, Sistemas para Internet, Desenvolvedor Web, Mestre em Computação" />
          <link rel="canonical" href="https://arthurassuncao.com" />
        </Helmet>
        <Header className='header' />
        <main className='main'>
          <HowDo />
          <AboutMe />
          <Projects sectionClassName='section-title' />
        </main>
        <Footer className='footer' sectionClassName='section-title' />
      </AppStyle>
    </>
  );
};

export default App;
