import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wizards.css";
import cancel_icon from './../../newImages/cancel_icon.svg'
import rightarrow_icon from './../../newImages/rightarrow_icon.svg'
import leftarrow_icon from './../../newImages/leftarrow_icon.svg'
import { storage } from '../../Firebase/index';
import add_image_icon from '../../Images/add_image_icon.svg';
import { updateWizPicOne, updateWizPicTwo, updateWizPicThree, updateWizPicFour } from '../../../ducks/reducer';
import { connect } from 'react-redux';

class Wizard5 extends Component {

  handleCarPic(e, picNum) {
    if (e.target.files[0]) {
      const car_pic = e.target.files[0];
      const uploadTask = storage.ref(`main_images/${car_pic.name}`).put(car_pic);
      uploadTask.on('state_changed',
        () => {
          storage.ref('main_images').child(car_pic.name).getDownloadURL().then(url => {
            if (picNum === 1) {
              this.props.updateWizPicOne(url)

            } else if (picNum === 2) {
              this.props.updateWizPicTwo(url)
            } else if (picNum === 3) {
              this.props.updateWizPicThree(url)
            } else {
              this.props.updateWizPicFour(url)
            }

          })
        });
    }
  }


  render() {
    // console.log(this.props.picOne)
    // console.log(this.props.picTwo)
    // console.log(this.props.picThree)
    // console.log(this.props.picFour)
    return (
      <div className = "reset">
        <div className="wizard5">

          <h1>Add Pictures</h1>
          <br />

          <img src={this.props.picOne} alt='' style={{ width: "300px" }} />
          <img src={this.props.picTwo} alt='' style={{ width: "300px" }} />
          <img src={this.props.picThree} alt='' style={{ width: "300px" }} />
          <img src={this.props.picFour} alt='' style={{ width: "300px" }} />


          <div>
            <label htmlFor='picture_input1'>
              <img src={add_image_icon} alt='' style={{ height: '150px' }} />
            </label>
            <input type='file' id='picture_input1' onChange={(e) => { this.handleCarPic(e, 1) }} style={{ display: 'none' }} />
          </div>

          <div>
            <label htmlFor='picture_input2'>
              <img src={add_image_icon} alt='' style={{ height: '150px' }} />
            </label>
            <input type='file' id='picture_input2' onChange={(e) => { this.handleCarPic(e, 2 )}} style={{ display: 'none' }} />
          </div>

          <div>
            <label htmlFor='picture_input3'>
              <img src={add_image_icon} alt='' style={{ height: '150px' }} />
            </label>
            <input type='file' id='picture_input3' onChange={(e) => { this.handleCarPic(e, 3) }} style={{ display: 'none' }} />
          </div>

          <div>
            <label htmlFor='picture_input4'>
              <img src={add_image_icon} alt='' style={{ height: '150px' }} />
            </label>
            <input type='file' id='picture_input4' onChange={(e) => { this.handleCarPic(e, 4) }} style={{ display: 'none' }} />
          </div>



          <div className='nav'>
            <Link to="/wizard4">
              <img className='wizardnav' alt="" src={leftarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/search">
              <img className='wizardnav' alt="" src={cancel_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/wizard6">
              <img className='wizardnav' alt="" src={rightarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { picOne, picTwo, picThree, picFour } = state;
  return {
    picOne: picOne,
    picTwo: picTwo,
    picThree: picThree,
    picFour: picFour
  }
}

export default connect(mapStateToProps, { updateWizPicOne, updateWizPicTwo, updateWizPicThree, updateWizPicFour })(Wizard5);