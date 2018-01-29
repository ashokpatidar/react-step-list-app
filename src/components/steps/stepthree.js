import React from 'react';

class Step3 extends React.Component{

    constructor(props){
        super(props);

        
    }

    nextStep = (e) => {
        e.preventDefault()

    // Get values via this.refs
    var data = {
      city     : this.refs.city.value,
      state     : this.refs.state.value,

     
    }

    this.props.saveValues(data)
    this.props.nextStep()
    }


    render(){
        return (
            <div>
              <h2>Address Details</h2>
              <ul className="form-fields">
                <li>
                  <label>City</label>
                  <input type="text" ref="address" defaultValue={this.props.fieldValues.city} />
                </li>
                <li>
                  <label>State</label>
                  <input type="text" ref="address" defaultValue={this.props.fieldValues.state} />
                </li>
               
                <li className="form-footer">
                <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
                <button className="btn -primary pull-right" onClick={this.props.submitRegistration}>Submit Registration</button>
                </li>
              </ul>
            </div>
          )
    }
}

export default Step3;

