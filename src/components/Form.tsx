import React from 'react'

type FormProps ={
    setCity : React.Dispatch<React.SetStateAction<string>>
    getWether : (e: React.FormEvent<HTMLFormElement>) => void
}


const Form = (props) => {
   

    return(
        <form>
            <input type="text" name="city" placeholder="都市名" 
            onChange={e => props.setCity(e.target.value)}/>
            <button type='submit' onClick={props.getWeather}>天気を見る</button>
        </form>
    )
}

export default Form