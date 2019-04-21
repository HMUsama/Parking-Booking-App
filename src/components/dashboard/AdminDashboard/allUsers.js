import React, { Component } from 'react';
// import './AllUsers.css';
import * as firebase from 'firebase';
import 'firebase/firestore';
import swal from 'sweetalert';


class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
        allUsers:[],
    };
  }
  componentWillMount=async()=>{
    const allBooking = await firebase.firestore().collection('Users').get();
    const data = allBooking.docs.map( a => a.data());
    console.log("data---------------------------------data->",data);
    this.setState({
      allUsers:data
    })
  }
  render() {
    return (
      <div>
     {/* =============== All Users ===================== */}
     {
              this.state.allUsers.map((item,index)=>{
                  console.log("item-------------------->",item);
                  return(
                      <div className="main-div"key={index}>
                      <center>
                        <div className="card z-depth-0 project-summary">
                          <div className="card-content black-text text-darken-3">
                          {/* <span className="card-title">Parking Area:1 </span> */}
                          {/* <p className="black-text">Ticket ID:{item.ParkingID}</p> */}
                          {/* <p className="black-text">Booking Date:{item.date}</p> */}
                          <p className="black-text-slot">Email:{item.email}</p>
                          <p className="black-text">First Name:{item.firstName}</p>
                          <p className="black-text">Last Name:{item.lastName}</p>
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

export default AllUsers;
