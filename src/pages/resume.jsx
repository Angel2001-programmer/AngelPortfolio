const Resume = () => {
  return (
    <>
      <header>
        <ul className='flex gap-5 flex-wrap justify-end mr-[100px] xl:flex-row md: flex-col'>
          <li className='text-[40px] cursor-pointer'>
            <a href='/AngelPortfolio/'>Home</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/AngelPortfolio/project'>Projects</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/AngelPortfolio/certificates'>Certificates</a>
          </li>
          <li className='text-[40px] underline cursor-pointer'>
            <a href='/AngelPortfolio/resume'>Resume</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/AngelPortfolio/testimonials'>Testimonials</a>
          </li>
        </ul>
      </header>
      <div className='flex flex-col items-center sm: mt-4'>
        <h1 className='text-[40px] mt-4'>Angel's Resume</h1>
        <div className='bg-slate-300 p-2 sm: mx-8'>
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
