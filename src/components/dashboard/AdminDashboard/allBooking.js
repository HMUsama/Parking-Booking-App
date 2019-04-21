import React, { Component } from 'react';
// import './AllBooking.css';
import * as firebase from 'firebase';
import 'firebase/firestore';
import swal from 'sweetalert';


class AllBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
        block1:[],
        block2:[],
        block3:[],
    };
  }
  componentWillUpdate(){
    this.bloack_1()
    this.bloack_2()
    this.bloack_3()
  }
  componentWillMount(){
    this.bloack_1()
    this.bloack_2()
    this.bloack_3()
  }
  bloack_1=async()=>{
    const block1 = await firebase.firestore().collection('block1').where('ID','>','ID').get();
    const data = block1.docs.map( a => a.data());
    console.log("data---------------------------------data->",data);
    this.setState({
        block1:data
    })
  }
  bloack_2=async()=>{
    const block2 = await firebase.firestore().collection('block2').where('ID','>','ID').get();
    const data = block2.docs.map( a => a.data());
    console.log("data---------------------------------data->",data);
    this.setState({
        block2:data
    })
  }
  bloack_3=async()=>{
    const block3 = await firebase.firestore().collection('block3').where('ID','>','ID').get();
    const data = block3.docs.map( a => a.data());
    console.log("data---------------------------------data->",data);
    this.setState({
        block3:data
    })
  }
  cencel_parking1=(ID)=>{
    const db = firebase.firestore();
    db.collection("block1").doc(ID).delete()
    swal("YOUR  BOOKING Has Been Cencel :)");
    // window.location.reload();
  }
  cencel_parking2=(ID)=>{
    const db = firebase.firestore();
    db.collection("block2").doc(ID).delete()
    swal("YOUR  BOOKING Has Been Cencel :)");
    // window.location.reload();
  }
  cencel_parking3=(ID)=>{
    const db = firebase.firestore();
    db.collection("block3").doc(ID).delete()
    swal("YOUR  BOOKING Has Been Cencel :)");
    // window.location.reload();
  }
  render() {
    return (
      <div>
     {/* =============== All Users Block1 ===================== */}
     {
              this.state.block1.map((item,index)=>{
                  console.log("item-------------------->",item);
                  return(
                    <div className="main-div"key={index}>
                    <center>
                      <div className="card z-depth-0 project-summary">
                        <div className="card-content black-text text-darken-3">
                        <span className="card-title">Parking Area:1 </span>
                        <p className="black-text">Ticket ID:{item.ParkingID}</p>
                        <p className="black-text">Booking Date:{item.date}</p>
                        <p className="black-text-slot">Parking Slot:{item.slotID}</p>
                        <p className="black-text">Strt Time:{item.StartTime}</p>
                        <p className="black-text">End Time:{item.EndTime}</p>
                        {/* <button className="slot_btn"onClick={this.cencel.bind(item.ParkingID)}>Cencel</button> */}
                        <button className="slot_btn"onClick={() => this.cencel_parking1(item.ParkingID)}>Cencel</button>
                        </div>
                      </div>
                    </center>
                    </div> 
                  )
              })
            }
     {/* =============== All Users Block2 ===================== */}
     {
              this.state.block2.map((item,index)=>{
                  console.log("item-------------------->",item);
                  return(
                    <div className="main-div"key={index}>
                    <center>
                      <div className="card z-depth-0 project-summary">
                        <div className="card-content black-text text-darken-3">
                        <span className="card-title">Parking Area:2 </span>
                        <p className="black-text">Ticket ID:{item.ParkingID}</p>
                        <p className="black-text">Booking Date:{item.date}</p>
                        <p className="black-text-slot">Parking Slot:{item.slotID}</p>
                        <p className="black-text">Strt Time:{item.StartTime}</p>
                        <p className="black-text">End Time:{item.EndTime}</p>
                        {/* <button className="slot_btn"onClick={this.cencel.bind(item.ParkingID)}>Cencel</button> */}
                        <button className="slot_btn"onClick={() => this.cencel_parking2(item.ParkingID)}>Cencel</button>
                        </div>
                      </div>
                    </center>
                    </div> 
                  )
              })
            }
     {/* =============== All Users Block3 ===================== */}
     {
              this.state.block3.map((item,index)=>{
                  console.log("item-------------------->",item);
                  return(
                    <div className="main-div"key={index}>
                    <center>
                      <div className="card z-depth-0 project-summary">
                        <div className="card-content black-text text-darken-3">
                        <span className="card-title">Parking Area:3 </span>
                        <p className="black-text">Ticket ID:{item.ParkingID}</p>
                        <p className="black-text">Booking Date:{item.date}</p>
                        <p className="black-text-slot">Parking Slot:{item.slotID}</p>
                        <p className="black-text">Strt Time:{item.StartTime}</p>
                        <p className="black-text">End Time:{item.EndTime}</p>
                        {/* <button className="slot_btn"onClick={this.cencel.bind(item.ParkingID)}>Cencel</button> */}
                        <button className="slot_btn"onClick={() => this.cencel_parking3(item.ParkingID)}>Cencel</button>
                        </div>
                      </div>
                    </center>
                    </div> 
                  )
              })
            }
      </div>
    );
  }
}

export default AllBooking;
