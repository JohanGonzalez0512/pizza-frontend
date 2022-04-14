import React from 'react'

export const Modal = ({ Component }) => {
    return (
        <div className='modal'>
            <div className="modal__filter scroll">
                <div className="modal__filter__component">
                    <Component />
                </div>
            </div>
        </div>
    )
}
