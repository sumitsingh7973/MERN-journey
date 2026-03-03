import React from 'react'
import 'remixicon/fonts/remixicon.css';
import RightCardContent from './RightCardContent';
const RightCard = (props  ) => {
  return (
    <div  className=" shrink-0 ml-3 h-full overflow-hidden relative w-80 rounded-4xl">
        <img className='h-full w-full object-cover 'src={props.img} alt="" />
        <RightCardContent id={props.id}  tags={props.tag}/>
    </div>
  )
}

export default RightCard
