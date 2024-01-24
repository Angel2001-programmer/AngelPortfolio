import { useContext } from 'react';
import { AppContext } from '../App';
const PreviewItem = (props) => {
  const [clicked, setClicked] = useContext(AppContext);

  return (
    <div
      className='flex flex-col'
      onClick={() => setClicked(true)}
    >
      <p className='text-[40px]'>{props.name}</p>
      <img
        className='w-[800px] h-[461px] bg-[#D9D9D9]'
        src={props.img}
        alt={props.alt}
      ></img>
    </div>
  );
};

export default PreviewItem;
