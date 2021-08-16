import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const cardData = [
    {
        id: "html",
        title: "HTML 5",
        discription: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. ... HTML elements are the building blocks of HTML pages.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
    },
    {
        id: "css",
        title: "CSS 3",
        discription: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
    },
    {
        id: "javascript",
        title: "Javascript",
        discription: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
        id: "react",
        title: "ReactJs",
        discription: "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        image: "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg"
    }
];

function Cards() {
    const [data, setData] = useState(cardData);
    
    // const pram
    return (
        <section className="cardSection p-5">
            <div className="container">
                <div className="row gy-4">
                {
                    data.map((data, index) => {
                        return <div className="col-6" key={index} cardData={cardData}>
                            <div className="card">
                                <div className="imgContainer">
                                    <img src={data.image} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">{data.discription}</p>
                                    <Link to={`/cards/${data.id}`} className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Cards
