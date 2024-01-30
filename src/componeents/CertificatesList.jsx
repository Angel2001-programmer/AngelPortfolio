import PreviewItem from './PreviewItem';

const CertificatesList = (props) => {
  return (
    <div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 ml-6 mr-6'>
        {props.list.map((item) => (
          <PreviewItem
            name={item.text}
            img={item.image}
            alt={item.alt}
            video={item.video}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesList;
