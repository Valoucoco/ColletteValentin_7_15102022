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

    ////////////////--  si l'id n'existe pas (titre inéxistant) alors go to 404  --////////////////

    if (logement.title === undefined) {
        return <Error />;
    }

    ////////////////--    --////////////////
    ////////////////--    --////////////////

    const logementDescription = logement.description;
    const logementTitle = logement.title;
    const logementEquipments = logement.equipments;
    const logementLocation = logement.location
    const logementName = logement.name
    const logementTags = logement.tags;
    const logementHostName = logement.host.name;
    const logementHostPicture = logement.host.picture;
    ////////////////--  map() des équipements  --////////////////
    const map_LogementEquipement = logementEquipments.map((l, index) => (
        <p className="p_equipement_logement">{logement.equipments[index]}</p>
    ))
    ////////////////--  map() des tags  --////////////////
    const map_logementTags = logementTags.map((l, index) => (
        <p className="p_equipement_logement" key={logement.tags[index]}>{logement.tags[index]}</p>
    ))

    ////////////////--  return()  --////////////////

    return (
        <section>
            <article className="info_Logement_Container">

                <h1>{logementTitle}</h1>

                <h2>{logementLocation}</h2>

                <div className="tags_Container">
                    {map_logementTags}
                </div>

                <div>
                    <h3>{logementName}</h3>
                    <img className="logementHostPicture"
                        src={logementHostPicture}
                        alt="Portrait de l'annonceur"
                    />
                </div>

            </article>
            <div className="Accordion_Logement">
                <AccordionLogement  
                    title="Description" 
                    content={logementDescription}/>

                <AccordionLogement  
                    title="Equipements" 
                    content={<div className='equipments'>{map_LogementEquipement}</div>} />
            </div>
        </section>
    );
    }

export default FicheLogement;