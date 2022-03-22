import React, { useState } from 'react';
import './products.css';
import sun from '../../assets/sun.svg';
import waterIcon from '../../assets/water.svg';
import { plantList } from '../../dataList';

const CareScale = ({type, number}) => {
	let text = [];
	for(let i = 0; i < number; i++) {
		text.push(i)
	}
	
	return (
	<div className="light">
		{text.map(c => <span key={type + c}><img style={{width: '15px'}} src={type} alt="image type"/></span>)}
	</div>
	)
}


const SinglePlant = ({cover, price, name, light, water, onSelect }) => {
	
	function displayState(number, type) {
		let text = [];
		for(let i = 0; i < number; i++) {
			text.push(i)
		}
		return text.map(c => <span key={type + c}><img style={{width: '15px'}} src={type} alt="image type"/></span>)
	}
						
	return (
		<div className="singlePlant">
			<img className="plant-image" src={cover} alt="product"/>
			<div className="price">{price}</div>
			<p className="name">{name}</p>
			{<CareScale type={waterIcon} number={water} />}
			{<CareScale type={sun} number={light} />}
			<button className="btn-add-to-basket" onClick={onSelect} >Ajouter</button>
		</div>		   
   )
	
}
	
const Categories = ({listData, selectCategory, onReset}) => {
	
	const categories = plantList.reduce((acc, plant) => {
		return acc.includes(plant.category) ? acc : acc.concat(plant.category)
	}, []);
	
	return (
		<div className="searchContainer">
			<select name="search-box" id="search-box" onChange={selectCategory}>
				{categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}				
			</select>
			<button className="btn-reset" onClick={onReset}>reinitialiser</button>
		</div>
	)
}


const Products = ({listData, onSelect, selectCategory, onReset}) => {
	
	return (
		
		<section className="main-right-container">
		<Categories selectCategory={selectCategory} onReset={onReset} />
		<div className="products-container">
			{listData.map(plant => <SinglePlant key={plant.id} {...plant} onSelect={onSelect} />)}
		</div>
			
		</section >
	)
}

export default Products;