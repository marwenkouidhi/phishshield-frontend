import React from "react";
import {
  MagnifyingGlass,
  ProgressBar,
  RotatingLines,
} from "react-loader-spinner";
import { useEmail } from "src/store/emailContext/emailContext";

const InboxHeader = () => {
  const {
    emailState: { isFetchingFromGoogle, isScanningNewEmails, isDoneScanning },
  } = useEmail();

  const class_ = isFetchingFromGoogle
    ? "rounded-t-md p-2 flex  space-x-5 justify-center items-center bg-blue-secondary/90 text-white transition ease-out delay-150"
    : isScanningNewEmails
    ? "rounded-t-md p-2 flex  space-x-5 justify-center items-center bg-blue-primary/90 text-white transition ease-out delay-150"
    : isDoneScanning
    ? "rounded-t-md p-2 flex  space-x-5 justify-center items-center bg-whtie text-white transition ease-out "
    : null;

  return (
    <>
      <div className={class_}>
        {isFetchingFromGoogle && (
          <>
            <div className="">Loading Emails from google...</div>
            <RotatingLines
              strokeColor="white"
              strokeWidth="2"
              animationDuration="0.75"
              width="30"
              visible={isFetchingFromGoogle}
            />
          </>
        )}
        {isScanningNewEmails && (
          <>
            <div className="">We're Scanning you'r emails...</div>

            <MagnifyingGlass
              visible={isScanningNewEmails}
              height="30"
              width="30"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </>
        )}
      </div>
    </>
  );
};

export default InboxHeader;
