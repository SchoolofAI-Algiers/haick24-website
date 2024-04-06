import Hero from './components/hero/index.tsx';
import Agenda from './components/agenda/agenda.jsx';
import Sponsors from './sponsor/PhotoSlider.jsx';
import Faq from './faq/Faq.jsx';
import Mentors from './components/mentors/Mentors.jsx';
import Footer from './components/footer/Footer.jsx';
const App = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Agenda />
      <Mentors />
      <Sponsors />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
