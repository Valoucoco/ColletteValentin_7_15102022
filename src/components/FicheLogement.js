import data from "../data/logement_data.json";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/Accordion.css";
import "../styles/Fiche_Logement.css"
import AccordionLogement from "./AccordionLogement";
import Error from './Error'

function FicheLogement({ title, content }) {
    const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
    });
    const { id } = useParams();

    useEffect(() => {
    data.map((house) => {
        if (house.id === id) {
        setLogement(house);
        }
        return null;
    });
    }, [id]);

    console.log("ici", logement.equipments);

    if (logement.title === undefined) {
        return <Error />;
    }

    const description = logement.description;
    // const equipment = logement.equipments;
    // const location = logement.location;
    const logementEquipments = logement.equipments

    const map_Logement = logementEquipments.map((l, index) => (
        <p className="p_equipement_logement">{logement.equipments[index]}</p>
    ))

    return (
        <section>
            <div className="Accordion_Logement">
                <AccordionLogement  
                    title="Description" 
                    content={description}/>

                <AccordionLogement  
                    title="Equipements" 
                    content={<div className='equipments'>{map_Logement}</div>} />
            </div>
        </section>
    );
    }

export default FicheLogement;