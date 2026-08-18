import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
        <div className="card">

        <div className="top">
          <img src={props.brandLogo} alt={props.company} />
          <button>save <Bookmark size={13}/></button>
        </div>

        <div className="centre">
            <h4>{props.company}<span>{props.datePosted}</span></h4>
            <h3>{props.post}</h3>
            <div className='tag'>
              <h5>{props.tag1}</h5>
              <h5>{props.tag2}</h5>
            </div>
        </div>

        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply now</button>
        </div>

      </div>
  )
}

export default Card
