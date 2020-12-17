import React from 'react'
import '../../App.css'
import './Resume.css'


export default function ResumeInfo() {
    return (
        <>
            <div className='resume'>
                <div className='wrapper'>
                    <h1 className='resume-header'>Madeline Cowell, BS</h1>
                    <p className='resume-text'>madeline.cowell@colorado.edu • 720-985-3982 • www.linkedin.com/in/madeline-cowell</p>
                    <img className='resume-pdf' src='images\Resume.jpg' alt="Resume" />
                </div>
            </div>
        </>
    )
}
