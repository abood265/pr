import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  state={
    pic1:'https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png',
    pic2:'https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png',                                     
    pic3:'https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png'        
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

  imageHandler2 = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({pic2: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  imageHandler3 = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({pic3: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  render() {
    const { values, handleChange } = this.props;
    const { pic1,pic2,pic3} = this.state

    return (
      <div style={{marginLeft:530}}>
          
            <TextField
              placeholder="Enter Your Experience in your field"
              label="Experience"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              style={{width:'300px'}}
              
            />
            <br />
            <h3>images of your work</h3>

            <div style={{marginLeft:-230}}>
            <img src={pic1} alt="" style={{width:200,margin:10}}/>
            <img src={pic2} alt="" style={{width:200}}/>
            <img src={pic3} alt="" style={{width:200,margin:10}}/>
            <br/><br/>
            <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
            <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler2} />
            <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler3} />
            </div>
            <br/><br/>

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
    );
  }
}

export default FormPersonalDetails;
