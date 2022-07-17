import React from "react";

// class based component
class Info extends React.Component {
	render() {
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
}

/*
//functional component
function Info() {
	const title = "Inventory Management";
	const showTitle = true;

	if(showTitle){
		return(
			<div>
				<h1>{title}</h1>
				<p>Manage your stuff.</p>
			</div>
		);

	} else{
		return(
			<div>
				<p>showTitle = false</p>
			</div>
		)
	}

}
*/

export default Info;
