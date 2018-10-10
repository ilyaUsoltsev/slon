import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer style={{background:'#EE3F1F'}}>
            <Fade>
                <div style={{fontFamily:"Caveat"}}>
                    Crumpled Elefant defends BeerPop
                </div>
                <div className="footer_copyright">
                    by Ilya Usoltsev
                </div>

            </Fade>
            
        </footer>
    );
};

export default Footer;