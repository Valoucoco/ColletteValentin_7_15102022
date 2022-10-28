import '../styles/Fiche_logement.css'
import React, {useEffect, useState} from 'react'
import data from '../data/logement_data'
import {useParams} from 'react-router-dom'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'




function FicheLogement() {
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


    console.log(logement)

    const properties = {
        duration: 50000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }
    

    return (
        <div className='containerSlide'>
            <Slide {...properties}>
                {logement.pictures.map((l, index) => (
                    <div className='each-slide'>
                                <div className="slidePicture" key={l.id}>
                                    <img src= {logement.pictures[index]} alt='img' />
                                </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default FicheLogement