import React from 'react'

export const SearchBar = ({ placeholder, setValueSearchFilter, searchWord }) => {
    const handleInputChange = ({ target }) => {
        setValueSearchFilter(prev => ({ ...prev, searchWord: target.value }));
    }
    return (
        <div className='search__container'>
            <input type='search__container__input' value={searchWord} onChange={handleInputChange} placeholder={placeholder} />
            <svg className="search__container__icon">
                <use href="/sprite.svg#icon-search"></use>
            </svg>

        </div>
    )
}
