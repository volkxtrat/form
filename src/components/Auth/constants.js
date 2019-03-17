export const ScemaLogin = [
  { name: "email", validation: { email: true } },
  { name: "password", validation: { password: { minLength: 6 } } }
];
export const ScemaRegistration = [
  { name: "firstName", validation: { required: true, minLength: 2 } },
  { name: "secondName", validation: { required: true, minLength: 2 } },
  ...ScemaLogin
];

export const inputsLogin = [
  {
    controlName: "email",
    label: "Email address",
    placeholder: "example@gmail.com",
    type: "text",
    autoFocus: false
  },
  {
    controlName: "password",
    label: "Password",
    placeholder: "******",
    type: "password",
    autoFocus: false
  }
];

export const inputsRegistration = [
  {
    controlName: "firstName",
    label: "First name",
    placeholder: "Ivan",
    type: "text",
    autoFocus: true
  },
  {
    controlName: "secondName",
    label: "Second name",
    placeholder: "Ivanov",
    type: "text",
    autoFocus: false
  },
  ...inputsLogin
];
