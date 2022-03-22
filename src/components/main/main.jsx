import React, { useState } from 'react';
import './main.css';
import Basket from '../basket/basket';
import Products from '../products/products';
import { plantList } from '../../dataList';
import {getCartItems, setCartItems} from '../../utils';


const Main = () => {
	
	const [listData, setListData] = useState(plantList)
	const [cart, setCart] = useState(getCartItems());
	
	const selectCategory= (e) => {
		const selectedCategory = e.target.options[e.target.selectedIndex].value;
		const newList = plantList.filter(plant => {
			if(selectedCategory === 'default') {
				return plant;
			} else {
				return plant.category === selectedCategory
			}
		})
		setListData(newList);
	}
	
	
	const buildProductCart = (element) => {
		const name = element.querySelector('.name').textContent;
		const price = element.querySelector('.price').textContent;
		const qty = 1;

		const selectedProduct = {name, price, qty};
		let localCart = getCartItems();
		const existItem = localCart.find(item => item.name == selectedProduct.name);
		console.log(existItem)
		if(existItem) {
			localCart.map(item => {
				if(existItem.name === item.name) {

					item.qty++;
					return item;
				} else {
					return item;
				}
			})
		} else {
			localCart.push(selectedProduct);
		}
		
		setCart(localCart);
		setCartItems(localCart);
	}
	
	const handleSelect = (e) => {
		console.log(e.target.parentElement)
		buildProductCart(e.target.parentElement)
	}
	
	const reset = () => {
		setListData(plantList)
	}
	
	function clearBasket () {
		localStorage.clear();
		setCart([]);
		console.log('log something')
	}
	
	return (
		<main>
			<Basket cart={cart} onClearBasket={clearBasket} />
			<Products onSelect={handleSelect} listData={listData} selectCategory={selectCategory} onReset={reset} />
		</main>
	)
}

export default Main;