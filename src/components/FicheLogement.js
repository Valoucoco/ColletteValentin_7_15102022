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

    if (logement.title === undefined) {
        return <Error />;
    }

    const description = logement.description;
    // const equipment = logement.equipments;
    // const location = logement.location;
    const logementEquipments = logement.equipments
    const logementTags = logement.tags

    const map_Logement = logementEquipments.map((l, index) => (
        <p className="p_equipement_logement">{logement.equipments[index]}</p>
    ))

    const map_Tags = logementTags.map((l, index) => (
        <p className="p_equipement_logement" key={logement.tags[index]}>{logement.tags[index]}</p>
    ))

    return (
        <section>
            <article className="info_Logement_Container">
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
                <div className="tags_Container">
                    {map_Tags}
                </div>
                <div>
                    <span>{logement.name}</span>

                </div>
            </article>
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