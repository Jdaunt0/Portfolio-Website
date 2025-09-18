import React from 'react'
import './Experience.css';
import SampleAssistLogo from '../../../assets/SA_Logo.png';
import BCITLogo from '../../../assets/BCIT_Logo.png';
import UOWLogo from '../../../assets/UOW_Logo.png';

const Experience = () => {
  return (
    <div className='container'>
        <h2>Experience</h2><hr/><br/>
        <table className='work-experience'>
            <tbody>
                <tr className="row">
                    <th><img src={UOWLogo}/></th>
                    <td>
                        <h3>University of Wollongong</h3>
                        <p>Bachelor of Computer Science</p>
                        <p>2022-2025</p>
                    </td>
                </tr>
                <tr>
                    <th> <img src={SampleAssistLogo}/></th>
                    <td>
                        <h3>Sample Assist</h3>
                        <p>Junior Software Engineer - Internship</p>
                        <p>2/24 - 11/24</p>
                    </td>
                </tr>
                <tr className="row">
                    <td colSpan="2">
                        <p>Researched back-end migration strategies for a production medical app transitioning from Firebase to AWS. I later led a team of 4 interns in designing and developing new product prototype, a React-based dashboard that displayed DevOps performance metrics using AWS and GitHub REST APIs. This internship doubled as my major university project, integrating real-world development with academic requirements.</p>
                    </td>
                </tr>
                <tr>
                    <th><img src={BCITLogo}/></th>
                    <td>
                        <h3>BCIT Solutions</h3>
                        <p>Web Developer - Contractor</p>
                        <p>2/25 - current</p>
                    </td>
                </tr>
                <tr className="row">
                    <td colSpan="2">
                        <p>I currently work for BCIT as a website developer and tecnical support, I manage and conduct meetings with potential new clients. Build and maintain websites, and offer technical support</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Experience