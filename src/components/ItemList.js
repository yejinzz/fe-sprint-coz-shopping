import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item'; 
import { styled } from 'styled-components';


const ProductList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin: 0 70px;
`;




function ItemList () {

const [itemData, setItemData] = useState([]);

    useEffect(() => {
        axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
        .then(res => setItemData(res.data))
        .catch(err => console.error(err));
        
    }, []);


    return(
            <ProductList>
                {itemData.slice(0, 4).map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ProductList>
    )

}
export default ItemList;