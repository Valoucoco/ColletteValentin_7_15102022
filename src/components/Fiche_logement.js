import '../styles/Fiche_logement.css'
import React, {useEffect, useState} from 'react'
import data from '../data/logement_data'
import {useParams} from 'react-router-dom'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const properties = {
    duration: 50000,
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
                //console.log(house)
                setLogement(house)
            }
            return null
        })
    }, [id])

let logementPictures = logement.pictures

console.log(logementPictures.length)


for (let i = 0; i < logementPictures.length; i++) {
            console.log(logementPictures[i])
        }


    return (
        <div className='containerSlide'>
            <Slide>
                {logementPictures.map((l, index) => (
                    <div className='each-slide'>
                                <div className="slidePicture" key={l.id}>
                                    <img src= {logementPictures[index]} alt='img' />
                                </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default FicheLogement



/*
{logement.pictures.map((l) => (

                    ))}
*/