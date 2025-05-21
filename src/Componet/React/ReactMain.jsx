import React from 'react'
import Card from '../Card'
import { reactTopics } from '../../Data/React/ReactTopics'
import '../../static/css/reactmain.css'


function ReactMain() {
    const reactTopic = reactTopics;
  return (
    <div className='react-main'>
      
        {reactTopic.map((each_topic,index)=>{
            return <Card key = {index} title = {each_topic.title} description = {each_topic.description} />
        })}
      </div>

  )
}

export default ReactMain