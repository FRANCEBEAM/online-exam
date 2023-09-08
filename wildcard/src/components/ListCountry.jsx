import { Link } from "react-router-dom";

const ListCountry = ({countries}) => {
  
  return (
    <>
<ul>
{
          countries.map((country, index) => (
            <Link to={`/details/${country.name.common}`} key={country.name.common}>
              <li className="card-country">
                <div className="card-content">
                  <div className="card-img">
                    <img src={country.flags.png} alt={country.altSpellings} />
                  </div>
                  <div className="card-descp">
                    <h1>{country.name.common}</h1>
                    <p>{country.name.official}</p>
                  </div>
                </div>
              </li>
            </Link>
          ))
        }
      </ul>
    </>
  )
}

export default ListCountry