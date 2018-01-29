import React from "react";

class Step1 extends React.Component {
  constructor(props) {
    super(props);
  }

  nextStep = e => {
    e.preventDefault();

    // Get values via this.refs
    var data = {
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value
    };

    this.props.saveValues(data);
    this.props.nextStep();
  };

  render() {
    return (
      <div>
        <h2>Basic Details</h2>
        <ul className="form-fields">
          <li>
            <label>First Name</label>
            <input
              type="text"
              ref="firstname"
              defaultValue={this.props.fieldValues.firstname}
            />
          </li>
          <li>
            <label>Last Name</label>
            <input
              type="text"
              ref="lastname"
              defaultValue={this.props.fieldValues.lastname}
            />
          </li>
          <li className="form-footer">
            <button className="btn -primary pull-right" onClick={this.nextStep}>
              Next
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Step1;
