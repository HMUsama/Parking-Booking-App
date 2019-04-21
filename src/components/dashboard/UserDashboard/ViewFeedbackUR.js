import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import * as firebase from 'firebase';
import 'firebase/firestore';
import swal from 'sweetalert';
import './ViewFeedbackUR.css'

class ViewFeedbackUR extends Component {
  constructor(props) {
    super(props);
    this.state = {
        myFeedback:[],
    };
  }
  componentWillMount=async()=>{
      const allBooking = await firebase.firestore().collection('feedback').where('user_ID','==',this.props.ID).get();
      const data = allBooking.docs.map( a => a.data());
      console.log("data---------------------------------data->",data);
      this.setState({
        myFeedback:data
      })
  }
  render() {
    if(!this.props.auth ) return <Redirect to='/login'/>
    return (
        <div>
        {   
            this.state.myFeedback.map((item,index)=>{
                return(
                    <div>
                    <div className="disply-message">
                        <div>
                         <p className="message">{item.Message}</p>
                        </div>
                    </div>
                        <div className="button-div">
                         <input type="text" className="text-message"/>
                        </div>
                         <button className="button-send">Send</button>
                 </div>
                )
            })
        }
        </div>
    );
  }
}


const mapStateToProps = (state) => {
    console.log(state.firebase.auth.uid)
  return{
      auth:   state.firebase.auth.uid,
    //   ID:state.firebase.auth.uid
  }
}
export default connect(mapStateToProps)(ViewFeedbackUR);
// export default ViewFeedbackUR;
