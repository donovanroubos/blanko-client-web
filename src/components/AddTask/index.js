import React from 'react'
import { connect } from 'react-redux'

import { addTask } from '../../actions'

class AddTask extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			subTitle: '',
		}
	}

	setInputState = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	addLocalTask = () => {
		this.props.addTask(this.state)
		this.setState({
			title: '',
			subTitle: ''
		})
	}

	render() {
		return  (
			<div>
				<input type="text" id="title" value={this.state.title} onChange={e => this.setInputState(e)}/>
				<input type="text" id="subTitle" value={this.state.subTitle} onChange={e => this.setInputState(e)}/>
				<button onClick={this.addLocalTask}>Add Task</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log({ addtaskState: state })
}

export default connect(mapStateToProps, { addTask })(AddTask)
