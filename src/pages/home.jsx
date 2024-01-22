const Home = () => {
  return (
    <div>
      <header>
        <ul className='flex flex-row gap-5 flex-wrap mr-[100px] justify-end'>
          <li className='text-[40px] underline cursor-pointer'>
            <a href='/'>Home</a>
          </li>
          <li className='text-[40px] cursor-pointer'>
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
      <main>
        <div className='flex flex-row mt-8 ml-8 mr-8'>
          <img
            className='flex max-h-[30%] max-w-[30%] border-[6px] border-[#39A7FF] border-solid rounded-[20px] mt-[60px] drop-shadow-[0_10px_10px_#5570FF]'
            src={require('../assets/images/angel.jpeg')}
            alt='Owner of Portfolio.'
          />
          <h1 className='ml-6 mr-6 text-[30px] text-left'>
            Welcome to my portfolio my name is Angel Witchell and I have had a
            passion for technology since I was a little girl. The reason why I
            wanna become a developer is because tech has helped me as a kid when
            I struggle with learning to write and speak, if it wasn't for gaming
            I don’t think I wouldn't of progress as fast as I did. I want to do
            the same by building fun and exciting websites for those with less
            advantages but allow them to be just like anyone else because that’s
            all people want when they struggle in life is to be like anyone else
            and gain the same opportunities. If you wish to view my work please
            select the project where you can get little preview of my projects.
            if you would like to view what other have said about me then view
            testimonials! if you wish to get in touch I would greatful!
          </h1>
        </div>
      </main>
    </div>
  );
};
export default Home;
