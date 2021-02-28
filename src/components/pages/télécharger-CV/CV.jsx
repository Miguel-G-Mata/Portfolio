import React from 'react';

require('./_cv.css');

export default function CV() {
    return (
        <>
            <div className="pdf">
                <object className="pdf" data={require('../../../doc/CV-Miguel.pdf')} type="application/pdf" width="100%" height="100%"></object>
            </div>
        </>
    )
}




