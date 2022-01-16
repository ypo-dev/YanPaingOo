import React from 'react'
import Script from 'next/script'



function Footer() {
    return (

        <div className="footer" >
            <span className="copyRight"
            >Copyright { new Date().getFullYear() } All Rights Reserved</span
            >
            <span className="Developer">Developed by Yan Paing Oo</span>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        </div >
        

    )
}

export default Footer
