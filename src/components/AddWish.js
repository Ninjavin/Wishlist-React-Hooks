import axios from 'axios';
import { useContext, useState } from 'react';
import { WishContext } from '../WishContext';

function AddWish() {
	const [wishlist, setWishlist] = useContext(WishContext);
	const [wish, setWish] = useState("");
	const [link, setLink] = useState("");

	const updateWish = (e) => {
		setWish(e.target.value);
	}

	const updateLink = (e) => {
		setLink(e.target.value);
	}

	function getAllWish() {
		axios.get('https://5ff1b13ddb1158001748b4b2.mockapi.io/wishlist/add')
		.then(res => {
			setWishlist(res.data);
		})
	}

	const addWishToAPI = (e) => {
		e.preventDefault();
		axios.post('https://5ff1b13ddb1158001748b4b2.mockapi.io/wishlist/add', {
			wishItem: wish,
			wishLink: link
		}).then(() => {
			getAllWish();
		}).catch((err) => console.log(err))
	}

	return (
		<div>
			<form onSubmit={addWishToAPI}>
				<input type="text" name="wishitem" value={wish} placeholder="Enter Wishitem" onChange={updateWish} />
				<input type="text" name="wishlink" value={link} placeholder="Link to buy" onChange={updateLink} />
				<button>Add</button>
			</form>
		</div>
	)
}

export default AddWish;