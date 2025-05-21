import React from 'react'
import { language } from '../Data/Language'
import Card from './Card';
import '../static/css/language.css'

function Language() {
    const languages = language;
  return (
    <div className='language-container'>
        {languages.map((each_language,index)=>{
            return <Card key = {index} title = {each_language.title} description = {each_language.description}/>
        })}
    
    </div>
  )
}

export default Language