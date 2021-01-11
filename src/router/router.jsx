/** @format */

const HOME = "/";
const COMPONENTS = "/components";

// Authentication routes
const LOGIN = "/login";
const SIGNUP = "/signup";
const REGISTER = "/register";
const FORGOT = "/forgot";
const LINK_SENT = "/reset/sent";
const RESET_PASSWORD = "/reset";
const FORGOT_PASSWORD = "/forgotpassword";
const RESET_SUCCESS = "/reset-success";

// Dashboard routes
const PAID_TESTS = "/exam/paid";
const MOCK_TESTS = "/exam/mock";
const START_EXAM = "/exam/start";
const WALLET = "/wallet";
const PERFORMANCE = "/performance";
const FEEDBACK = "/feedback";

// Examination routes
const EXAM = "/exam";
const EXAM_RESULT = "/exam/result";

const PAGES_URL = {
  HOME,
  COMPONENTS,
  // Authentication routes
  LOGIN,
  SIGNUP,
  REGISTER,
  FORGOT,
  LINK_SENT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  RESET_SUCCESS,
  // Dashboard routes
  PAID_TESTS,
  MOCK_TESTS,
  START_EXAM,
  WALLET,
  PERFORMANCE,
  FEEDBACK,
  // Examination routes
  EXAM,
  EXAM_RESULT,
};

export default PAGES_URL;
