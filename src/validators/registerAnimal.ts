import * as yup from "yup";

import { ValidatorMessages } from "../constants/validatorMessages";

export const registerAnimalValidator = yup.object({
  name: yup.string().required(ValidatorMessages.RequiredFiel),
  species: yup.string().required(ValidatorMessages.RequiredFiel),
  breed: yup.string().required(ValidatorMessages.RequiredFiel),
  city: yup.string().required(ValidatorMessages.RequiredFiel),
  state: yup.string().required(ValidatorMessages.RequiredFiel),
  care: yup.string().required(ValidatorMessages.RequiredFiel),
  period: yup.string().required(ValidatorMessages.RequiredFiel),
});
