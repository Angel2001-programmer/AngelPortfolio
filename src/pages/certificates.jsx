import CertificatesList from '../componeents/CertificatesList';
const Certificates = () => {
  const list = [
    {
      text: 'CFG Web Developer KickStarter Course',
      image: require('../assets/images/WebCertificate.png'),
    },
    // { text: 'CFG Web Developer KickStarter Course', image: null },
  ];

  return (
    <div>
      <header>
        <ul className='flex flex-col gap-5 flex-wrap justify-end md:flex-row md:mr-[100px] sm:md:mr-[100px]'>
          <li className='text-[40px] cursor-pointer'>
            <a href='/'>Home</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/project'>Projects</a>
          </li>
          <li className='text-[40px] underline cursor-pointer'>
            <a href='/certificates'>Certificates</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
            <a href='/testimonials'>Testimonials</a>
          </li>
        </ul>
      </header>
      <main className='mt-8'>
        <main className='mt-8'>
          <main className='mt-8'>
            <CertificatesList list={list} />
          </main>
        </main>
      </main>
    </div>
  );
};

export default Certificates;
