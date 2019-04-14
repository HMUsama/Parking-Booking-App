import React, { Component } from 'react';


class SelectArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:'',
      startTime:'',
      endTime:'',
    };
  }
  hundleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value,
    })
  }

  render() {
    console.log("====>",this.state.date)
    console.log("====>",this.state.startTime)
    console.log("====>",this.state.endTime)
    return (
      <div className="SelectArea">
       <label>Select Date:</label>
        <input type="date" id="date" onChange={this.hundleChange}  className="form-control" />
        <label>Start Time:</label>
        <input type="time" id="startTime"onChange={this.hundleChange} className="form-control" />
        <label>End Time:</label>
        <input type="time" id="endTime"onChange={this.hundleChange} className="form-control" />
      </div>
    );
  }
}

export default SelectArea;
