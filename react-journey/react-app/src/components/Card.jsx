import React from 'react'
import {Bookmark} from 'lucide-react';
const Card = (props) => {
 ;
 
  
  return (
     <div className="card">
        <div>
            <div className="top">
            <img src={props.img} alt="" />
           <button>Save <Bookmark size={15} color="black" /></button>
          </div>
          <div className="center">
            <h2>{props.company} <span>{props.time}</span></h2>
            <h2>{props.position}</h2>
            <div className='tag'>
              <h4>Part Time</h4>
              <h4>{props.avalability}</h4>
            </div>
          </div>
        </div>
          <div className="bottom">
              <div>
                <h3>$120/hr</h3>
                <p>Mumbai,India</p>
              </div>
              <button>Apply Now</button>
          </div>
        </div>
  )
}

export default Card
