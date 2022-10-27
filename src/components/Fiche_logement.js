import '../styles/Fiche_logement.css'
import React, {useEffect, useState} from 'react'
import data from '../data/logement_data'
import {useParams} from 'react-router-dom'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

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

    return (
        <div className='containerSlide'>
            <Slide {...properties}>
                <div className='each-slide'>
                            <div className="slidePicture" key={logement.id}>
                                <img src= {logement.pictures[1]} alt='img' />
                            </div>
                </div>
                <div className='each-slide'>
                            <div className="slidePicture" key={logement.id}>
                                <img src= {logement.pictures[2]} alt='img' />
                            </div>
                </div>
                <div className='each-slide'>
                            <div className="slidePicture" key={logement.id}>
                                <img src= {logement.pictures[3]} alt='img' />
                            </div>
                </div>
            </Slide>
        </div>
    )
}

export default FicheLogement



/*
{logement.pictures.map((l) => (

                    ))}
*/