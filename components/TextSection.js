import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TextSection = ({ slice }) => (
  <section className='text-section'>

      <div className='subtitle'>{slice.primary.title}</div>

      <div className='description'>
        <PrismicRichText field={slice.primary.description}/>
      </div>
  </section>
)

export default TextSection