import React from "react";

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		// once when component is first run
	}

	componentDidUpdate() {
		//runs everytime component is rendered
	}

	componentWillUnmount() {
		//called when component is destroyed
	}

	clickedButton() {
		this.setState({
			count: this.state.count + 1,
		});
		console.log("clicked");
		this.props.destroy(false);
	}

	render() {
		return (
			<div>
				<p>Clicked: {this.state.count}</p>
				<button className="btn btn-primary" onClick={() => this.clickedButton()}>
					Click Me!
				</button>
			</div>
		);
	}
}

export default Test;
