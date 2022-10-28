import '../styles/Slideshow.css'
import React, {useEffect, useState} from 'react'
import data from '../data/logement_data'
import {redirect, useParams} from 'react-router-dom'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Error from './Error'

function Slideshow() {
    const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
    const { id } = useParams()

    useEffect(() => {
        data.map((house) => {
            if (house.id === id) {
                setLogement(house)
            }
            return
            // return <redirect to="./Error" />
        })
    }, [id])


    console.log(logement.title)
    console.log(logement)

    const properties = {
        duration: 5000,
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

export default Slideshow