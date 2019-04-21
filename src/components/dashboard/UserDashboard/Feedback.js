import React, { Component } from 'react';
import './Feedback.css';
import swal from 'sweetalert';
import ViewFeedbackUR from './ViewFeedbackUR'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import * as firebase from 'firebase';
import 'firebase/firestore';
import Loader from '../../loader/Loader'


class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        email:[],
        message:'',
        myFeedback:[],
    };
    this.handleChange = this.handleChange.bind(this);
  }
//   componentDidMount=async()=>{
//     const allBooking = await firebase.firestore().collection('feedback').where('user_ID','==',this.props.ID).get();
//     const data = allBooking.docs.map( a => a.data());
//     console.log("data---------------------------------data->",data);
//     this.setState({
//       myFeedback:data
//     })
// }









  handleChange(event) {
    this.setState({value: event.target.value});
  }
  feedback=()=>{
    const {name,email,message} = this.state;
    // if(!name){
    //   swal(" Insert Name");
    // }
     if(!email){
      swal(" Insert valid Email ");
    }
    else if (message<10){
      swal("Insert Message");
    }
  }
  hundleName=(e)=>{
    console.log("Name===",e.target.value)
    this.setState({
      name:e.target.value
    })
  }
  hundleEmail=(e)=>{
    console.log("Message===",e.target.value)
    this.setState({
      email:e.target.value
    })
  }
  hundleMessage=(e)=>{
    console.log("Message===",e.target.value)
    this.setState({
      message:e.target.value
    })
  }
  render() {
    return (
      <div>
        {/* <center className="center">
          <div className="form">
            <h3>Feedback  User</h3>
              <input placeholder="Enter Name" className="input" 
              onChange={this.hundleName}  type="text"/>

              <input placeholder="Enter Email" className="input" 
                onChange={this.hundleEmail} type="text"/>

              <textarea rows="4" cols="50" className="input-message"
                onChange={this.hundleMessage}  placeholder="text write some thing" /><br/>
                
              <button  className="slot_btn" onClick={this.feedback}>Send</button>
        </div>
        </center> */}
        {
          this.props.ID  ?<ViewFeedbackUR ID={this.props.ID}/> :
           <Loader/>
        }
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  console.log(state.firebase.auth.uid)
return{
    auth:   state.firebase.auth.uid,
    ID:state.firebase.auth.uid
}
}
export default connect(mapStateToProps)(Feedback);
// export default Feedback;
