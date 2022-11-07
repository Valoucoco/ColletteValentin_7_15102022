import data from "../../data/logement_data.json";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../styles/Accordion.css";
import "./FicheLogement.css";
import AccordionLogement from "./AccordionLogement";
import Error from '../Error/Error';
import Rate from './Rate';
import Tags from './Tags';

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
    const logementHostName = logement.host.name;
    const logementHostPicture = logement.host.picture;
    const logementRating = logement.rating

    ////////////////--  map() des équipements  --////////////////
    const mapLogementEquipement = logementEquipments.map((l, index) => (
        <p className="pEquipementLogement" key={l}>{logement.equipments[index]}</p>
    ))

    ////////////////--  return()  --////////////////

    return (
        <section>
            

            <figure className="infoLogementContainer">

                <div className="infoLogement">
                    <h1>{logementTitle}</h1>

                    <h2>{logementLocation}</h2>

                    <div className="tagsContainer">
                        <Tags logement={logement} />
                    </div>
                </div>

                <figcaption className="moreInfoContainer">
                    <div className="logementNamePicture">
                        <h3 className="logementName">{logementHostName}</h3>
                        <img className="logementHostPicture"
                            src={logementHostPicture}
                            alt="Portrait de l'annonceur"
                        />
                    </div>

                    <div className='logementRating'>
                        <Rate 
                            logement={logementRating}
                        />
                    </div>
                </figcaption>

            </figure>

            <div className="AccordionLogement">
                <AccordionLogement  
                    title="Description" 
                    content={logementDescription}
                />
                <AccordionLogement  
                    title="Equipements" 
                    content={<div className='equipments'>{mapLogementEquipement}</div>}
                />
            </div>

        </section>
    );
    }

export default FicheLogement;