function WishList(props) {
	const wishlist = props.wish;
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