import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormContact extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

      
  state={
    profilePic:'https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png',
       
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({pic1: reader.result});
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }; 
    render() {
        const { values, handleChange } = this.props;
        return (
            <div style={{marginLeft:550}}>
                  <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              
            />
            <br />
                 <TextField
              placeholder="Enter Your Number"
              label="Number"
              onChange={handleChange('Number')}
              defaultValue={values.Number}
              
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              style={{width:250}}
            />
            <br />
            <TextField
              placeholder="Enter Your Location"
              label="Location"
              onChange={handleChange('Location')}
              defaultValue={values.Location}
              margin="normal"
              style={{width:250}}
            />
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
            >Continue</Button>
            </div>
        )
    }
}

export default FormContact
