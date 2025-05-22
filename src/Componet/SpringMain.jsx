import React from 'react'
import { spring_topics } from '../Data/spring-boot/SpringTopic'
import Card from './Card'

function SpringMain() {
  return (
    <div className='react-main'>
          
            {spring_topics.map((each_topic,index)=>{
                return <Card key = {index} title = {each_topic.title} description = {each_topic.description} />
            })}
          </div>
  )
}

export default SpringMain