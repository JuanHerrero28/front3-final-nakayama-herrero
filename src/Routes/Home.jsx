
import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
const [ odontologos , setOdontologos] = useState([])
const url = "https://jsonplaceholder.typicode.com/users"

useEffect(()=>{
  const fetchOdontologos = async () => {
  let res = await axios.get(url)
  setOdontologos(res.data)

}

fetchOdontologos()


},[])



  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologos.map((odontologo)=>
        <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} email={odontologo.email}/>
        )}
      </div>
    </main>
  )
}

export default Home