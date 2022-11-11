import './Slideshow.css'
import React, {useEffect, useState} from 'react'
import data from '../../data/logement_data'
import {useParams} from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


function Slideshow() {

////////////////////SET-LOGEMENT////////////////////

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

////////////////////CURRENT-IMAGE////////////////////

    const [current, setCurrent] = useState(0)
    const length = logement.pictures.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current +1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    if(logement.pictures.length <= 0) {
        return null
    }

    let chevronOrNot = "arrow";
    if(logement.pictures.length === 1) {
        console.log('une seule photo !')
        chevronOrNot = "arrow, picturesAlone"
    }


////////////////////RETURN////////////////////

    return (
        <section className='sectionSlider'>
                
            <div className='slider'>
            {logement.pictures.map((l, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <div className="imageSlider" 
                            style={{
                                backgroundImage: `url(${(logement.pictures[index])})`
                            }}>
                                <FiChevronLeft className={chevronOrNot} onClick={prevSlide}/>
                                {index=== current && (
                                    <span className='slideNumber'>
                                        {current +1}/{length}
                                    </span>
                                )}
                                <FiChevronRight className={chevronOrNot} onClick={nextSlide}/>
                        </div>
                        )}
                    </div>
                )
            })}
            </div>
        </section>
    )
}
            export default Slideshow