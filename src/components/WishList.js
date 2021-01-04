import { useContext } from 'react';
import { WishContext } from '../WishContext';

function WishList() {

	const { value3 } = useContext(WishContext);

	const [wishlist, setWishlist] = value3;
	
	return (
		<div>
			<h3>Your Wishlist</h3>
			<ul>
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