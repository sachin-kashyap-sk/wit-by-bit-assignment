import dashboard from "../Assets/dashboard.png";
import course from "../Assets/course.png";
import students from "../Assets/students.png";
import exams from "../Assets/exams.png";
import results from "../Assets/results.png";
import board from "../Assets/black-board.png";
import streaming from "../Assets/streaming.png";
import notification from "../Assets/notification.png";

export const listingContent = [
  {
    iconSource: dashboard,
    iconLabel: "Dashboard",
  },
  {
    iconSource: course,
    iconLabel: "Courses",
  },

  {
    iconSource: students,
    iconLabel: "Students",
  },

  {
    iconSource: exams,
    iconLabel: "Exams",
  },

  {
    iconSource: results,
    iconLabel: "Results",
  },
  {
    iconSource: board,
    iconLabel: "Notice Board",
  },
  {
    iconSource: streaming,
    iconLabel: "Live Classes",
  },
  {
    iconSource: notification,
    iconLabel: "Notifications",
  },
];

export const NAME_REQUIRED = "Error: Name field cannot be left blank";
export const CLASS_ERROR_MSG = "Error: Please input values between 1 & 12";
export const SCORE_REQUIRED = "Error: Score field cannot be left blank";
export const SCORE_ERR_MESSAGE = "Error: Please input value between 0 to 100";
export const CLASS_INST = "Please input values between 1 & 12";
export const SCORE_INST = "Please input values between 0 & 100";
