import { useContext } from 'react';
import { WishContext } from '../WishContext';

function WishList() {

	const [wishlist, setWishlist] = useContext(WishContext);
	
	return (
		<div>
			<h3>Your Wishlist</h3>
			<ul style={{ listStyleType: "none" }}>
				{wishlist.map((w, i) => {
					return (
						<li key={i}><a href={w.wishLink}>{w.wishItem}</a></li>
					)
				})}
			</ul>
		</div>
	)
}

export default WishList;