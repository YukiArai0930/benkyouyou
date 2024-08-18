import React from 'react'
type ResultsProps ={
     results:{
        country: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
     }
}

const Results = (props:ResultsProps) => {
    return(
        <div>
         <p>{props.results.country && 
         <p>{props.results.country} </p>}</p>
         <p>{props.results.cityName}</p>
         <p>{props.results.temperature}<span>℃</span></p>
         <img src={props.results.icon} alt='icon'></img>
         <span>{props.results.conditionText}</span>
        </div>
    )
}

export default Results