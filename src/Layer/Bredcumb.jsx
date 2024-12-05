import React from 'react'


{/*  */}

const Bredcumb = () => {
  return (
    <div className=''>
        {/* <TitleHeader headerText={`${window.location.pathname.split('/')[1]} ${window.location.pathname.split('/')[2]}`}/> */}
        <h2 className=' capitalize '><span className='mr-4'>Performance Comercial</span> {` ${window.location.pathname.split('/')[1]} ${window.location.pathname.split('/')[2]}`}</h2>
    </div>
  )
}

export default Bredcumb