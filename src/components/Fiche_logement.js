import '../styles/Fiche_Logement.css'
import React, {useEffect, useState} from 'react'
import data from '../data/logement_data'
import {useParams} from 'react-router-dom'

function Fiche_Logement() {
    const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
    const { id } = useParams()

    useEffect(() => {
        data.map((house) => {
            if (house.id === id) {
                setLogement(house)
            }
            return
        })
    }, [id])


    console.log(logement.title)
    console.log(logement)

    return (
        <div className='Fiche_Logement'>
            
        </div>
    )
}

export default Slideshow