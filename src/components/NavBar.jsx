import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

export default class Nav extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false,
		}
	}
	handleOpenDialog = ()=>this.setState({open: true});
	handleClose=()=>this.setState({open: false});
	render(){
		return(
			<AppBar
			title="Event Beast"
			iconElementRight={<FlatButton label="About Us" onClick={this.handleOpenDialog} />}>
				<Dialog
					title="About Us"
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}>
						We are the best - fuck the rest!
						<FlatButton label = "Close" onClick = {this.handleClose}/>
				</Dialog>
			</AppBar>
		)
	}
}