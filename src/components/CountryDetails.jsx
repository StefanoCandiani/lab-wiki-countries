import React from 'react'
import { Route, Switch } from 'react-router-dom';
import TheList from '../countries.json'

const CountryDetails = () => {
    return(
    <div className="col-7">
        <Switch>
        {
            TheList.map((el) => {
                let thisPath = `/${el.cca3}`

                return (

                    <Route exact path={thisPath}>

                            <h1>{el.flag}</h1>            

                    </Route> 
                )               
            })                    
        }
        </Switch>
    </div>
    )
}

export default CountryDetails;