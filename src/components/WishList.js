import { useContext } from 'react';
import { WishContext } from '../WishContext';
import axios from 'axios';
import './WishList.css';

function WishList() {

	function getAllWish() {
		axios.get('https://5ff1b13ddb1158001748b4b2.mockapi.io/wishlist/add')
		.then(res => {
			setWishlist(res.data);
		})
	}

	function deleteWish(i) {
		axios.delete(`https://5ff1b13ddb1158001748b4b2.mockapi.io/wishlist/add/${i}`).then(res => {
			console.log(res);
			getAllWish();
		}).catch(err => console.log(err)); 
	}

	const [wishlist, setWishlist] = useContext(WishContext);
	
	return (
		<div className="wishlist">
			<h3 className="wishlist-head">Your Wishlist</h3>
			<ul className="wishlist-ul">
				{wishlist.map((w, i) => {
					return (
						<li className="wishlist-li" key={i}>
							<a href={w.wishLink}>{w.wishItem}</a>
							<span>
								<button className="delete-wish" onClick={() => deleteWish(w.id)}>Delete</button>
							</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default WishList;