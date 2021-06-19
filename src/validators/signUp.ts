import * as yup from "yup";

import { ValidatorMessages } from "../constants/validatorMessages";

export const signUpValidator = yup.object({
  email: yup
    .string()
    .email(ValidatorMessages.InvalidEmail)
    .required(ValidatorMessages.RequiredFiel),
  password: yup.string().required(ValidatorMessages.RequiredFiel),
  phone: yup.string().required(ValidatorMessages.RequiredFiel),
});
