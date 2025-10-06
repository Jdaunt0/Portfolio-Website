import React, { useState } from 'react'
import { useMediaQuery } from '@mui/material';
import style from './Experience.module.scss'
import SampleAssistLogo from '../../../assets/SA_Logo.png'
import BCITLogo from '../../../assets/BCIT_Logo.png'
import UOWLogo from '../../../assets/UOW_Logo.png'
import { workExperience } from './data.jsx'

 
const Experience = () => {
  const [selectedDescription, setSelectedDescription] = useState(workExperience[0]?.description || '← click one of the roles to read about what I did during my time there.');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:1000px)');
  const handleRowClick = (item, index) => {
    setSelectedDescription(item.description);
    setSelectedIndex(index);
  };
  return (
    <div id="experience" className={style.experience}>
        <table className={style.workExperience}>
            <tbody>
                <tr>
                    <th><h2>Roles:</h2></th>
                </tr>
                {workExperience.map( (item, i) => {
                    return ( 
                        <tr 
                            className={`${style.row} ${selectedIndex === i ? style.selected : ''}`} 
                            key={`header-${i}`} 
                            onClick={() => handleRowClick(item, i)}
                        >
                            <th><img src={item.logo}/></th>
                            {!isSmallScreen && (
                                <td>
                                    <h3>{item.organisation}</h3>
                                    <p>{item.title}</p>
                                    <p>{item.subtitle}</p>
                                </td>
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className={style.content}>
            <h2>Description:</h2>
            <p>{selectedDescription}</p>
        </div>
    </div>
  )
}

export default Experience