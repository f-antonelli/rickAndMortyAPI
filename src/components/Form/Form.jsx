import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2'
import './Form.scss'

const Form = ({ setNombrePj }) => {

   const [inputs, handleChange, reset] = useForm({  //   Initial sState
      nombre: ''
   })

   const { nombre } = inputs

   const handleSubmit = e => {
      e.preventDefault();

      if (!nombre.trim()){
         return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
      }

      setNombrePj(nombre.trim().toLowerCase());
      reset();
   }

   return (
      <form onSubmit={handleSubmit}>
         <input 
            type="text"
            name="nombre"
            placeholder="Ingrese un personaje"
            value={nombre}
            onChange={handleChange}
         />
         <button type="submit" classNam="submit"> &#x1F50D; </button>
      </form>
   )
}

export default Form
