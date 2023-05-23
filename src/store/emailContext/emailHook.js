import { useReducer, useState } from "react";
import { emailReducer, initialEmailState } from "./emailReducer";
import axios from "axios";
import {
  DONE_SCANINNG_NEW_EMAILS,
  GET_EMAILS,
  LOADING_EMAIL_FROM_GMAIL,
  SCANINNG_NEW_EMAILS,
} from "./actionTypes";
import { useAuth } from "../authContext/authContext";
import { useGoogleLogin } from "@react-oauth/google";

export const useEmailController = () => {
  const [emailState, dispatch] = useReducer(emailReducer, initialEmailState);

  const loadEmails = () => {
    axios
      .get("http://127.0.0.1:8000/api/emails/")
      .then((res) => dispatch({ type: GET_EMAILS, payload: res.data }));
  };

  const useLoadEmailsFromGoogle = () =>
    useGoogleLogin({
      scope: ["https://mail.google.com/"],
      onSuccess: async ({ access_token }) => {
        const config = {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };
        dispatch({ type: LOADING_EMAIL_FROM_GMAIL });
        await new Promise((r) => setTimeout(r, 2000));

        axios
          .get(
            "https://gmail.googleapis.com/gmail/v1/users/me/messages/?maxResults=20",
            config
          )
          .then((res) => {
            let emails = [];

            // Create an array of promises for each axios request
            let requests = res.data.messages.map((info) => {
              return axios
                .get(
                  `https://gmail.googleapis.com/gmail/v1/users/me/messages/${info.id}?format=full`,
                  config
                )
                .then((res) => {
                  const date = res.data.payload.headers.filter((header) => {
                    if (header.name == "Date") {
                      return header.value;
                    }
                  })[0];

                  return {
                    date,
                    emailId: res.data.internalDate,
                    body: res.data.snippet,
                    header: res.data.payload.headers,
                  };
                });
            });

            return Promise.all(requests).then((results) => {
              if (emailState.emails.length !== 0) {
                const maxObject = emailState.emails.reduce(
                  (max, obj) => (obj.emailId > max.emailId ? obj : max),
                  emailState.emails[0]
                );

                const new_emails = results.filter(
                  (obj) => obj.emailId > maxObject.emailId
                );

                emails = new_emails; // Assign the results to the emails array
              } else {
                emails = results;
              }

              return emails;
            });
          })
          .then((res) => {
            dispatch({ type: SCANINNG_NEW_EMAILS });

            axios
              .post("http://127.0.0.1:8000/api/emails/", {
                emails: res,
              })
              .then(async (res) => {
                await new Promise((r) => setTimeout(r, 4000));

                dispatch({
                  type: DONE_SCANINNG_NEW_EMAILS,
                });

                dispatch({
                  type: GET_EMAILS,
                  payload: res.data,
                });
              });
          });
      },
    });

  const loadFromgoogle = () => {
    dispatch({ type: LOADING_EMAIL_FROM_GMAIL });
  };

  const scanEmails = () => {
    dispatch({ type: SCANINNG_NEW_EMAILS });
  };

  return {
    emailState,
    loadEmails,
    useLoadEmailsFromGoogle,
    scanEmails,
    loadFromgoogle,
  };
};
