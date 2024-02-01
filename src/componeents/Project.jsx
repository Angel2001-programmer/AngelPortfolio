const Project = (props) => {
  console.log(props.item);
  return (
    <div>
      <div className='flex items-center flex-col'>
        <h1 className='text-[40px] mb-4'>{props.item.name}</h1>
        {props.item.video === '' ? (
          <div className='bg-gray-500 h-[800px] w-[91%]'>
            <div className='flex flex-col h-[800px] items-center justify-center text-white font-semibold text-[60px]'>
              <h1>:/</h1>
              <h2>Video not avaliable.</h2>
              <h2>please try again at a later date.</h2>
            </div>
          </div>
        ) : (
          <iframe
            width='91%'
            height='800'
            src={props.item.video}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className='flex flex-col text-left ml-20'>
        <h3 className='text-[30px] font-semibold'>Why was project made?</h3>
        <p className='text-[18px]'>{props.item.reason0}</p>
        <h3 className='text-[30px] font-semibold'>
          What challenges did I face and solutions?
        </h3>
        <p className='text-[18px]'>{props.item.reason1}</p>
        <h3 className='text-[30px] font-semibold'>
          What would you do differently?
        </h3>
        <p className='text-[18px]'>{props.item.reason2}</p>
        <li className='font-bold text-[25px] mt-5 list-none'>
          <a href={props.item.repo}>GitHub </a>
        </li>
      </div>
    </div>
  );
};

export default Project;
