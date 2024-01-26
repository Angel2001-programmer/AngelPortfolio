import { useContext } from 'react';
import { AppContext } from '../App';
const PreviewItem = (props) => {
  const [clicked, setClicked] = useContext(AppContext);

  return (
    <div
      className='grid grid-cols-1 gap-2 place-items-center'
      onClick={() => setClicked(true)}
    >
      <p className='text-[40px]'>{props.name}</p>
      <img
        className='h-[450px] bg-[#D9D9D9]'
        src={props.img}
        alt={props.alt}
      ></img>
    </div>
  );
};

export default PreviewItem;
