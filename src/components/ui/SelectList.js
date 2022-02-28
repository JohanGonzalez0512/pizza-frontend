import { useState } from "react"

export const SelectList = ({ item, setItem, items }) => {


    const [dispItems, setDispItems] = useState(items);
    const [searchItem, setSearchItem] = useState('');

    const handleOnChange = e => {

        const tempSearch = e.target.value;
        setSearchItem(tempSearch);

        if (!tempSearch.length) {
            setDispItems(items);
            return;
        }

        const tempDocuments = items.filter(({ name }) => name.toLowerCase().includes(tempSearch.toLowerCase()))

        setDispItems(tempDocuments);

    }

    return (
        <div className="select-list">
            <h3 className="select-list__title">
                Tipo de categoria
            </h3>
            <div className="select-list__input">
                <input type="text" value={searchItem} onChange={handleOnChange} />
            </div>
            <div className="select-list__list scroll">
                {
                    dispItems.map(item => (
                        <div
                            key={item.id}
                            onClick={e => setItem(item)}
                            className="item">
                            <p>{`${item.name}`}</p>
                        </div>
                    ))
                }
            </div>
            {
                item.name && (
                    <p className="select-list__chosen">
                        {`${item.name}`}
                    </p>
                )
            }
        </div>
    )
}
