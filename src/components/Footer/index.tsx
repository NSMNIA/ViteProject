import React from 'react'
import { SectionHeader } from '../SectionHeader';
import './footer.scss';

export const Footer = () => {
  return (
    <section className='rd-footer' data-scroll-section>
        <SectionHeader title="Made in"/>
        <h1 className='location'>
            Valkenswaard
        </h1>
    </section>
  )
}
