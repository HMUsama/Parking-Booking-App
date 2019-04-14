import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import swal from 'sweetalert';
import moment from 'moment'
import './SelectAreas.css'
import './SelectArea.scss'


class SelectArea1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // date:'',
      date: '',
      startTime:'',
      endTime:'',
      form:true,
    };
  }
  onChange = date => this.setState({ date })
  hundleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value,
    })
  }




  selectSlot=()=>{
    const {date,startTime,endTime } = this.state;
    if(!date){
      swal("Insert Date");
    }
    else if(date === moment(Date.now()).format('LLLL')){
      alert('date ====')
    }
    // else if(!startTime){
    //   alert("Insert Time ")
    // }
    // else if(!endTime){
    //   alert("Insert End Time ")
    // }
    else{
      alert("Data save ")
    }
    // this.setState({form:false})
  }

FormSlot(){
    return(
      <center>
      <h1 className="h1">Block 1</h1>
      <div className="block_Area">
      <label>Select Date:</label>
      {/* <input type="date" id="date" onChange={this.hundleChange}  className="form-control" /> */}
      <DatePicker
          onChange={this.onChange}
          value={this.state.date}
          className="DatePicker" 
        />
      <label>Start Time:</label>
      <input type="time" id="startTime"onChange={this.hundleChange} className="DatePicker" />
      <label>End Time:</label>
      <input type="time" id="endTime"onChange={this.hundleChange} className="DatePicker" />
      </div>
      <div>
        <button onClick={this.selectSlot.bind(this)} className="slot_btn">Select Slot</button>
      
      </div>
    </center>
      )
}
  render() {
    console.log("====>",this.state.date)
    console.log("====+++++++++++++++++",moment(Date.now()).format('LLLL'))
    console.log("====>",this.state.startTime)
    console.log("====>",this.state.endTime)
    return (
      <div className="Parking">
      <div className="select_Area">
      {
        this.state.form ?
        (this.FormSlot()):
        <div>han</div>
      }
         
      </div>
    </div>
    );
  }
}

export default SelectArea1;
