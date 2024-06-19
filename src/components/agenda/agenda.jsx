import blueline from './resources/blueline.svg';
import greendarkline from './resources/greendarkline.svg';
import longgreenline from './resources/longgreenline.svg';
import shortgreenline from './resources/shortgreenline.svg';
import leftsphere from './resources/leftsphere.svg';
import rightsphere from './resources/rightsphere.svg';
import leftblueline from './resources/Curve.svg';
import leftlonggreenline from './resources/leftlongdarkgreen.svg';
import shortdarkgreenline from './resources/shortdarkgreen.svg';


const AgendaItem = ({ time, text }) => (
  <div className="flex mb-1">
    <p className="font-WorkSans text-right mr-2 text-white">{time} :</p>
    <p className="font-WorkSans font-light text-white">{text}</p>
  </div>
);

const commonStyles = {
  agendaItemContainer: 'flex flex-col items-start pt-5 pr-20 pb-5 pl-7 rounded-[7px] md:text-2xl md:w-[500px] md:pl-10 md:pt-10 md:pb-12',
  agendaItemHeader: 'font-IPM font-semibold text-right mr-2 mb-2 md:mb-5 text-midNightBlueColor',
  agendaItemDate: 'font-WorkSans text-right mr-2 mb-2 md:mb-5 text-white',
};

const day1 = [
  { time: '17:00-18:00', text: 'Check in' },
  { time: '18:00-19:00', text: 'Opening ceremony' },
  { time: '19:00-19:30', text: 'challenges presentaiton' },
  { time: '20:00-21:00', text: 'Dinner break' },
  { time: '   21:00   ', text: 'HACKING START' },
]

const day2 = [
  { time: '21:00-02:00', text: 'Hacking' },
  { time: '02:00-02:15', text: 'coffee break' },
  { time: '02:15-02:30', text: 'fun activity' },
  { time: '02:30-07:30', text: 'Hacking' },
  { time: '07:30-09:00', text: 'Coffee break' },
  { time: '09:00-12:00', text: 'Hacking' },
  { time: '12:00-12:30', text: 'Lunch break' },
  { time: '12:30-14:00', text: 'Prayer' },
  { time: '16:00-16:30', text: 'Coffee break' },
  { time: '16:30-20:00', text: 'Hacking' },
  { time: '20:00-21:00', text: 'Dinner break' },
  { time: '21:00-00:00', text: 'Hacking' },
]

const day3 = [
  { time: '00:00-02:00', text: 'Hacking' },
  { time: '02:00-02:15', text: 'coffee break' },
  { time: '02:15-02:30', text: 'fun activity' },
  { time: '03:00-07:30', text: 'Hacking' },
  { time: '07:30-09:00', text: 'Coffee break' },
  { time: '09:00-12:00', text: 'Hacking' },
  { time: '   21:00   ', text: 'SUBMITIONS' },
  { time: '12:00-12:30', text: 'Lunch break' },
  { time: '12:30-14:00', text: 'Prayer' },
  { time: '13:30-14:30', text: 'Closing Cermeony' },
]

const agendaItems = [day1, day2, day3];


const Agenda = () => {
    return (
      <div id='Agenda' className="bg-skyBlueColor min-h-screen flex flex-col items-center pb-10 relative">

        <div className='absolute h-64 w-64 rounded-full bg-midNightBlueColor blur-[160px] top-0 left-72' />
        <img src={leftsphere} alt="" className='absolute bottom-40 left-0 w-auto h-auto' />
        <img src={rightsphere} alt="" className='absolute right-0 top-40 w-auto h-auto' />
        <img src={shortgreenline} alt="" className='absolute left-0 top-40 h-[150px] md:h-auto md:w-auto' />
        <img src={greendarkline} alt="" className='absolute right-0 top-96 w-[150px] h-[150px] md:h-auto md:w-auto' />
        <img src={longgreenline} alt="" className='absolute right-0 top-40 w-[150px] h-[150px] md:h-auto md:w-auto' />
        <img src={blueline} alt="" className='absolute right-0 bottom-20 w-[150px] h-[150px] md:h-auto md:w-auto' />
        <img src={leftblueline} alt="" className='absolute left-0 bottom-[600px] b w-[150px] h-[150px] md:h-auto md:w-auto' />
        <img src={leftlonggreenline} alt="" className='absolute left-0 bottom-1/2 w-[150px] h-[150px] md:h-auto md:w-auto' />
        <img src={shortdarkgreenline} alt="" className='absolute left-0 bottom-20 w-[150px] h-[150px] md:h-auto md:w-auto' />

        <p className="font-IPM font-bold md:text-6xl text-4xl text-white mt-5">
          Our Agenda
        </p>

        <div className="flex flex-row w-full mx-auto px-5 md:px-0 md:mr-0 md:ml-56">
          <div className="bg-skyBlueColor w-full sm:w-fit mt-10 rounded-[7px] z-[1]">
            <div className='flex flex-col items-start bg-gray pt-5 pb-5 pl-7 rounded-[7px] md:text-2xl md:w-[500px] md:pl-10 md:pt-10 md:pb-12'>
              <h1 className="font-IPM font-semibold text-right mr-2 mb-2 md:mb-5 text-midNightBlueColor">DAY 1</h1>
              <p className="font-WorkSans text-right mr-2 mb-2 md:mb-5 text-white">27/06/2024</p>
              {agendaItems[0].map((item) => (
                <AgendaItem key={item.time} time={item.time} text={item.text} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-row w-full sm:justify-end px-5 mx-auto md:ml-0 md:px-0 md:mr-56">
          <div className="bg-skyBlueColor w-full sm:w-fit mt-10 rounded-[7px] z-[1]">
            <div className='flex flex-col items-start bg-gray pt-5 pb-5 pl-7 rounded-[7px] md:text-2xl md:w-[500px] md:pl-10 md:pt-10 md:pb-12'>
              <h1 className="font-IPM font-semibold text-right mr-2 mb-2 md:mb-5 text-midNightBlueColor">DAY 2</h1>
              <p className="font-WorkSans text-right mr-2 mb-2 md:mb-5 text-white">28/06/2024</p>
              {agendaItems[1].map((item) => (
                <AgendaItem key={item.time} time={item.time} text={item.text} />
              ))}
            </div>
          </div>
        </div>
        

        <div className="flex flex-row w-full mx-auto px-5 md:px-0 md:mr-0 md:ml-56">
          <div className="bg-skyBlueColor w-full sm:w-fit mt-10 rounded-[7px] z-[1]">
            <div className='flex flex-col items-start bg-gray pt-5 pb-5 pl-7 rounded-[7px] md:text-2xl md:w-[500px] md:pl-10 md:pt-10 md:pb-12'>
              <h1 className="font-IPM font-semibold text-right mr-2 mb-2 md:mb-5 text-midNightBlueColor">DAY 3</h1>
              <p className="font-WorkSans text-right mr-2 mb-2 md:mb-5 text-white">29/06/2024</p>
              {agendaItems[2].map((item) => (
                <AgendaItem key={item.time} time={item.time} text={item.text} />
              ))}
            </div>
          </div>
        </div>
    </div>
    )
  }
  
  export default Agenda