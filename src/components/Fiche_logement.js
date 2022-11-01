import data from '../data/logement_data.json'
import {useParams} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import '../styles/Accordion.css'
import Accordion_Logement from './Accordion_Logement';
const chevron = <i class="fa-solid fa-chevron-up"></i>;


function Fiche_logement({title, content}) {

    const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
    const { id } = useParams()
    
    useEffect(() => {
        data.map((house) => {
            if (house.id === id) {
                setLogement(house)
            }
            return null
        })
    }, [id])
    console.log('ici', id)

    const equipement = logement.equipments
    const description = logement.description

    return (
            <div className="Accordion_Logement">
            <Accordion_Logement
                title="description"
                content={description}
            />
            <Accordion_Logement
                title="Équipement"
                content={equipement}
            />
            </div>
    )
}

export default Fiche_logement;