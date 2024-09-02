import React from 'react'

const CreateBar = ({barNumbers , barProperty}) => {
  return barNumbers==0 ? <h1 className='note'>Move Slider To generate Bars</h1>: (
        barProperty?.map((bar)=> <div className={bar?.color} style={{width:bar?.width , height:bar?.height }} key={bar?.id}></div>)
  )
}

export default CreateBar;