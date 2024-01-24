import { useContext } from 'react';
import { AppContext } from '../App';
const PreviewItem = (props) => {
  const [clicked, setClicked] = useContext(AppContext);

  return (
    <div
      className='flex flex-col items-center'
      onClick={() => setClicked(true)}
    >
      <p className='text-[40px]'>{props.name}</p>
      <img
        className='w-[70em] h-[100em] bg-[#D9D9D9]'
        src={props.image}
        alt={props.alt}
      ></img>
    </div>
  );
};

export default PreviewItem;
