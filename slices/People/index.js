import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.PeopleSlice} PeopleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PeopleSlice>} PeopleProps
 * @param { PeopleProps }
 */
const People = ({ slice }) => (
  <>
  <div className='subtitle'>{slice.primary.title}</div>
  <section className='people-section'>
     {slice?.items?.map((item, i) => {
      return(
        <div className='people'>
          <div className='img-wrapper'>
            <img src={item.image.url}/>
            <div className='gradient'></div>
            <div className='gradient gradient2'></div>
          </div>
          <div className='role'>{item.role}</div>
          <h2>{item.name}</h2>
          
        </div>
      )
     })}
  </section>
  </>
)

export default People