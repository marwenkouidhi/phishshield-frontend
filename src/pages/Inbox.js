import React from "react";
import { useEmail } from "src/store/emailContext/emailContext";
import { truncateString } from "src/utils/strings";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { RiAlarmWarningFill } from "react-icons/ri";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import InboxHeader from "src/components/InboxHeader";

const Inbox = () => {
  const { emailState, useLoadEmailsFromGoogle } = useEmail();

  return (
    <div className="bg-white h-full rounded-md mx-2 ">
      <InboxHeader />
      <div className="flex justify-end p-5">
        <div
          onClick={useLoadEmailsFromGoogle()}
          className="border flex space-x-2 items-center px-2 p-1 rounded-md text-gray-600 cursor-pointer hover:bg-gray-100"
        >
          <FcGoogle size={30} />
          Load new emails
        </div>
      </div>
      {emailState.emails.map((email, _) => {
        const class_ =
          email.overall_score < 50
            ? "bg-green-200 w-10 h-10  rounded-full bg-gray-300 flex items-center justify-center "
            : "bg-red-200 w-10 h-10  rounded-full bg-gray-300 flex items-center justify-center ";

        return (
          <Link key={_} to={`${email.id}`}>
            <div
              className="p-2 px-4 border-b border-b-gray-200 cursor-pointer hover:bg-gray-100
          flex justify-between"
            >
              <div>
                <div>{truncateString(email.body, 100)}</div>
              </div>
              <div className={class_}>
                <span>{`${email?.overall_score}%`}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Inbox;
