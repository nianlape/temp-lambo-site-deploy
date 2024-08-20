import './Pricing.css'
import './SectionDivider.css'
import './Lines.css'

import { NewSectionDivider } from './Helpers.tsx'

function Service(service: string, price: number) {
    return (
        <>
            
            <div className="service-line" />
            <div className="service-container">
                <span>
                    {service}
                </span>
                <span>
                    from ${price}
                </span>
            </div>
        </>
    
    )
}

function Pricing() {
  
  return (
    <>
        
        {NewSectionDivider(["Pricing (CAD)"])}
        <div className="pricing-container">
            
            <div className="pricing-bento">
                <span className="service-category-text top">Maintenance</span>
                {Service("Oil changes", 999)}
                {Service("Tire changes", 999)}
                {Service("Breaks", 999)}
                {Service("Injection system", 999)}
                {Service("Tune up", 999)}
            </div>            
            
            <div className="pricing-bento">
                <span className="service-category-text">Repairs</span>
                {Service("Oil changes", 999)}
                {Service("Tire changes", 999)}
                {Service("Breaks", 999)}
                {Service("Injection system", 999)}
                {Service("Tune up", 999)}
            </div>

             <div className="pricing-bento">
                <span className="service-category-text bottom">Aesthetics</span>
                {Service("Oil changes", 999)}
                {Service("Tire changes", 999)}
                {Service("Breaks", 999)}
                {Service("Injection system", 999)}
                {Service("Tune up", 999)}
            </div>

        </div>
    </>
  )
}

export default Pricing
