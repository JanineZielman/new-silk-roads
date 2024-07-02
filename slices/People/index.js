import React, {useState} from 'react'
import { PrismicRichText } from '@prismicio/react'
import useIsMobile from '../../components/useIsMobile';

/**
 * @typedef {import("@prismicio/client").Content.PeopleSlice} PeopleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PeopleSlice>} PeopleProps
 * @param { PeopleProps }
 */
const People = ({ slice }) => {
  const isMobile = useIsMobile();
  const [activeElementId, setActiveElementId] = useState(null);

  const toggleActive = (id) => {
    if (activeElementId) {
      document.getElementById(activeElementId).classList.remove('active');
      document.getElementById(activeElementId + 'pic').classList.remove('active');
    }
    if (activeElementId !== id) {
      document.getElementById(id).classList.add('active');
      document.getElementById(id + 'pic').classList.add('active');
      setActiveElementId(id);
    } else {
      setActiveElementId(null); // If the same element is clicked, deactivate it
    }
  };


  const items = slice?.items || [];

  const chunkSize = 4;
  const chunks = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }

  return(
    <>
    <div className='subtitle'>{slice.primary.title}</div>
    <section className='people-section panel' data-color="blue">
       {chunks.map((chunk, chunkIndex) => (
        <React.Fragment key={`chunk${chunkIndex}`}>
          {chunk.map((item, itemIndex) => (
            <React.Fragment key={`people${chunkIndex * chunkSize + itemIndex}`}>
              <div
                id={`people${chunkIndex * chunkSize + itemIndex}pic`}
                className='people'
                onClick={() => toggleActive(`people${chunkIndex * chunkSize + itemIndex}`)}
              >
                <div className='img-wrapper'>
                  <img src={item.image.url} />
                  <div className='gradient'></div>
                </div>
                <div className='role'>{item.role}</div>
                <h2>{item.name}</h2>
              </div>
              {isMobile && (
                <div className='bios' id={`people${chunkIndex * chunkSize + itemIndex}`} key={`bios${chunkIndex * chunkSize + itemIndex}`}>
                  <div className='bio'>
                    <PrismicRichText field={item.bio} />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
          {!isMobile && (
            <div className='bios' key={`bios${chunkIndex}`}>
              {chunk.map((item, j) => (
                <div className='bio' id={`people${chunkIndex * chunkSize + j}`} key={`bio${j}`}>
                  <PrismicRichText field={item.bio} />
                </div>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
    </>
  )
}

export default People