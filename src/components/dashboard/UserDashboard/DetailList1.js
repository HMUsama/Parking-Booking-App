import React, { Component } from 'react';
// import './Dashboard.css';
import {connect} from 'react-redux'
import './Details.css'
import * as firebase from 'firebase';
import 'firebase/firestore';


class DetailsList1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        allParking1:[],
        allParking2:[],
    };
  }
  componentWillMount=async()=>{
    const db = firebase.firestore();
    const allBooking = await firebase.firestore().collection('block1').where('ID','==',this.props.userID).get();
    const data = allBooking.docs.map( a => a.data());
    console.log("data---------------------------------data->",data);
    this.setState({
      allParking1:data
    })
  }
  componentDidMount=async()=>{
    const allBooking1 = await firebase.firestore().collection('block2').where('ID','==',this.props.userID).get();
    const data1 = allBooking1.docs.map( a => a.data());
    this.setState({
      allParking2:data1
    })
  }
  cencel=(ID)=>{
    console.log("USER ID",ID)
  }
  render() {
    console.log("DetailsList-------------------->",this.state.allBooking);
    return (
      <div>   
        {/* =============== PARKING AREA 1 ===================== */}
            {
              this.state.allParking1.map((item,index)=>{
                  console.log("item-------------------->",item);
                  return(
                      <div className="main-div"key={index}>
                      <center>
                        <div className="card z-depth-0 project-summary">
                          <div className="card-content black-text text-darken-3">
                          <span className="card-title">Parking Area:{item.No} </span>
                          <p className="black-text">Ticket ID:{item.ParkingID}</p>
                          <p className="black-text">Booking Date:{item.date}</p>
                          <p className="black-text-slot">Parking Slot:{item.slotID}</p>
                          <p className="black-text">Strt Time:{item.StartTime}</p>
                          <p className="black-text">End Time:{item.EndTime}</p>
                          <button className="slot_btn"onClick={this.cencel.bind(this.ID)}>Cencel</button>
                          </div>
                        </div>
                      </center>
                      </div> 
                  )
              })
            }
        {/* =============== PARKING AREA 2 ===================== */}
            {
              this.state.allParking2.map((item,index)=>{
                  console.log("item-------------------->",item);
                  return(
                      <div className="main-div"key={index}>
                      <center>
                        <div className="card z-depth-0 project-summary">
                          <div className="card-content black-text text-darken-3">
                          <span className="card-title">Parking Area:{item.No} </span>
                          <p className="black-text">Ticket ID:{item.ParkingID}</p>
                          <p className="black-text">Booking Date:{item.date}</p>
                          <p className="black-text-slot">Parking Slot:{item.slotID}</p>
                          <p className="black-text">Strt Time:{item.StartTime}</p>
                          <p className="black-text">End Time:{item.EndTime}</p>
                          <button className="slot_btn"onClick={this.cencel.bind(this.ID)}>Cencel</button>
                          </div>
                        </div>
                      </center>
                      </div> 
                  )
              })
            }
        {/* =============== PARKING AREA 3 ===================== */}  
     </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
  }
}
export default connect(mapStateToProps)(DetailsList1);
// export default Details;
