import PreviewList from '../componeents/PreviewList';
import Project from '../componeents/Project';
// import { useState } from 'react';
const Projects = () => {
  const list = [
    {
      id: 0,
      text: 'IntroVerse',
      image: require('../assets/images/Introverse.png'),
      video: 'https://www.youtube.com/embed/7ynmVGicXcA?si=cQdOwBrZ7xo--q4a',
      reason0:
        'This project was made to help young teens and adults combat loneliness too many people in the present suffer from being alone or not communicating with others. My team project is there to help introverts, or anyone get their thoughts/feelings out there on a forum’s website. This will give them option to speak whereas they cannot in real life due to social anxieties or being mute.',
      reason1:
        'The challenges we faced was getting database populated with the correct data when you setup this project you must insert the data yourself into database to be able to view the data on the website. This will be a struggle especially if you are not familiar with backend development. Me and my team fixed this by having a pair programming session and my colleague told me to insert the data into database by using mySQLWorkbench.',
      reason2:
        'Some of UI I would do differently such as about page I feel the images are far too big compared to rest of the website. It would be better if this were in rows instead.',
    },
    {
      id: 1,
      text: 'MG Music',
      image: require('../assets/images/mg.png'),
      video: '',
      reason0:
        'This project was created to show data from a Rest API on website. The Website is themed around music and their authors. This website is a place where users can visit and see all the top hits or music that is currently trending at moment.',
      reason1:
        'Challenges I faced were making the items from the list appear I had to use several tutorials to figure out how to display many items from a list.',
      reason2: 'I would show real data into lists and not place holders.',
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
      <main className='mt-8'>
        <PreviewList list={list} />
      </main>
    </div>
  );
};

export default Projects;
