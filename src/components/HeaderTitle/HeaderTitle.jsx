import React from 'react'

const HeaderTitle = ({title, subTitle}) => {
  return (
    <div className='text-center mb-10'>
        <p data-aos='fade-up' className='text-primary text-sm'>{subTitle}</p>
        <h1 data-aos='fade-up' data-aos-delay='300' className='text-3xl font-bold'>{title}</h1>
    </div>
  )
}

export default HeaderTitle