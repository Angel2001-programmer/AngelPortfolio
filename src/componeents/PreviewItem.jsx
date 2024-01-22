const PreviewItem = (props) => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-[40px]'>{props.name}</p>
      <img
        className='w-[436px] h-[461px] bg-[#D9D9D9]'
        src={props.image}
        alt={props.alt}
      ></img>
    </div>
  );
};

export default PreviewItem;
