import './Lines.css'
import './SectionDivider.css'

import { useState, useEffect } from 'react';

export function GetScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export function Line(width: number) {
    if (width >= 768) {
        return (<div className="line" />)
    }
    else return null
}

export function NewSectionDivider(textArray: string[]) {
    
    const width = GetScreenWidth()
    
    if (width >= 768 && textArray.length > 0) {
        return (
            <div className="section-divider-container">
                {textArray.map((text, index) => (
                    <div 
                        key={index} 
                        className="section-title-box"
                        style = {{
                            background: index % 2 === 0 
                                ? 'linear-gradient(to right, #121212, #303030)' 
                                : 'linear-gradient(to left, #121212, #303030)'
                        }}
                        >{text}
                    </div>
                ))}
                <div className="section-divider-line" />
            </div>

        )
    } 

    else return (
            <div className="section-divider-container">
                {textArray.map((text, index) => (
                    <div 
                        key={index} 
                        className="section-title-box"
                        >{text}
                    </div>
                ))}
            </div> 
    );
}
