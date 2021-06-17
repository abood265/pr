import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  state={
    profilePic:'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profilePic: reader.result});
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };


  render() {
    const { values, handleChange } = this.props;
    const { profilePic} = this.state

    return (
      <div style={{marginLeft:550}}>
   
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              style={{width:250}}
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              style={{width:250}}
            />
            <br />
            <TextField
              placeholder="Enter Your field"
              label="field"
              onChange={handleChange('field')}
              defaultValue={values.field}
              margin="normal"
              style={{width:250}}
            />
            <br />
            <TextField
              placeholder="Enter Your Gender"
              label="Gender"
              onChange={handleChange('Gender')}
              defaultValue={values.Gender}
              margin="normal"
              style={{width:250}}
            />
            <br />
            <h4>Profile picture</h4>
            <img src={profilePic} alt="" style={{width:200,margin:10}}/>
            <br/>
            <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
            <br/><br/>

         
            <Button
               color="primary"
               variant="contained"
              onClick={this.continue}
            >Continue</Button>
     <br/>
      </div>
    );
  }
}

export default FormUserDetails;
