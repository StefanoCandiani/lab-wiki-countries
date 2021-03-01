import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import TheList from '../countries.json'

const CountryDetails = (props) => {

    const checkIndependency = (ind) => {
        if(ind === true) {
            return ( <td>Independent</td> ) 
        } else {
            return ( <td>Not Independent</td> )
        }
    }

    // const checkUN = (isUN) => {
    //     if(isUN === true) {
    //         return ( <td>Member of UN</td> ) 
    //     } else {
    //         return ( <td>Not a Member of UN</td> )
    //     }
    // }

    return(
    <div className="col-7">
        <Switch>
        {
            TheList.map((el) => {
                let thisPath = `/${el.cca3}`
                
                return (

                    <Route exact path={thisPath}>
                            <h1>{el.flag} {el.name.official}</h1>
                            <table className="table">
                                <thead></thead>    
                                <tbody>
                                    <tr>
                                        <td style={{width:"30%"}}>Capital</td>
                                        <td>{el.capital}</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:"30%"}}>Area</td>
                                        <td>{el.area} km<sup>2</sup></td>
                                    </tr>
                                    <tr>
                                        <td style={{width:"30%"}}>Independency Status</td>
                                        { checkIndependency(el.independent) }
                                    </tr>
                                    {/* <tr>
                                        <td style={{width:"30%"}}>UN Membership</td>
                                        { checkUN(el.unMember) }
                                    </tr> */}
                                    <tr>
                                        <td style={{width:"30%"}}>Borders</td>
                                        <td>
                                            <ul>
                                                {el.borders.map((border) => {
                                                    let borderPath = `/${border}`;
                                                    return(
                                                        <li key={border}><Link exact to={borderPath}>{border}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>            
                    </Route> 
                )               
            })                    
        }
        </Switch>
    </div>
    )
}

export default CountryDetails;