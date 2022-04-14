import React from 'react'
/**
    * @description ButtonTable component
    * @param {int} type - type of button
    * @param {function} onClick - function to be called on click
    * @param {string} title - title of button
    * @returns {object} ButtonTable component
    * 
    * @type: 
    * 0 : See. 
    * 1 : Edit.
    * 2 : Delete. 
    * 
 */
export const ButtonTable = ({
    type,
    onClick,
    title = '',
    id,
    id2,
    onClick2,

}) => {

    const buttonGenerator = () => {
        switch (type) {
            case 0:
                return (
                    <button className="btn " onClick={(data) => onClick(data)}> <span>{title}</span> <i className="fas fa-eye"> </i> </button>
                )
            case 1:
                return (
                    <div className='btnTable__container__editDelete'>
                        <button className='btnTable__container edit' onClick={() => onClick(id)} >
                            <svg className="btnTable__container__icon orange">
                                <use href="/sprite.svg#icon-edit"></use>
                            </svg>
                        </button>
                        <button className='btnTable__container delete' onClick={() => onClick2(id)} >
                            <svg className="btnTable__container__icon red">
                                <use href="/sprite.svg#icon-trash"></use>
                            </svg>
                        </button>
                    </div>

                )

                case 2:
                    return (
                        <div className='btnTable__container__editDelete'>    
                            <button className='btnTable__container delete' onClick={() => onClick(id)} >
                                <svg className="btnTable__container__icon red">
                                    <use href="/sprite.svg#icon-trash"></use>
                                </svg>
                            </button>
                        </div>
    
                    )


            default:
                return (
                    <></>
                )
        }
    }
    return (buttonGenerator())
}
