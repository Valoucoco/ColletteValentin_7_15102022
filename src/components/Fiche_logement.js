import '../styles/Fiche_logement.css'
import React, {useEffect, useState} from 'react'
import data from '../data/logement_data'
import {useParams} from 'react-router-dom'
import {Slide} from 'react-slideshow-image'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}



function FicheLogement() {
    const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
    const { id } = useParams()








    useEffect(() => {
        data.map((house) => {
            if (house.id === id) {
                console.log(house)
                setLogement(house)
            }
            return null
        })
    }, [id])

console.log(logement.pictures)
let compteur = 0;

    return (
        <div className='containerSlide'>
            <Slide {...properties}>
                <div className='each-slide'>
                    {logement.pictures.map((l) => (
                            <div className="slidePicture" key={logement.id}>
                                <img src= {logement.pictures[compteur]} alt='img' />
                            </div>
                    ))}
                </div>
            </Slide>
        </div>
    )
}

export default FicheLogement