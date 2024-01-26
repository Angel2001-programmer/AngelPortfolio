const Project = (props) => {
  console.log(props.item);
  return (
    <div>
      <div className='flex items-center flex-col'>
        <h1 className='text-[40px] mb-4'>{props.item.text}</h1>
        <iframe
          width='91%'
          height='800'
          src={props.item.video}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </div>

      <div className='flex flex-col text-left ml-20'>
        <h3 className='text-[30px] font-semibold'>Why was project made?</h3>
        <p></p>
        <h3 className='text-[30px] font-semibold'>
          What challenges did I face and solutions?
        </h3>
        <p></p>
        <h3 className='text-[30px] font-semibold'>
          What would you do differently?
        </h3>
        <p></p>
      </div>
    </div>
  );
};

export default Project;
