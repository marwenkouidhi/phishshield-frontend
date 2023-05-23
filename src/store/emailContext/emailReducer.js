import {
  DONE_SCANINNG_NEW_EMAILS,
  GET_EMAILS,
  LOADING_EMAIL,
  LOADING_EMAIL_FROM_GMAIL,
  SCANINNG_NEW_EMAILS,
} from "./actionTypes";

export const initialEmailState = {
  emails: [],
  isloading: false,
  isFetchingFromGoogle: false,
  isScanningNewEmails: false,
  isDoneScanning: true,
};

export const emailReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_EMAILS:
      return {
        ...state,
        emails: payload,
        isloading: false,
        isFetchingFromGoogle: false,
        isScanningNewEmails: false,
        isDoneScanning: false,
      };

    case LOADING_EMAIL:
      return {
        ...state,
        isloading: true,
      };

    case LOADING_EMAIL_FROM_GMAIL:
      return {
        ...state,
        isFetchingFromGoogle: true,
        isScanningNewEmails: false,
      };

    case SCANINNG_NEW_EMAILS:
      return {
        ...state,
        isFetchingFromGoogle: false,
        isScanningNewEmails: true,
      };

    case DONE_SCANINNG_NEW_EMAILS:
      return {
        ...state,
        isFetchingFromGoogle: false,
        isScanningNewEmails: false,
        isDoneScanning: true,
      };
  }
};
