const Testimonials = () => {
  return (
    <header>
      <ul className='flex flex-row gap-5 flex-wrap mr-[100px] justify-end'>
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
          <a href='/testimonials'>Testimonials</a>
        </li>
      </ul>
    </header>
  );
};

export default Testimonials;
