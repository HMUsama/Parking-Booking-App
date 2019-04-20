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



class SelectArea2 extends Component {
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
    const StartTime =  id.target.value;
    var ts = StartTime;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    // h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    h = (h < 10)?(h):h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;

  console.log("StartTime-----",ts)

  // console.log("StartTime-----",StartTime)
  this.setState({startTime:ts})
}
// End Time
  hundleEnd=(id)=>{
    const EndTime = id.target.value;
    var ts = EndTime;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    // h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    h = (h < 10)?(h):h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    console.log("EndTime-----",ts)
    this.setState({endTime:ts})
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
  //current time
  const current_TIME =moment(n).format('LT')
  console.log("current_TIME ",current_TIME)
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
    // debugger
      if(startTime>=current_TIME){
         if(startTime<endTime){
           this.upload();
        }else{
          swal("End TIME Should be Grater then Start TIME");
        }
      }else{
        swal("Start TIME Should be Grater then Current TIME");
      }
  }
  else if(date > Current_Date){
    if(endTime>startTime){
      this.upload();
    }else{
      swal("End  Time Should be  Grater then Start TIME ");
    }
  }
  else if(date < Current_Date){
    if(date < Current_Date){
      swal(" Date  Should be Grater then Current Date and Future");
    }else{
      this.upload();
    }
  }
}
// upload(){
upload=async() =>{
  const {date,startTime,endTime,result} = this.state;
  const db = firebase.firestore();
  try {
    // debugger;  
    const allBooking = await firebase.firestore().collection('block2').where('date','==',this.state.date).get();
    const data = allBooking.docs.map( a => a.data());

    if(data.length < 1 ){
        db.collection("block2").doc().set({ date:date})
    }else{console.log("ELSE-----------------ELSE-->")}
    this.setState({ result: data,form:true,fromSlot:false });
  } catch (err) {
    console.error(err);
  }
}
// submit=(e)=>{
submit=async(e) =>{
  const {date,startTime,endTime} = this.state;
  const {ID} = this.props;
  const slotID = e.target.value;
  const db = firebase.firestore();
  try {
    const allBooking = await firebase.firestore().collection('block2').where('date','==',this.state.date).get();
    const data = allBooking.docs.map( a => a.data());
    console.log("data---------------------------------data->",data);
    for(var i=0; i<data.length; i++) {
        if(data[i].slotID==slotID){
              if(data[i].EndTime<startTime){
                const ref=  db .collection("block2").doc()
                db .collection("block2").doc().set({
                                        No:'1',
                                        ID,
                                        ParkingID:ref.id,
                                        StartTime:startTime,
                                        EndTime:endTime,
                                        date:date,
                                        slotID
                                        })
                console.log("YOUR  BOOKING SUBMIT MATCH")
                swal("YOUR  BOOKING SUBMIT :)");
                this.props.history.push('parking'); 
                break;
              }
              else{
                swal("ALREADY  BOOKING This Date :)");
                // this.props.history.push('parking'); 
              }
              break;
        }
        else if (data[i].slotID !==slotID){{
          const ref=  db .collection("block2").doc()
          db .collection("block2").doc().set({
                                      ID,
                                      ParkingID:ref.id,
                                      StartTime:startTime,
                                      EndTime:endTime,
                                      date:date,
                                      slotID
                                      })
              console.log("YOUR  BOOKING SUBMIT NON MATCH")
            swal("YOUR  BOOKING SUBMIT :)");
            this.props.history.push('parking'); 
            break;
        }
      }
    }
  } 
  catch (err) {
    console.error(err);
  }
}


FormSlot(){
    return(
      <center>
      <h1 className="h1">Block 2</h1>
      <div className="block_Area">
          <label>Select Date:</label>
          <input type="date" id="date"      onChange={this.hundleDate.bind(this.id)} />
          <label>Start Time:</label>
          <input type="time" id="startTime" name="time"  onChange={this.hundleStartTime.bind(this.id)}/>
          {/* <input type="time"pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" id="startTime" name="time"  onChange={this.hundleStartTime.bind(this.id)}/> */}

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
            <button className="row1" value="slot1" onClick={this.submit}>slot 1</button>
            <button className="row1"value="slot2" onClick={this.submit}>slot 2</button>
            <button className="row1"value="slot3" onClick={this.submit}>slot 3</button>
          </center>
          </tr>
          <tr className="row1">
            <button className="row1"value="slot4" onClick={this.submit}>slot 4</button>
            <button className="row1"value="slot5" onClick={this.submit}>slot 5</button>
            <button className="row1"value="slot6" onClick={this.submit}>slot 6</button>
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
        // this.state.form ===false ?this.SelectSlot()  :null
        this.state.form ===true ?this.SelectSlot()  :null
      }
         
      </div>
    </div>
    );
  }
}

const mapStateToProps =(state)=> {
  console.log("STATE-----..>>>>>>>>>>>>>>>>>>>>>>",state)
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

export default connect(mapStateToProps,mapDispatchToProps)(SelectArea2);
// export default SelectArea2;
