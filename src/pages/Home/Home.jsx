import { getTrandingFilms } from "components/Api/Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';






export default function Home() {
  const [trandingFilms, setTrandingFilms] = useState([]);
  

  useEffect(() => {
getTrandingFilms().then(data => setTrandingFilms(data.results))
}, [])


  return (
           
       <ul>
      {trandingFilms.length>0 && trandingFilms.map(({ title, id }) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>)}
      </ul>

  )
}


