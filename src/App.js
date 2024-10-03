import React from 'react';
import Header from './components/Header';
import GlobalStyles from './assets/styles/GlobalStyles';
import EventInfo from './components/EventInfo';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import ImageSection from './components/ImageSection';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />

      <ImageSection />
      <EventInfo />
      <Speakers />
      <Schedule />
      <Footer />
      <EventInfo />
      <Speakers />
      <Schedule />
      <Footer />
      <EventInfo />
      <Speakers />
      <Schedule />
      <Footer />
      <EventInfo />
      <Speakers />
      <Schedule />
      <Footer />
    </>
  );
}

export default App;
