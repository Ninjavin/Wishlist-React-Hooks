import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const WishContext = createContext();

export const WishProvider = (props) => {

	function getAllWish() {
		axios.get('https://5ff1b13ddb1158001748b4b2.mockapi.io/wishlist/add')
		.then(res => {
			setWishlist(res.data);
		})
	}

	useEffect(() => {
		getAllWish();
	}, [])

	const [wishlist, setWishlist] = useState([]);

	return(
		<WishContext.Provider value={[wishlist, setWishlist]}>
			{props.children}
		</WishContext.Provider>
	)
}