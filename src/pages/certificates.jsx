import CertificatesList from '../componeents/CertificatesList';
const Certificates = () => {
  const list = [
    {
      text: 'CFG Web Developer KickStarter Course',
      image: require('../assets/images/WebCertificate.png'),
    },
    {
      text: 'CFG Full Stack Development Bootcamp',
      image: require('../assets/images/BootcampCertificate.jpg'),
    },
  ];

  return (
    <div>
      <header>
        <ul className='flex gap-5 flex-wrap justify-end mr-[100px] xl:flex-row md: flex-col'>
          <li className='text-[40px] cursor-pointer'>
            <a href='/'>Home</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/AngelPortfolio/project'>Projects</a>
          </li>
          <li className='text-[40px] underline cursor-pointer'>
            <a href='/AngelPortfolio/certificates'>Certificates</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/AngelPortfolio/resume'>Resume</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/AngelPortfolio/testimonials'>Testimonials</a>
          </li>
        </ul>
      </header>
      <main className='mt-8'>
        <CertificatesList list={list} />
      </main>
    </div>
  );
};

export default Certificates;
