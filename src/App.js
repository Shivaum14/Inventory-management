import "./App.css";
import { PropTypes } from "prop-types";
import { useState } from "react";
import Info, { Info1 } from "./Info.js"; //imports default and non default
import SearchBar from "./SearchBar.js";

function App() {
	const [data, setData] = useState({});

	const updateData = (searchParams) => {
		setData(searchParams);
	};
	return (
		<div className="App">
			<Info1 />
			<br />
			<SearchBar callback={updateData} />
			<p>Name: {"name" in data ? data["name"] : "No Data to display"}</p>
			<p>Max Price: {"price" in data ? data["price"] : "No Data to display"}</p>
			<p>Type: {"type" in data ? data["type"] : "No Data to display"}</p>
			<p>Brand: {"brand" in data ? data["brand"] : "No Data to display"}</p>
			<br />
			<br />
			<Info title="Inventory Management" />
			<br />
			<br />
			<ButtonState />
			<br />
			<br />
			<AddItem text="Shiv" number={14} />
			<br />
			<AddItem />
			<br />
			<br />
		</div>
	);
}
function ButtonState() {
	const [title, setTitle] = useState("base title");
	const [count, setCount] = useState(0);

	const updateTitleClicked = () => {
		setTitle(title + "!");
	};
	const updateCountClicked = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<Data title={title} count={count} />
			<button onClick={updateTitleClicked}>Update Title</button>
			<button onClick={updateCountClicked}>Update Counter</button>
		</div>
	);
}

function Data(props) {
	return (
		<div>
			<p>Title: {props.title}</p>
			<p>Count: {props.count}</p>
		</div>
	);
}

function AddItem(props) {
	const value = props.text;
	return (
		<form>
			<label htmlFor="text-form">Type something: </label>
			<input type="text" defaultValue={value} id="text-form" />
			<p>{props.number}</p>
		</form>
	);
}

//defines default props
AddItem.defaultProps = {
	number: 2,
	text: "<-------->",
};

//defines default datatypes for props
AddItem.propTypes = {
	number: PropTypes.number,
};

export default App;
