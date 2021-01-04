import axios from 'axios';
import { useContext } from 'react';
import { WishContext } from '../WishContext';

function AddWish() {
	const { value1, value2, value3 } = useContext(WishContext);
	const [wish, setWish] = value1;
	const [link, setLink] = value2;
	const [wishlist, setWishlist] = value3;

	function getAllWish() {
		axios.get('https://5ff1b13ddb1158001748b4b2.mockapi.io/wishlist/add')
		.then(res => {
			setWishlist(res.data);
		})
	}

	const addWishToAPI = (wish, link) => {
		axios.post('https://5ff1b13ddb1158001748b4b2.mockapi.io/wishlist/add', {
			wishItem: wish,
			wishLink: link
		}).then((res) => {
			getAllWish();
		}).catch((err) => console.log(err))
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