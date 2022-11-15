import React from "react";
import Star from '../../assets/Star.png'
import StarEmpty from '../../assets/StarEmpty.png';

// je créé la fonction Rate avec en paramètre "logement" pour récuperer ensuite son ratonScore allant de 1 à 5 (étoiles)
function Rate({ logement }) {
const ratingScore = [1, 2, 3, 4, 5]
return (
    <div>
            {/* je boucle  sur mon ratingScore, tant que la condition est positive, alors les étoile sont pleine, sinon, elles sont vide */}
            {ratingScore.map((ratingElem) =>
                logement >= ratingElem ? (
                    <img 
                        src={Star} 
                        key={ratingElem.toString()} 
                        alt='étoile rempli' 
                    />
                ) : (
                    <img 
                        src={StarEmpty} 
                        key={ratingElem.toString()} 
                        alt='étoile vide'
                    />
                )
            )}
        </div>
)
}

export default Rate;