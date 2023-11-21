import React from 'react'
import SampleDataCard from './SampleDataCard'

const SampleData = ({sampleData}) => {
  return (
    <div className='samepleDataList'>
      {sampleData.map((item, index) =>{
        return (
            <SampleDataCard
                key={index}
                description = {item.description}
                url = {item.url}
                types = {item.types}
                topics = {item.topics}
                levels = {item.levels}
            />
        )
      })}
    </div>
  )
}

export default SampleData

