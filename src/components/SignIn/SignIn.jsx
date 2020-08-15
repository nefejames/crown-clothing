import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            id="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            type="text"
            name="password"
            id="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;