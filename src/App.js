import "./App.css";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import Info, { Info1 } from "./Info.js"; //imports default and non default
import SearchBar from "./SearchBar.js";
import Test from "./Class.js";
import AddItem from "./AddItem.js";
import ItemsDisplay from "./ItemsDisplay.js";

function App() {
	const [filters, setFilters] = useState({});
	const [data, setData] = useState({ items: [] });
	const [showTest, setShowTest] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3000/items")
			.then((response) => response.json())
			.then((data) => setData({ items: data }));
	}, []);

	const updateFilters = (searchParams) => {
		setFilters(searchParams);
	};

	const deleteItem = (item) => {
		const items = data["items"];
		const requestOptions = {
			method: "DELETE",
		};
		fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then((response) => {
			if (response.ok) {
				console.log("dsddddddddddddddddddd");
				const idx = items.indexOf(item);
				items.splice(idx, 1);
				setData({ items: items });
			}
		});
	};

	const AddItemToData = (item) => {
		let items = data["items"];
		item.id = items.length;

		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(item),
		};
		fetch("http://localhost:3000/items", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				items.push(data);
				setData({ items: items });
			});
	};

	const filterData = (data) => {
		const filteredData = [];

		if (!filters.name) {
			return data;
		}

		for (const item of data) {
			if (filters.name !== "" && item.name !== filters.name) {
				continue;
			}
			if (filters.price !== 0 && item.price > filters.price) {
				continue;
			}
			if (filters.type !== "" && item.type !== filters.type) {
				continue;
			}
			if (filters.brand !== "" && item.brand !== filters.brand) {
				continue;
			}
			filteredData.push(item);
		}

		return filteredData;
	};

	return (
		<div className="App">
			{showTest ? <Test destroy={setShowTest} /> : null}
			<Info1 />
			<br />
			<SearchBar updateSearchParams={updateFilters} />
			<p>Name: {"name" in filters ? filters["name"] : "No Data to display"}</p>
			<p>Max Price: {"price" in filters ? filters["price"] : "No Data to display"}</p>
			<p>Type: {"type" in filters ? filters["type"] : "No Data to display"}</p>
			<p>Brand: {"brand" in filters ? filters["brand"] : "No Data to display"}</p>
			<br />
			<br />
			<AddItem addItem={AddItemToData} />
			<br />
			<br />
			<ItemsDisplay deleteItem={deleteItem} items={filterData(data["items"])} />
			<br />
			<br />
			<Info title="Inventory Management" />
			<br />
			<br />
			<ButtonState />
			<br />
			<br />
			<AddItem2 text="Shiv" number={14} />
			<br />
			<AddItem2 />
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

function AddItem2(props) {
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
AddItem2.defaultProps = {
	number: 2,
	text: "<-------->",
};

//defines default datatypes for props
AddItem2.propTypes = {
	number: PropTypes.number,
};

export default App;
