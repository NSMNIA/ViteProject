import React from 'react'
import './sectionheader.scss';

interface IProps {
    title: string
}

export const SectionHeader = ({ title }: IProps) => {
  return (
    <h6 className='rd-section--header'>{title}</h6>
  )
}
