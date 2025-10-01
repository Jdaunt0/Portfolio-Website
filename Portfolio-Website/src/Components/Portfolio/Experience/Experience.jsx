import React, { useState } from 'react'
import style from './Experience.module.scss'
import SampleAssistLogo from '../../../assets/SA_Logo.png'
import BCITLogo from '../../../assets/BCIT_Logo.png'
import UOWLogo from '../../../assets/UOW_Logo.png'
import { workExperience } from './data'

 
const Experience = () => {
  const [selectedDescription, setSelectedDescription] = useState('Hello-World');

  const handleRowClick = (item) => {
    setSelectedDescription(item.description);
  };
  return (
    <div id="experience">
        <table className={style.workExperience}>
            <tbody>
                {workExperience.map( (item, i) => {
                    return ( 
                        <tr className={style.row} key={`header-${i}`} onClick={() => handleRowClick(item)}>
                            <th><img src={item.logo}/></th>
                            <td>
                                <h3>{item.organisation}</h3>
                                <p>{item.title}</p>
                                <p>{item.subtitle}</p>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className={style.content}>
            <p>{selectedDescription}</p>
        </div>
    </div>
  )
}

export default Experience