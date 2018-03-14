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
			// title={<div><img src = {require('../img/Logo.png')} style = {{width:64,height:64}}/><span>Event Beast</span></div>}
			title = 'Event Beast'
			showMenuIconButton={false}
			iconElementRight={<FlatButton label="About Us" onClick={this.handleOpenDialog} />}>
				<Dialog
					title="About Us"
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
					actions = {<FlatButton label = "Close" primary={true} onClick = {this.handleClose}/>}>
						We are the best - fuck the rest!
				</Dialog>
			</AppBar>
		)
	}
}