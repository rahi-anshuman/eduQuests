import React from 'react'
import '../static/css/content.css'
import { useLocation } from 'react-router-dom';
import { getComponetReactData } from '../Util/getFileData';

function Content() {

  // console.log(hooksData);
  const location = useLocation();
  const hooksData = getComponetReactData(location.pathname);
  console.log(location);

  return (
    <div className='content-main'>
      {/* <div>
        <h3>About React Hooks</h3>
      </div> */}

      <div className='content-type-list'>
        {hooksData.map((each_hook, index) => {
          return <div key={index}>
            {each_hook.subtitle ? <div className='content-types'>
              <h4>{each_hook.subtitle}</h4>
            </div> : <></>}
            <h4 className='contet-type-title'>{each_hook.title}</h4>
            <p className='content-type-description '>{each_hook.description}</p>
            {each_hook.Synatx ? <code className='content-type-syntax '><p className='subheading-text'>Syntax</p><pre className='code'> {each_hook.Synatx}</pre></code> : <></>}
            {each_hook.code ? <code className='content-type-example '><p className='subheading-text'>Code Example</p><pre className='code'>{each_hook.code}</pre></code> : <></>}
          </div>
        })}

      </div>


    </div>
  )
}

export default Content