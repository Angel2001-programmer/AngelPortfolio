import PreviewItem from '../componeents/PreviewItem';

const PreviewList = (props) => {
  return (
    <div className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1'>
      {props.list.map((item) => (
        <PreviewItem
          name={item.name}
          img={item.image}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default PreviewList;
