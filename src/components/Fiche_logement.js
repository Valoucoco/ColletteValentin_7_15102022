import '../styles/Fiche_logement.css'
import React, {useEffect, useState} from 'react'
//import {useParams} from "react-router-dom"
//import axios from 'axios'
import data from '../datas/logement_data.json'
console.log('ras', data)


function Logement(data) {
    let id = useEffect()
    console.log('id de la page',id)

    useEffect(() => {
        fetch(data)
        .then((res) => {
            console.log("BingoFetch", res)
        })
        .catch(err => {
            console.log("oups", err)
        })
    })



/////////////////////////////////////////

	return <div className='Chose'>
        <p>coucou</p>
    </div>
}
export default Logement