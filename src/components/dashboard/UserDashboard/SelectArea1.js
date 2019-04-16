import React, { Component } from 'react';

import swal from 'sweetalert';
import moment from 'moment'
import './SelectAreas.css'
// import './SelectArea.scss'



class SelectArea1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      startTime:new Date(),
      endTime:'',
      form:false,
    }
  }
// Date
  hundleDate=(id)=> {
    const newDate = id.target.value;
    const newdate = moment(newDate).format('L');
    console.log("NOEW DATE",moment(newdate).format('L'))
    this.setState({date:newdate})
}
// Start Time
  hundleTime=(id)=>{
  const Time = id.target.value;
  console.log("Time-----",Time)
  this.setState({startTime:Time})
}


  selectSlot=()=>{
    const {date,startTime,endTime } = this.state;

    const currentDate = new Date();
    // Date 
    const Current_Date =moment(currentDate).format('L')
    console.log("CURRENT DATE",Current_Date)

    // Time
    const sTime = moment(startTime).format('LT')
    console.log("START TIME",sTime)
    const n = currentDate.getTime(startTime)
    const Current_TIME =moment(n).format('LT')
    console.log("TIME",Current_TIME)

    if(date >=Current_Date){
      swal(" Date Correct");
      // this.setState({form:true})
    }else{
      swal(" Date Should be Grater then Current Date and Future");
      // this.setState({form:false})
    }
    // if(startTime >=Current_TIME){
    //   swal(" TIME Correct");
    // }else{
    //   swal(" TIME Should be Grater then Current TIME");
    // }
    // this.setState({form:true})
  }


submit(e){
  console.log("SUBMIT",e.target.value)
}


FormSlot(){
    return(
      <center>
      <h1 className="h1">Block 1</h1>
      <div className="block_Area">
          <label>Select Date:</label>

          <input type="date" id="date" onChange={this.hundleDate.bind(this.id)} />


          <label>Start Time:</label>
          <input type="time" id="startTime" onChange={this.hundleTime.bind(this.id)} className="DatePicker" />
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
          <center>
            <button className="row1"value="1" onClick={this.submit}>slot 1</button>
            <button className="row1"value="2" onClick={this.submit}>slot 2</button>
            <button className="row1"value="3" onClick={this.submit}>slot 3</button>
          </center>
          </tr>
          <tr className="row1">
            <button className="row1"value="4" onClick={this.submit}>slot 4</button>
            <button className="row1"value="5" onClick={this.submit}>slot 5</button>
            <button className="row1"value="6" onClick={this.submit}>slot 6</button>
          </tr>
        </table>
      </div>
    </center>
    </div>
  )
}
  render() {
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

export default SelectArea1;
