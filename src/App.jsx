import Hero from './components/hero/index.jsx';
import Agenda from './components/agenda/agenda.jsx';
import Sponsors from './sponsor/PhotoSlider.jsx';
import Faq from './faq/Faq.jsx';
import Mentors from './components/mentors/Mentors.jsx';
import Footer from './components/footer/Footer.jsx';
import About from './components/about_us/About.jsx';
import PreviousEdition from './components/prev-edition/index.jsx';
const App = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <PreviousEdition />
      <Agenda />
      <Mentors />
      <Sponsors />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
