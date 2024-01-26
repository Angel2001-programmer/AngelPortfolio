import PreviewList from '../componeents/PreviewList';
import Project from '../componeents/Project';
import { useContext } from 'react';
import { AppContext } from '../App';
const Projects = () => {
  const [clicked, setClicked] = useContext(AppContext);

  const list = [
    {
      id: 0,
      text: 'IntroVerse',
      image: require('../assets/images/Introverse.png'),
      video: '',
    },
    {
      id: 1,
      text: 'MG Music',
      image: require('../assets/images/mg.png'),
      video: '',
    },
  ];
  return (
    <div>
      <header>
        <ul className='flex flex-col gap-5 flex-wrap justify-end md:flex-row md:mr-[100px] sm:md:mr-[100px]'>
          <li className='text-[40px] cursor-pointer'>
            <a href='/'>Home</a>
          </li>
          <li className='text-[40px] underline cursor-pointer'>
            <a href='/project'>Projects</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/certificates'>Certificates</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/testimonials'>Testimonials</a>
          </li>
        </ul>
      </header>
      {!clicked ? (
        <main className='mt-8'>
          <PreviewList list={list} />
        </main>
      ) : (
        <div className='mt-8'>
          <Project item={list[0]} />
        </div>
      )}
    </div>
  );
};

export default Projects;
