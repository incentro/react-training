import React from 'react';

class Add extends React.Component {
	constructor(){
		super();

		this.state = {
			placeholder : 'Voeg u todo toe',
			value : ''
		}

		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleBlur(event){
		let value = event.currentTarget.value;
		this.props.addTodo(value);

		this.setState({
			value: '' 
		});
	}
	handleChange(event){
		this.setState({
			value : event.currentTarget.value 
		});
	}
	render() {
		return (
			<input placeholder={this.state.placeholder} 
			onBlur={this.handleBlur} 
			onChange={this.handleChange}
			value={this.state.value}
			defaultValue={this.state.value}/>
		);

	}
}

export default Add;
