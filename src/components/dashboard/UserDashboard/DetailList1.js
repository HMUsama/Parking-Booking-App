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
        allBooking:[],
    };
  }
  componentWillMount=async()=>{
    const db = firebase.firestore();
    const allBooking = await firebase.firestore().collection('block1').where('ID','==',this.props.userID).get();
    const data = allBooking.docs.map( a => a.data());
    console.log("data---------------------------------data->",data);
    this.setState({
      allBooking:data
    })
  }
  cencel=(ID)=>{
    console.log("USER ID",ID)
  }
  render() {
    console.log("DetailsList-------------------->",this.state.allBooking);
    return (
      <div>   
            {
              this.state.allBooking.map((item,index)=>{
                  console.log("item-------------------->",item);
                  return(
                      <div className="main-div"key={index}>
                      <center>
                        <div className="card z-depth-0 project-summary">
                          <div className="card-content black-text text-darken-3">
                          <span className="card-title">Parking Area:1 </span>
                          <p className="black-text">Ticket ID:{item.ID}</p>
                          <p className="black-text">Booking Date:{item.date}</p>
                          <p className="black-text">Parking Slot:{item.slotID}</p>
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
