const Project = () => {
  return (
    <div>
      <div className='flex items-center flex-col'>
        <h1 className='text-[40px] mb-4'>Project Name</h1>
        <iframe
          width='91%'
          height='800'
          src='https://www.youtube.com/embed/N2exPXytu_E?si=mlDU9se6YfBZf2aY'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </div>
      <div className='flex flex-col text-left ml-20'>
        <h3 className='text-[30px] font-semibold'>Why was project made?</h3>
        <h3 className='text-[30px] font-semibold'>
          What challenges did I face and solutions?
        </h3>
        <h3 className='text-[30px] font-semibold'>
          What would you do differently?
        </h3>
      </div>
    </div>
  );
};

export default Project;
