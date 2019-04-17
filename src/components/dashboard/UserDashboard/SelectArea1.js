import React, { Component } from 'react';
import swal from 'sweetalert';
import moment from 'moment'
import './SelectAreas.css'
// import './SelectArea.scss'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { bookSlot,fatchAndCreate} from '../../../store/actions/users/usersAction'
import * as firebase from 'firebase';
import 'firebase/firestore';



class SelectArea1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      startTime:'',
      endTime:'',
      fromSlot:true,
      form:false,
      result:'',
    }
  }
// Date
  hundleDate=(id)=> {
    const newDate = id.target.value;
    const newdate = moment(newDate).format('L');
    this.setState({date:newdate})
}
// Start Time
  hundleStartTime=(id)=>{
  const StartTime = id.target.value;
  // console.log("StartTime-----",StartTime)
  this.setState({startTime:StartTime})
}
// End Time
  hundleEnd=(id)=>{
    const EndTime = id.target.value;
    // console.log("EndTime-----",EndTime)
    this.setState({endTime:EndTime})
}


selectSlot=()=>{
  const {date,startTime,endTime } = this.state;
  console.log("DATE",date)
  console.log("START TIME",startTime)
  console.log("END TIME",endTime)
  const currentDate = new Date();
  // Date 
  const Current_Date =moment(currentDate).format('L')

  const n = currentDate.getTime(startTime)
  const Current_TIME =moment(n).format('LT')
  console.log("Current_TIME ",Current_TIME)
  if(!date){
    swal(" Insert Date");
  }
  else if(!startTime){
    swal(" Insert Start Time");
  }
  else if(!endTime){
    swal(" Insert End Time");
  }
  else if(date == Current_Date){
      if(Current_TIME >=startTime){
        // this.setState({form:true,fromSlot:false})
        this.upload();
      }else{
        swal("Start TIME Should be Grater then Current TIME");
      }
  }
  else if(date > Current_Date){
    if(endTime>startTime){
      // this.setState({form:true,fromSlot:false})
      this.upload();
    }else{
      swal("End  Time Should be  Grater then Start TIME ");
    }
  }
  else if(date < Current_Date){
    if(date < Current_Date){
      swal(" Date  Should be Grater then Current Date and Future");
    }else{
      // this.setState({form:true,fromSlot:false})
      this.upload();
    }
  }
}
// upload(){
upload=async() =>{
  // this.props.fatchAndCreate(this.state);
  const {date,startTime,endTime,result} = this.state;
  const db = firebase.firestore();
  try {
    // debugger;  
    const allBooking = await firebase.firestore().collection('block1').where('date','==',this.state.date).get();
    const data = allBooking.docs.map( a => a.data());
    console.log("parking---------------------------------parking->",data);


    if(data.length < 1 ){
      console.log("DATA NULL---------------------------------->");
      db.collection('block1').doc(this.props.ID).set({
        ID:this.props.ID,
        date:date,
        slot1:false,
        slot2:false,
        slot3:false,
        slot4:false,
        slot5:false,
        slot6:false,
      }).then(res=>{
        console.log("RESPONCE-----------------RESPONCE",res.data())
        // this.setState({ result: data });
      })
    }else{
      console.log("ELSE-----------------ELSE-->")
  }
    this.setState({ result: data,form:true,fromSlot:false });
  } catch (err) {
    console.error(err);
  }
}

submit=(e)=>{
  this.props.bookSlot(this.state,e.target.value)
  console.log("SUBMIT",e.target.value)
}


FormSlot(){
    return(
      <center>
      <h1 className="h1">Block 1</h1>
      <div className="block_Area">
          <label>Select Date:</label>
          <input type="date" id="date"      onChange={this.hundleDate.bind(this.id)} />
          <label>Start Time:</label>
          <input type="time" id="startTime" onChange={this.hundleStartTime.bind(this.id)}/>
          <label>End Time:</label>
          <input type="time" id="endTime"   onChange={this.hundleEnd.bind(this.id)}/>
      </div>

      <div>
        <button onClick={this.selectSlot.bind(this)} className="slot_btn">Select Slot</button>
      </div>
     </center>
      )
}
cencel=()=>{
  this.props.history.push('parking');
}
SelectSlot(){
  if(this.props.auth == false ) return <Redirect to='/login'/>
  console.log("SELECT SLOT DATA",this.state.result)
  return(
    <div className="SelectSlot">
    <center>
      <h1>Select Slote</h1>
      <div>
        <table className="table1">
          <tr className="table1-row">
          <center>  
            <button className="row1" value="1" onClick={this.submit}>slot 1</button>
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
    <br/>
    <div>
      <button  className="slot_btn" onClick={this.cencel}>Cencle</button>
    </div>
    </div>
  )
}
  render() {
    // console.log("Data RENDER",this.state.result)
    return (
      <div className="Parking">
      <div className="select_Area">
      {
        this.state.fromSlot ===true ?  this.FormSlot() :null
      }
      {
        this.state.form ===true ?this.SelectSlot()  :null
      }
         
      </div>
    </div>
    );
  }
}

const mapStateToProps =(state)=> {
  console.log("STATE-----",state.firebase.auth.uid)
  return{
    ID:state.firebase.auth.uid
  }
}
const mapDispatchToProps =(dispatch)=> {
  return {
    bookSlot: (Booking) => dispatch(bookSlot(Booking)),
    fatchAndCreate: (data) => dispatch(fatchAndCreate(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectArea1);
// export default SelectArea1;
