import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Collapsible from 'react-collapsible';

/**
 * @typedef {import("@prismicio/client").Content.PeopleSlice} PeopleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PeopleSlice>} PeopleProps
 * @param { PeopleProps }
 */
const People = ({ slice }) => {
  function toggleActive(e){
    console.log(e)
  }
  return(
    <>
    <div className='subtitle'>{slice.primary.title}</div>
    <section className='people-section'>
      {slice?.items?.map((item, i) => {
        return(
          <div className='people' onClick={toggleActive}>
            <div className='img-wrapper'>
              <img src={item.image.url}/>
              <div className='gradient'></div>
            </div>
            <div className='role'>{item.role}</div>
            <h2>{item.name}</h2>
            <div className='bio'>
              <PrismicRichText field={item.bio}/>
            </div>
    
          </div>
        )
      })}
    </section>
    </>
  )
}

export default People