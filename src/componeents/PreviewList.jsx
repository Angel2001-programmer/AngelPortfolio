import PreviewItem from '../componeents/PreviewItem';

const PreviewList = (props) => {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1'>
      {props.list.map((item) => (
        <PreviewItem
          name={item.text}
          img={item.image}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default PreviewList;
