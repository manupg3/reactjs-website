import './App.css';
import Listar from './components/listar';
export default function Dashboard() {
  const isLogged = false;


  return (
    <div className="App pt-24">
       <div className="text-center">
       <h1 >Dashboard</h1>
       </div>
       <section>
       <Listar />
         
       </section>
   </div>

  )
}