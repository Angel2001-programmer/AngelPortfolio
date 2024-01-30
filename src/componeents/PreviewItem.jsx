const PreviewItem = (props) => {
  return (
    <div
      className='grid grid-cols-1 gap-2 place-items-center'
      onClick={props.click}
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
