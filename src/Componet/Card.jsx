import React from 'react'
import '../static/css/card.css'
import { getImageUrl } from '../Util/getImageUrl'
import { useLocation, useNavigate } from 'react-router-dom'
import { hooks } from '../Data/React/Hooks'
import { getComponetReactData } from '../Util/getFileData'
// import  react_basic  from '../static/img/react_basic.png'


function Card(props) {
  const navigate = useNavigate();
  const loction = useLocation();
  console.log("From card location", location)
  const functionClick = () => {
    console .log(" Called card function")
    if (loction.pathname.includes('/learning')) {
      if (props.title === 'react')
        navigate('/react', { state: hooks });
      else if (props.title === 'spring-boot')
        navigate('/spring-boot');
    }
    else if (loction.pathname.includes('/react')) {
      const url_redirect = props.title.replace(" ", "").toLowerCase();
      const data = getComponetReactData(url_redirect);
      navigate(`/react/${url_redirect}`, { state: data })
    }

  }
  return (
    <div className='card-container' onClick={functionClick}>
      <div className='card-icon'>
        <img src={getImageUrl(props.title)} alt="" />
      </div>
      <div className='card-text'>
        <div className='card-heading'> <p>{props.title}</p></div>
        <p className='card-description'>{props.description}</p>
      </div>
    </div>
  )
}

export default React.memo(Card)