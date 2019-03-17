export const createFormControl = schema => {
  if (!Array.isArray(schema)) return;
  const baseControl = {
    value: "",
    error: "",
    valid: false,
    touched: false,
    validation: {}
  };

  const formControls = {};
  schema.forEach(item => {
    formControls[item.name] = { ...baseControl };
    formControls[item.name].validation = item.validation;
  });
  return {
    formControls,
    isFormValid: false
  };
};

export function onChangeHandler(value, controlName) {
  const formControls = { ...this.state.form.formControls };
  let control = { ...formControls[controlName] };

  control.value = value;
  control = validateControl(control, controlName);
  control.touched = true;
  formControls[controlName] = control;
  const isFormValid = validateForm(formControls);

  this.setState({
    form: {
      formControls,
      isFormValid
    }
  });
}

function validateControl(control, controlName) {
  const validation = control.validation;
  if (!control.validation) return true;
  const value = control.value;
  let valid = true;
  let error = "";

  if (validation.required) {
    const required = value !== "" && valid;
    if (!required) error = "Required";
    valid = required;
  }

  if (validation.minLength) {
    const minLength = value.length >= validation.minLength && valid;
    if (!minLength) error = `At least ${validation.minLength} characters long`;
    valid = minLength;
  }

  if (validation.oneOf && value.length > 0) {
    const oneOf =
      !validation.oneOf.some(validValue => {
        return value === validValue;
      }) && valid;
    if (!oneOf) error = "Value match";
    valid = oneOf;
  }

  if (validation.email) {
    // eslint-disable-next-line
    const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    if (!email) error = `Invalid email`;
    valid = email;
  }

  if (validation.password) {
    const length = validation.password.minLength;
    let errPassword = "";
    if (value.length < length)
      errPassword += `At least ${length} characters long, `;
    if (!/(?=.*[A-Z])/.test(value)) errPassword += `1 capital letter, `;
    if (!/(?=.*[\d])/.test(value)) errPassword += `1 number `;

    if (errPassword) {
      error = errPassword;
      valid = false;
    } else {
      valid = true;
    }
  }

  control.valid = valid;
  control.error = error && `${controlName.toUpperCase()}: ${error}`;
  return control;
}

function validateForm(formControls) {
  let isFormValid = true;

  for (let control in formControls) {
    if (formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid;
    }
  }

  return isFormValid;
}
