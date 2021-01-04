import { WishProvider } from "./WishContext";
const { default: AddWish } = require("./components/AddWish");
const { default: WishList } = require("./components/WishList");

function App() {
	return (
		<WishProvider>
			<div style={{ textAlign: "center", marginTop: "50px"}}>
				<AddWish />
				<WishList />
			</div>
		</WishProvider>
	)
}

export default App;