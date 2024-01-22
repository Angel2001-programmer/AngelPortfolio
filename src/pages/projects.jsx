import PreviewList from '../componeents/PreviewList';

const Projects = () => {
  const list = [
    { text: 0 },
    { text: 1 },
    { text: 2 },
    { text: 3 },
    { text: 4 },
    { text: 5 },
  ];
  return (
    <div className=''>
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
