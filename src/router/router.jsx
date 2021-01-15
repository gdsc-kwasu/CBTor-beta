/** @format */

const HOME = "/";

// Authentication routes
const LOGIN = "/login";
const SIGNUP = "/signup";
const FORGOT = "/forgot";
const LINK_SENT = "/reset/sent";
const RESET = "/reset";

// Dashboard routes
const PAID_TESTS = "/exam/paid";
const MOCK_TESTS = "/exam/mock";
const START_EXAM = "/exam/start";
const WALLET = "/wallet";
const PERFORMANCE = "/performance";
const FEEDBACK = "/feedback";
const PROFILE = "/profile";

// Examination routes
const EXAM = "/exam";
const EXAM_RESULT = "/exam/result";

const PAGES_URL = {
  HOME,
  // Authentication routes
  LOGIN,
  SIGNUP,
  FORGOT,
  RESET,
  LINK_SENT,
  // Dashboard routes
  PAID_TESTS,
  MOCK_TESTS,
  START_EXAM,
  WALLET,
  PERFORMANCE,
  FEEDBACK,
  PROFILE,
  // Examination routes
  EXAM,
  EXAM_RESULT,
};

export default PAGES_URL;
