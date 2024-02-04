import { useState } from 'react';

const Testimonials = () => {
  const [count, setCount] = useState(0);
  const testimonials = [
    {
      image: require('../assets/images/manager.jpeg'),
      ref: `It is a pleasure to recommend Angel Witchell in her pursuit of new
    professional opportunities. During her time at Travel Radar, she
    demonstrated an exceptional combination of technical skills and
    personal qualities. In terms of her technical skills, Angel
    Witchell has worked with HTML, CSS, JavaScript, WordPress, PHP,
    and various other technologies. Her ability to design and develop
    attractive and functional websites is remarkable. She also worked
    on developing software for smartphone applications. She
    consistently delivered high-quality projects on time. Furthermore,
    Angel Witchell stood out for her proactivity and willingness to
    take on new responsibilities. She was always ready to take the
    initiative and find creative solutions to technical challenges. In
    addition to her technical skills, Angel Witchell possesses
    exceptional soft skills. She is an effective communicator, works
    well in teams, and consistently displays a positive and
    professional attitude. She has the ability to adapt to changes and
    quickly learn new technologies. Angel Witchell is a highly
    competent and dedicated professional who will bring significant
    value to any team. I am confident that she will continue to have a
    positive impact wherever she goes. Please do not hesitate to
    contact me if you need more information about her performance at
    Travel Radar. Sinceramente, Andres Genes App Tech Lead Travel
    Radar.`,
      name: 'Andres Genes',
      role: 'App TechLead at Travel Radar',
    },
    {
      image: require('../assets/images/profile.png'),
      ref: `Angel was an exemplary student. She worked hard for the 4 years whilst in college and demonstrated commitment to her studies by meeting assignment deadlines and attending all classes. She is very driven and determined which I feel are her main strengths. She worked well with other class members but is also capable of working autonomously. She will be an asset to anyone that employs her and I wish Angel every success in her career.`,
      name: 'Michelle Tierney',
      role: `Angel's teacher at Coleg y Cymoedd`,
    },
  ];
  console.log(count);

  let backArrow = (
    <img
      className='rotate-180 h-10 w-10 cursor-pointer'
      onClick={() => setCount(0)}
      src={require('../assets/images/fillinArrow.png')}
      alt='one back arrow.'
    />
  );

  let forwardArrow = (
    <img
      className='h-10 w-10 cursor-pointer'
      onClick={() => setCount(0)}
      src={require('../assets/images/fillinArrow.png')}
      alt='one back arrow.'
    />
  );

  return (
    <div>
      <header>
        <ul className='flex gap-5 flex-wrap justify-end mr-[100px] xl:flex-row md: flex-col'>
          <li className='text-[40px] cursor-pointer'>
            <a href='/'>Home</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/project'>Projects</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/certificates'>Certificates</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/resume'>Resume</a>
          </li>
          <li className='text-[40px] underline cursor-pointer'>
            <a href='/testimonials'>Testimonials</a>
          </li>
        </ul>
      </header>
      <main className='mr-8 ml-8 sm: mt-10'>
        <div className='flex items-center justify-center min-h-[90vh]'>
          <div className='flex flex-col items-end'>
            <div className='flex min-h-[10vh] ml-8 mr-8 p-3 bg-[#D9D9D9] shadow-lg rounded-[10px]'>
              <img
                className='bg-[#F6F4F4] h-[5em] max-w-[100px] rounded-[15px] drop-shadow-md border-4 border-gray-400'
                src={testimonials[count].image}
                alt='manager'
              />
              <div className='flex flex-col text-left ml-5'>
                <p>{testimonials[count].ref}</p>
                <p className='mt-5 font-bold'>{testimonials[count].name}</p>
                <p className='font-bold'>{testimonials[count].role}</p>
              </div>
            </div>
            <div className='flex justify-end mr-8 mt-4 flex-row gap-5'>
              {backArrow}
              {forwardArrow}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;
