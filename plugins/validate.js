import { extend } from "vee-validate";
import { required, alpha, numeric, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Поле обязательно к заполнению"
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters"
});

extend("numeric", {
  ...numeric,
  message: ''
})

extend("email", {
  ...email,
  message: 'Адрес электронной почты должен содержать символ "@"'
});
