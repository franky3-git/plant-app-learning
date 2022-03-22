import React, { useState, useEffect } from 'react';
import './basket.css';
//import { getCartItems, setCartItems } from '../../utils';


const Item = ({name, qty, price}) => {
	return (
		<li className="selected-product"><span className="qty">{qty}</span> <span className="name">{name} </span><span className="price">{price * qty}</span></li>
	)
}

const SectionBasket = ({ clearBasket, onClose, cart }) => {
	

	const total = cart.reduce((acc, item) => {
		return acc + (parseInt(item.price) * parseInt(item.qty));
	}, 0)
	
	
	useEffect(() => {
		document.title = `${total}€ à payer 💸`
	}, [total])
	
	return (
		<section className="basket ">
			<div className="btn-close-div">
				<button className="close-basket-btn" onClick={onClose}>Fermer</button>
			</div>
			<h2>panier</h2>
			<ul className="basket-list">
				{cart.map(element => <Item key={element.price} {...element}></Item>)}
			</ul>
			{cart.length !== 0 && <h2>total: <span className="total-basket-price">{total}</span></h2>}
			{cart.length == 0? <p className='center'>Votre panier est vide</p> : <button className="clear-basket-btn" onClick={clearBasket} >vider le panier</button>}
		</section>
	)
}


const Basket = ({cart, onClearBasket}) => {
	const [showBasket, setShowBasket] = useState(true);
	
	const openCloseBasket = () => {
		setShowBasket(!showBasket)
	}
	
	return (
		<div className="basket-container">
			
			{!showBasket ? <div className="center"><button className="open-basket-btn" onClick={openCloseBasket} >Ouvrir le panier</button></div> : <SectionBasket onClose={openCloseBasket} cart={cart} clearBasket={onClearBasket} />}
		</div>
	)
}

export default Basket;