import React from 'react'
import { Link } from 'react-router-dom'
import TheList from '../countries.json'

const CountriesList = () => {

    return(
        <div class="col-5" style={{maxHeight: "90vh", overflowY: "scroll"}}>
            <div className="list-group">
                {
                    TheList.map((el) => {
                        let location = `/${el.cca3}`
                        return(
                            <Link className="list-group-item list-group-item-action" exact to={location}>{el.flag} {el.name.common}</Link>
                        )
                    })            
                }                  
            </div>
        </div>
    )
        

}

export default CountriesList;