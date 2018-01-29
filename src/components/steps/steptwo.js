import React from "react";

class Step2 extends React.Component {
  constructor(props) {
    super(props);
  }

  nextStep = e => {
    e.preventDefault();

    // Get values via this.refs
    var data = {
      email: this.refs.email.value
    };

    this.props.saveValues(data);
    this.props.nextStep();
  };

  render() {
    return (
      <div>
        <h2>Web Details</h2>
        <ul className="form-fields">
          <li>
            <label>Email</label>
            <input
              type="email"
              ref="email"
              defaultValue={this.props.fieldValues.email}
            />
          </li>
          <li className="form-footer">
            <button
              className="btn -default pull-left"
              onClick={this.props.previousStep}
            >
              Back
            </button>
            <button className="btn -primary pull-right" onClick={this.nextStep}>
              Next
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Step2;
