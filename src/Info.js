import React from "react";

// class based component with stste
class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			title: "Hello",
		};
	}

	buttonPressed() {
		this.setState({
			count: this.state.count + 1,
		});
	}

	render() {
		return (
			<div>
				<p>Count: {this.state.count}</p>
				<button onClick={() => this.buttonPressed()}>Click Me!</button>
			</div>
		);
	}
}

//functional component
function Info1() {
	const title = "Inventory Management";
	const showTitle = true;

	if (showTitle) {
		return (
			<div>
				<h1>{title}</h1>
				<p>Manage your stuff.</p>
			</div>
		);
	} else {
		return (
			<div>
				<p>showTitle = false</p>
			</div>
		);
	}
}

export default Info;
export { Info1 };
