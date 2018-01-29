import React from "react";
import Step1 from './stepone';
import Step2 from './steptwo';
import Step3 from './stepthree';
import Success from './success';



// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Redux pattern
var fieldValues = {
  firstname: "",
  lastname:"",
  email: "",
  city:"",
  state: ""
};

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
    this.saveValues = this.saveValues.bind(this);
  }

  saveValues(field_value) {
    fieldValues = Object.assign({}, fieldValues, field_value);
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  }

  submitRegistration  = () => {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep();
  }

  render() {
    const showStep = () => {
      switch (this.state.step) {
        case 1:
          return (
            <Step1
              fieldValues={fieldValues}
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              saveValues={this.saveValues}
            />
          );
        case 2:
          return (
            <Step2
              fieldValues={fieldValues}
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              saveValues={this.saveValues}
            />
          );
        case 3:
          return (
            <Step3
              fieldValues={fieldValues}
              previousStep={this.previousStep}
              submitRegistration={this.submitRegistration}
            />
          );
        case 4:
          return <Success fieldValues={fieldValues} />;
      }
    };

    let style = {
        width : (this.state.step / 4 * 100) + '%'
      }

    return (
        
      <div>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style} />
        {showStep()}
      </div>
    );
  }
}

export default Wizard;


