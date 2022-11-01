import '../styles/Slideshow.css'
import React, {useEffect, useState} from 'react'
import data from '../data/logement_data'
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


////////////////////RETURN////////////////////

    return (
        <section className='section_slider'>
                <FiChevronLeft className='left-arrow' onClick={prevSlide}/>
            <div className='slider'>
            {logement.pictures.map((l, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <div className="image_slider" 
                            style={{
                                backgroundImage: `url(${(logement.pictures[index])})`
                            }}>
                        </div>
                        )}
                    </div>
                )
            })}
            </div>
            <FiChevronRight className='right-arrow' onClick={nextSlide}/>
        </section>
    )
}
            export default Slideshow









// function Slideshow() {
//     const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
//     const { id } = useParams()

//     useEffect(() => {
//         data.map((house) => {
//             if (house.id === id) {
//                 setLogement(house)
//             }
//             return
//             // return <redirect to="./Error" />
//         })
//     }, [id])


//     console.log(logement.title)
//     console.log(logement)

//     const properties = {
//         duration: 5000,
//         transitionDuration: 500,
//         infinite: true,
//         indicators: true,
//         arrows: true
//     }
    
//     return (
//         <div className='containerSlide'>
//             <Slide {...properties}>
//                 {logement.pictures.map((l, index) => (
//                     <div className='each-slide'>
//                                 <div className="slidePicture" key={l.id}>
//                                     <img src= {logement.pictures[index]} alt='img' />
//                                 </div>
//                     </div>
//                 ))}
//             </Slide>
//         </div>
//     )
// }

// export default Slideshow