import * as yup from "yup";
import {
  CLASS_ERROR_MSG,
  NAME_REQUIRED,
  SCORE_ERR_MESSAGE,
  SCORE_REQUIRED,
} from "../Constants/index";

export const findGrade = (num) => {
  let str = "";
  if (num <= 40) {
    str = "Poor";
  } else if (num > 40 && num < 70) {
    str = "Average";
  } else if (num >= 70) {
    str = "Excellent";
  }
  return str;
};

export const findGradeClass = (num) => {
  let str = "";
  if (num <= 40) {
    str = "grade-fail";
  } else if (num > 40 && num < 70) {
    str = "grade-average";
  } else if (num >= 70) {
    str = "grade-pass";
  }
  return str;
};

export const standardSuffix = (num) => {
  let str = "";
  switch (num) {
    case 1:
      str = "st";
      break;
    case 2:
      str = "nd";
      break;
    case 3:
      str = "rd";
      break;
    default:
      str = "th";
  }
  return str;
};

export const validationSchema = yup.object().shape({
  name: yup.string().required(NAME_REQUIRED),
  klass: yup
    .number()
    .required(CLASS_ERROR_MSG)
    .min(1, CLASS_ERROR_MSG)
    .max(12, CLASS_ERROR_MSG),
  score: yup
    .number()
    .required(SCORE_REQUIRED)
    .min(0, SCORE_ERR_MESSAGE)
    .max(100, SCORE_ERR_MESSAGE),
});
