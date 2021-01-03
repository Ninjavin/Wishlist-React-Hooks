// We will be using functional components everywhere
import axios from "axios";
import { useState, useEffect } from 'react';
const { default: AddWish } = require("./components/AddWish");
const { default: WishList } = require("./components/WishList");

function App() {
	const [wishlist, setWishlist] = useState([]);

	function getAllWish() {
		axios.get('https://5ff1b13ddb1158001748b4b2.mockapi.io/wishlist/add')
		.then(res => {
			setWishlist(res.data);
		})
	}

	useEffect(() => {
		getAllWish();
	}, [])

	return (
		<div style={{ textAlign: "center", marginTop: "50px"}}>
			<AddWish />
			<WishList wish={wishlist} />
		</div>
	)
}

export default App;