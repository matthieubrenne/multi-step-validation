import React, {useState} from 'react'
import './SubForm.css'

export default function DietForm(props) {

    const [formData, setFormData] = useState({
        DietForm: 'nodiet'
    })

    const handleRadio = e => {
        setFormData({
            DietForm: e.target.value
        })
    }

    console.log(formData);

    const preventFunc = e => e.preventDefault();

    return (
        <div>
            <form 
            onSubmit={preventFunc}
            className='diet-form'>

            <p>Quel est ton régime alimentaire ?</p>

            <label htmlFor="nodiet">Pas de régime particulier</label>
            <input 
            onChange={handleRadio}
            type="radio" 
            name='diet'
            id='nodiet'
            value="nodiet"
            />

            <label htmlFor="homnivorous">Homnivore</label>
            <input 
            onChange={handleRadio}
            type="radio" 
            name='diet'
            id='homnivorous'
            value="homnivorous"
            />

            <label htmlFor="vegetarian">Végétarien</label>
            <input 
            onChange={handleRadio}
            type="radio" 
            name='diet'
            id='vegetarian'
            value="vegetarian"
            />

            <label htmlFor="vegan">Vegan</label>
            <input 
            onChange={handleRadio}
            type="radio" 
            name='diet'
            id='vegan'
            value="vegan"
            />

            <button onClick={() => props.modifyIndex(3, formData)}>Valider</button>

            </form>
        </div>
    )
}
