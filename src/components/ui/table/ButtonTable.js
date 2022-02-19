import React from 'react'
import { NavLink } from 'react-router-dom'
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
    id
}) => {

    const buttonGenerator = () => {
        switch (type) {
            case 0:
                return (
                    <button className="btn btnTable btnBlue" onClick={(data) => onClick(data)}> <span>{title}</span> <i className="fas fa-eye"> </i> </button>
                )
            case 1:
                return (
                    <button className="btn btnTable btnBlue" onClick={() => onClick(id)}> <span>{title}</span> <i className="fas fa-edit"></i> </button>
                )
            

            default:
                return (
                    <></>
                )
        }
    }
    return (buttonGenerator())
}
