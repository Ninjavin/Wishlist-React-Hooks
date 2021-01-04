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

	const [wish, setWish] = useState("");
	const [link, setLink] = useState("");
	const [wishlist, setWishlist] = useState([]);

	return(
		<WishContext.Provider value={ {value1: [wish, setWish], value2: [link, setLink], value3: [wishlist,setWishlist]} }>
			{props.children}
		</WishContext.Provider>
	)
}