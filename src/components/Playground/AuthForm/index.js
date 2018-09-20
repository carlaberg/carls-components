import React from "react";
import { FormWrapper, Input, Button } from "./styles";

class AuthForm extends React.Component {
  render() {
    const { formType } = this.props;
    return (
      <FormWrapper>
        <Input />
        <Input />
        <Button>{formType}</Button>
      </FormWrapper>
    );
  }
}

export default AuthForm;
