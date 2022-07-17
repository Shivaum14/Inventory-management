import "./App.css";
import Info from "./Info.js";

function App() {
	return (
		<div className="App">
			<Info />
			<Additem />
			<Additem />
			<Additem />
		</div>
	);
}

function Additem() {
	const value = " DEFAULT ";
	return (
		<form>
			<label for="text-form">Type something: </label>
			<input type="text" value={value} id="text-form" />
		</form>
	);
}

export default App;
