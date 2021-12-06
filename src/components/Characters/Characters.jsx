import './Character.scss'
const Characters = ({ personaje }) => {

   const { name, species, image, location, gender } = personaje
   return (
      <div className="flip-card effect-on-hover">
         <div className="front">
            <img src={image} alt={`img-${name}`} />
         </div>
         <div className="back">
               <h2>{name}</h2>
               <div className="pj-data">
                  <p>{species}</p>
                  <p>{gender}</p>
               </div>
               <p className="city">City: {location.name}</p>
         </div>
      </div>
   )
}

export default Characters
