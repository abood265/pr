import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio ,Number,Location,Gender}
    } = this.props;
    return (
      <div style={{marginLeft:550}}>

            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Number" secondary={Number} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Location" secondary={Location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" secondary={Gender} />
              </ListItem>
            </List>
            <br />
            
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              style={{marginRight:10}}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            
            >Confirm & Continue</Button>

      </div>
    );
  }
}

export default Confirm;
