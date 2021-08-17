import React from 'react'

//components
import MediaCard from '../components/MediaCard';

//images
import spirit from '../images/Spirit.jpg';
import opportunity from '../images/Opportunity.jpg';
import curiosity from '../images/Curiosity.jpg';

const cards = [
  {
  name: "Curiosity",
  image: curiosity,
  link: "/curiosity",
  description: "info here"
  },
  {
    name: "Opportunity",
    image: opportunity,
    link: "/opportunity",
    description: "info here"
  },
  {
    name: "Spirit",
    image: spirit,
    link: "/spirit",
    description: "info here"
  }
]
const Home = () => {
  return (
    <div>
          <h1>NASA Rovers</h1>
      { cards.map((card,id) => {
        return <div key={id}>
            <MediaCard name={card.name} image={card.image} link={card.link} description={card.description}/>
          </div>
      })}
    </div>
  )
}

export default Home
