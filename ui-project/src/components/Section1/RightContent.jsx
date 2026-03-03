import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
     <div className='overflow-x-auto rounded-4xl flex flex-nowrap gap-2 py-10 px-4 m-8  h-full w-2/3 '>
      {props.users.map(function(elem,index){
        return(
          <RightCard key={index} id={index} img={elem.img} tag={elem.tag}/>
        )
      })}
     </div>
  )
}

export default RightContent
//4:20:10