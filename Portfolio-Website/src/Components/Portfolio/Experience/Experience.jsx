import React from 'react'
import './Experience.css'
import SampleAssistLogo from '../../../assets/SA_Logo.png'
import BCITLogo from '../../../assets/BCIT_Logo.png'
import UOWLogo from '../../../assets/UOW_Logo.png'
import { workExperience } from './data'

 
const Experience = () => {
  return (
    <div>
        <table className='work-experience'>
            {workExperience.map( (item, i) => {
                return ( 
                    <>
                        <tr className="row" key={`header-${i}`}>
                            <th><img src={item.logo}/></th>
                            <td>
                                <h3>{item.organisation}</h3>
                                <p>{item.title}</p>
                                <p>{item.subtitle}</p>
                            </td>
                        </tr>
                        {/* <tr className="row" key={`desc-${i}`}>
                            <td colSpan="2">
                                <p>{item.description}</p>
                            </td>
                        </tr> */}
                    </>
                )
            })}
        </table>
    </div>
  )
}

export default Experience