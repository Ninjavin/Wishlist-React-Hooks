import axios from 'axios';
import { useState } from 'react';

function AddWish() {

	const [wish, setWish] = useState("");
	const [link, setLink] = useState("");

	const addWishToAPI = (wish, link) => {
		axios.post('https://5ff1b13ddb1158001748b4b2.mockapi.io/wishlist/add', {
			wishItem: wish,
			wishLink: link
		}).then((res) => console.log(res))
			.catch((err) => console.log(err))
	}

	return (
		<div>
			<input type="text" placeholder="Enter Wishitem" onChange={(value) => setWish(value)} style={{ marginRight: "20px" }} />
			<input type="text" placeholder="Link to buy" onChange={(value) => setLink(value)} style={{ marginRight: "20px" }} />
			<button type="submit" onClick={() => addWishToAPI(wish.target.value, link.target.value)} >Add</button>
		</div>
	)
}

export default AddWish;