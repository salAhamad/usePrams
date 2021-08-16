import React from 'react'
import { useParams } from 'react-router-dom';


function FullCard({cardData}) {
    
    const {id} = useParams();
    return (
        <section className="cardSection p-5">
            <div className="container">
            {
                cardData.map((data, index) => {
                    return <div className="card" key={index}>
                        <div className="imgContainer">
                            <img src={cardData.image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{cardData.title}</h5>
                            <p className="card-text">{cardData.discription}</p>
                        </div>
                    </div>
                })
            }
            </div>
        </section>
    )
}

export default FullCard;
