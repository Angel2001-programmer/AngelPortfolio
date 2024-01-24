import PreviewList from '../componeents/PreviewList';
import PreviewCertificate from '../componeents/PreviewCertificate';
import { AppContext } from '../App';
import { useContext } from 'react';
const Certificates = () => {
  const [clicked, setClicked] = useContext(AppContext);
  const list = [
    { text: 0 },
    { text: 1 },
    { text: 2 },
    { text: 3 },
    { text: 4 },
    { text: 5 },
  ];

  return (
    <div>
      <header>
        <ul className='flex flex-row gap-5 flex-wrap mr-[100px] justify-end'>
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
          {!clicked ? (
            <main className='mt-8'>
              <PreviewList list={list} />
            </main>
          ) : (
            <div className='mt-8'>
              <PreviewCertificate />
            </div>
          )}
        </main>
      </main>
    </div>
  );
};

export default Certificates;
