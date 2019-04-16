import React, { Component } from 'react';
// import DatePicker from 'react-date-picker';
import DatePicker from 'react-datepicker';

import swal from 'sweetalert';
import moment from 'moment'
import './SelectAreas.css'
// import './SelectArea.scss'



class SelectArea3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: new Date(),
      date: '',
      startTime:new Date(),
      endTime:'',
      form:true,
    }
  }
  // hundleChange=(e)=>{
  //   this.setState({
  //     [e.target.id]:e.target.value,
  //   })
  // }

  selectSlot=()=>{
    // console.log("date........>",year)
    const {date,startTime,endTime } = this.state;
    // if(!date){
    //   swal("Insert Date");
    // }
    //  if(startTime){
    //   alert('date ===='+startTime)
    // }else{
    //  console.log("date........>",date)
    // }
    // else if(!startTime){
    //   alert("Insert Time ")
    // }
    // else if(!endTime){
    //   alert("Insert End Time ")
    // }
    // else{
    //   alert("Data save ")
    // }
    // this.setState({form:true})
  }

FormSlot(){
    return(
      <center>
      <h1 className="h1">Block 1</h1>
      <div className="block_Area">
          <label>Select Date:</label>
          <input type="date" id="date" onChange={this.hundleChange}  className="date-picker" formTarget="MM/DD/YYYY"/>
          <label>Start Time:</label>
          <input type="time" id="startTime"onChange={this.hundleChangeST} className="DatePicker" />
          <label>End Time:</label>
          <input type="time" id="endTime"onChange={this.hundleChangeET} className="DatePicker" />
      </div>
      <div>
        <button onClick={this.selectSlot.bind(this)} className="slot_btn">Select Slot</button>
      </div>
    </center>
      )
}
SelectSlot(){
  return(
    <div className="SelectSlot">
    <center>
      <h1>Select Slote</h1>
      <div>
        <table className="table1">
          <tr className="table1-row">
            <button>slot 1</button>
            <button>slot 2</button>
            <button>slot 3</button>
          </tr>
          <tr className="table1-row">
            <button>slot 4</button>
            <button>slot 5</button>
            <button>slot 6</button>
          </tr>
        </table>
      </div>
    </center>
    </div>
  )
}
  render() {
    console.log("date====>---------------:)",this.state.date)
    // console.log("====+++++++++++++++++",moment(Date.now()).format('LLLL'))
    console.log("startTime====>",this.state.startTime)
    console.log("endTime====>",this.state.endTime)
    return (
      <div className="Parking">
      <div className="select_Area">
      {
        this.FormSlot()
      }
      {
        this.state.form ===true ?this.SelectSlot()  :null
      }
         
      </div>
    </div>
    );
  }
}

export default SelectArea3;
