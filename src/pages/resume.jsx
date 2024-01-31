const Resume = () => {
  return (
    <>
      <header>
        <ul className='flex flex-col gap-5 flex-wrap justify-end md:flex-row md:mr-[100px] sm:md:mr-[100px]'>
          <li className='text-[40px] cursor-pointer'>
            <a href='/'>Home</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/project'>Projects</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/certificates'>Certificates</a>
          </li>
          <li className='text-[40px] underline cursor-pointer'>
            <a href='/resume'>Resume</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/testimonials'>Testimonials</a>
          </li>
        </ul>
      </header>
      <div className='flex flex-col items-center'>
        <h1 className='text-[40px] mt-4'>Angel's Resume</h1>
        <div className=' bg-slate-300 p-2'>
          <img
            src={require('../assets/images/AngelWitchellCV.jpg')}
            alt="Angel's resume"
          />
        </div>
      </div>
    </>
  );
};

export default Resume;
