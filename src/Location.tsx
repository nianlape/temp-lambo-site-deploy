import './Location.css'
import './SectionDivider.css'
import './Lines.css'

import { NewSectionDivider } from './Helpers.tsx' 

function WorkDayHours(weekDay: string, startHour: number, endHour: number) {
    return (
        <>
            
            <div className="service-line" />
            <div className="workdayhours-container">
                <span>
                    {weekDay}
                </span>
                <span>
                    {startHour}:00 - {endHour}:00
                </span>
            </div>
        </>
    
    )
}

function Location() {
  return (
        <>  
            {NewSectionDivider(["Location", "43 Rue de la Station, H7L 3T2, Laval, QC"])}
            <div className="location-container">
               
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5583.97770157662!2d-73.71964046475976!3d45.59076887206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc92175d4f51221%3A0xbfe5cc7868514a59!2s43%20Rue%20de%20la%20Station%2C%20Laval%2C%20QC%20H7M%201P2!5e0!3m2!1sen!2sca!4v1722857746398!5m2!1sen!2sca" 
						allowFullScreen 
						loading="lazy" 
						referrerPolicy="no-referrer-when-downgrade">
				</iframe>
                
                <div className="location-bento">
                    <span className="workhours-text">Working Hours</span>
                    {WorkDayHours("Monday", 9, 17)}
                    {WorkDayHours("Tuesday", 9, 17)}
                    {WorkDayHours("Wednesday", 9, 17)}
                    {WorkDayHours("Thursday", 9, 17)}
                    {WorkDayHours("Friday", 9, 17)}
                </div> 

            </div>
        </>
    
    )
}

export default Location
