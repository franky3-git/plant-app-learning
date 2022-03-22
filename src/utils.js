export const capitalizeFirstLetter = (text) => {
		return text[0].toUpperCase() + text.slice(1);
	}

export const getCartItems = () => {
	return JSON.parse(localStorage.getItem('cart')) || [];
}

export const setCartItems = (cart) => {
	localStorage.setItem('cart', JSON.stringify(cart));
}