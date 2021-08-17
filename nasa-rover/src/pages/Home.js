import React from 'react'

//components
import MediaCard from '../components/MediaCard';

//images
import spirit from '../images/Spirit.jpg';
import opportunity from '../images/Opportunity.jpg';
import curiosity from '../images/Curiosity.jpg';

//styles
import { makeStyles } from '@material-ui/core/styles';


const cards = [
  {
  name: "Curiosity",
  image: curiosity,
  link: "/curiosity",
  description: "Curiosity was launched from Cape Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012, 05:17:57 UTC"
  },
  {
    name: "Opportunity",
    image: opportunity,
    link: "/opportunity",
    description: "Opportunity was operational on Mars for 5110 sols (5250 days; 14 years, 136 days). Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A) touched down on the other side of the planet."
  },
  {
    name: "Spirit",
    image: spirit,
    link: "/spirit",
    description: "Spirit was operational on Mars for 2208 sols (2249 days; 6 years, 77 days). It was one of two rovers of NASA's Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL). Spirit landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition."
  }
]

const myStyle = makeStyles((theme) => ({
  body: {
    minHeight: '100vh',
    display: "flex",
    alignItems: 'center',
    flexDirection: "column"
  },
  cards: {
    margin: "5rem",
    display: "flex",
    maxWdith: "100vw",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    margin: "20px",
    minWidth: 300,
    minHeight: 300
  }
}));

const Home = () => {
  const classes = myStyle();

  return (
    <div className={classes.body}>
      <h1>NASA Rovers</h1>
      <div className={classes.cards}>
        { cards.map((card,id) => {
          return <div key={id} className={classes.card} >
              <MediaCard name={card.name} image={card.image} link={card.link} description={card.description}/>
            </div>
        })}
      </div>
    </div>
  )
}

export default Home
