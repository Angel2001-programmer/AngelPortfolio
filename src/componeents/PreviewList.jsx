import PreviewItem from '../componeents/PreviewItem';
import { useState } from 'react';
import Project from '../componeents/Project';

const PreviewList = (props) => {
  const [clicked, setClicked] = useState(false);
  const [item, setItem] = useState();

  const clickedHandler = (name, video, reason0, reason1, reason2, repo) => {
    setItem({ name: name, video: video, reason0, reason1, reason2, repo });
    setClicked(true);
  };

  return (
    <div>
      {!clicked ? (
        <div className='grid xl:grid-cols-2 md:grid-cols-1 ml-6 mr-6'>
          {props.list.map((item) => (
            <PreviewItem
              name={item.text}
              img={item.image}
              alt={item.alt}
              click={() =>
                clickedHandler(
                  item.text,
                  item.video,
                  item.reason0,
                  item.reason1,
                  item.reason2,
                  item.repo
                )
              }
            />
          ))}
        </div>
      ) : (
        <Project item={item} />
      )}
    </div>
  );
};

export default PreviewList;
