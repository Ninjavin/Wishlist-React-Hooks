import { WishProvider } from "./WishContext";
import './App.css';

const { default: AddWish } = require("./components/AddWish");
const { default: WishList } = require("./components/WishList");

function App() {
	return (
		<WishProvider>
			<div className="app-class">
				<AddWish />
				<WishList />
			</div>
		</WishProvider>
	)
}

export default App;