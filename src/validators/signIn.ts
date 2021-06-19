import * as yup from "yup";

import { ValidatorMessages } from "../constants/validatorMessages";

export const signInValidator = yup.object({
  email: yup
    .string()
    .email(ValidatorMessages.InvalidEmail)
    .required(ValidatorMessages.RequiredFiel),
  password: yup.string().required(ValidatorMessages.RequiredFiel),
});
