import React, { Component } from 'react';
// import './Dashboard.css';
import {connect} from 'react-redux'
import './Details.css'
import * as firebase from 'firebase';
import 'firebase/firestore';
import swal from 'sweetalert';

class Popup extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            text:'',
          };
        }
hundlerText=(e)=>{
  this.setState({text:e.target.value})
}
  feedback=()=>{  
    debugger
    if(!this.state.text){
      swal("Insert Message")
    }
    else if(this.state.text.length){
      const db = firebase.firestore();
      const ref=  db .collection("feedback").doc()
      db.collection("feedback").doc(ref.id).set({
                  Feedback_id:ref.id,
                  Ticket_ID:this.props.parkingID,
                  Message    :this.state.text,
                  user_ID     :this.props.uid
                              })
      swal("Send your Feedback")
      this.setState({text:''})
    }else{
      swal("---------------")
    }
   
    
  }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          {/* <h1 className="h1-popup">{this.props.parkingID}</h1> */}
          <h1 className="h1-popup"></h1>
          <h1 className="h1-popup"></h1>
          <h1 className="h1-popup"></h1>
          <input type="text" placeholder="Enter your Feedback"onChange={this.hundlerText}/>  
            <div className="button-feedbacks">
              <button onClick={this.props.closePopup} className="slot_btn">close me</button>
              <button onClick={this.feedback} className="slot_btn">send</button>
            </div>
        </div>
      </div>
    );
  }
}



class DetailsList1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        allParking1:[],
        allParking2:[],
        allParking3:[],
        showPopup3: false,
        parkingID:'',
        uid:'',
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentWillMount=async()=>{
    const db = firebase.firestore();
    const allBooking = await firebase.firestore().collection('block1').where('ID','==',this.props.userID).get();
    const data = allBooking.docs.map( a => a.data());
    console.log("data---------------------------------data->",data);
    this.setState({
      allParking1:data
    })
    this.allBooking3();
  }
  componentDidMount=async()=>{
    const allBooking1 = await firebase.firestore().collection('block2').where('ID','==',this.props.userID).get();
    const data1 = allBooking1.docs.map( a => a.data());
    this.setState({
      allParking2:data1
    })
    
  }
  allBooking3 =async()=>{
    const allBooking3 = await firebase.firestore().collection('block3').where('ID','==',this.props.userID).get();
    const data3 = allBooking3.docs.map( a => a.data());
    this.setState({
      allParking3:data3
    })
  }
  cencel_parking1=(ID)=>{
    const db = firebase.firestore();
    db.collection("block1").doc(ID).delete()
    swal("YOUR  BOOKING Has Been Cencel :)");
    window.location.reload();
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
  feedback_parking1=async(ID)=>{
    const db = firebase.firestore();
    db.collection('block1').doc(ID).get().then(res=>{
        this.setState({
          parkingID:res.data().ParkingID,
          Id:res.data().ID,
        })
      })
    this.togglePopup()
  }
  feedback_parking2=async(ID)=>{
    const db = firebase.firestore();
    db.collection('block2').doc(ID).get().then(res=>{
        this.setState({
          parkingID:res.data().ParkingID,
          Id:res.data().ID,
        })
      })
    this.togglePopup()
  }
  feedback_parking3=async(ID)=>{
    const db = firebase.firestore();
    db.collection('block3').doc(ID).get().then(res=>{
        this.setState({
          parkingID:res.data().ParkingID,
          Id:res.data().ID,
        })
      })
    this.togglePopup()
  }


 

  render() {
    // console.log("DetailsList-------------------->",this.state.allBooking1);
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
                          <span className="card-title">Parking Area:1 </span>
                          <p className="black-text">Ticket ID:{item.ParkingID}</p>
                          <p className="black-text">Booking Date:{item.date}</p>
                          <p className="black-text-slot">Parking Slot:{item.slotID}</p>
                          <p className="black-text">Strt Time:{item.StartTime}</p>
                          <p className="black-text">End Time:{item.EndTime}</p>
                          {/* <button className="slot_btn"onClick={this.cencel.bind(item.ParkingID)}>Cencel</button> */}
                          <button className="slot_btn"onClick={() => this.cencel_parking1(item.ParkingID)}>Cencel</button>
                          <button className="slot_btn"onClick={() => this.feedback_parking1(item.ParkingID)}>Feedback</button>
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
                  // console.log("item-------------------->",item);
                  return(
                      <div className="main-div"key={index}>
                      <center>
                        <div className="card z-depth-0 project-summary">
                          <div className="card-content black-text text-darken-3">
                          <span className="card-title">Parking Area:2</span>
                          <p className="black-text">Ticket ID:{item.ParkingID}</p>
                          <p className="black-text">Booking Date:{item.date}</p>
                          <p className="black-text-slot">Parking Slot:{item.slotID}</p>
                          <p className="black-text">Strt Time:{item.StartTime}</p>
                          <p className="black-text">End Time:{item.EndTime}</p>
                          <button className="slot_btn"onClick={() => this.cencel_parking2(item.ParkingID)}>Cencel</button>
                          <button className="slot_btn"onClick={() => this.feedback_parking2(item.ParkingID)}>Feedback</button>
                          </div>
                        </div>
                      </center>
                      </div> 
                  )
              })
            }
        {/* =============== PARKING AREA 3 ===================== */}  
        {
              this.state.allParking3.map((item,index)=>{
                  // console.log("item-------------------->",item);
                  return(
                      <div className="main-div"key={index}>
                      <center>
                        <div className="card z-depth-0 project-summary">
                          <div className="card-content black-text text-darken-3">
                          <span className="card-title">Parking Area:3</span>
                          <p className="black-text">Ticket ID:{item.ParkingID}</p>
                          <p className="black-text">Booking Date:{item.date}</p>
                          <p className="black-text-slot">Parking Slot:{item.slotID}</p>
                          <p className="black-text">Strt Time:{item.StartTime}</p>
                          <p className="black-text">End Time:{item.EndTime}</p>
                          <button className="slot_btn"onClick={() => this.cencel_parking3(item.ParkingID)}>Cencel</button>
                          <button className="slot_btn"onClick={() => this.feedback_parking3(item.ParkingID)}>Feedback</button>
                          </div>
                        </div>
                      </center>
                      </div> 
                  )
              })
            }
            <div>
            {this.state.showPopup ? 
                  <Popup
                    text='Feedback'
                    parkingID={this.state.parkingID}
                    uid={this.props.userID}
                    closePopup={this.togglePopup.bind(this)}
                  /> : null
            }
            </div>
     </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    auth:   state.firebase.auth.uid,
  }
}
export default connect(mapStateToProps)(DetailsList1);
// export default Details;
