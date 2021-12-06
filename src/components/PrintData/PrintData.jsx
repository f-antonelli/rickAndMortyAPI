import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import Characters from "../Characters/Characters";
import Loader from "../Loader/Loader";
import './PrintData.scss'

const PrintData = ({ nombrePj }) => {

   const [personajes, setPersonajes] = useState([]);
   const [loader, setLoader] = useState(false);

   useEffect( () => {
      getApi(nombrePj);
   }, [nombrePj]);

   const getApi = async (nombre) => {
      setLoader(true);
      try{
         const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`);

         if (!res.ok) {
            return Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Personaje no encontrado'
             });
         }

         const data = await res.json();
         setPersonajes(data.results);
      } catch (error) {
         console.log(error);
      } finally {
         setLoader(false);
      }
   }

   if(loader)
      return <Loader />

   return (
      <div className="container-chars">
         {
            personajes.map(pj => (
               <Characters key={pj.id} personaje={pj} />
            ))
         }
      </div>
   )
}

export default PrintData;
