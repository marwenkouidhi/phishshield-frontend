import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useEmail } from "src/store/emailContext/emailContext";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdAttachEmail, MdPhishing } from "react-icons/md";
import { AiFillDislike } from "react-icons/ai";
import { ImNewspaper } from "react-icons/im";

const Email = () => {
  const { pathname } = useLocation();
  const { emailState } = useEmail();
  const position = pathname.lastIndexOf("/") + 1;
  const emailId = parseInt(pathname.substring(position));
  const email = emailState.emails.filter((email) => email.id === emailId)[0];

  console.log(email);

  return (
    <div className="bg-white rounded-md mx-2 p-4  divide-y-2 space-y-5 flex flex-col ">
      <div>
        <div className="flex justify-end">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
            <span className="text-gray-600 font-bold">
              {`${email?.overall_score}%`}
            </span>
          </div>
        </div>
        <div>{email?.body}</div>
      </div>
      <div>
        <div className="text-lg font-bold flex space-x-2 text-blue-primary items-center py-2">
          <TbInfoSquareRoundedFilled
            size={35}
            className="text-blue-secondary"
          />
          <span>Detailed Infos</span>
        </div>
        <div className="flex justify-between">
          <div className=" flex  flex-col space-x-2 py-2 text-blue-primary ">
            <div className="flex items-center">
              <MdPhishing size={30} className="text-blue-secondary" />
              <div className="font-bold">Phishing Content</div>
            </div>
            <div className="text-lg font-bold  text-blue-primary">
              {parseFloat(email?.phishing_score_body).toFixed(2)}
            </div>
          </div>

          <div className=" flex  flex-col space-x-2 py-2 text-blue-primary">
            <div className=" flex  items-center space-x-2 py-2">
              <MdAttachEmail size={30} className="text-blue-secondary" />
              <div className="font-bold">Email Header</div>
            </div>
            <div className="text-lg font-bold  text-blue-primary">
              {parseFloat(email?.phishing_score_header).toFixed(2)}
            </div>
          </div>

          <div className=" flex  flex-col space-x-2 py-2">
            <div className=" flex  items-center space-x-2 py-2 text-blue-primary">
              <ImNewspaper size={30} className="text-blue-secondary" />
              <div className="font-bold">Fake Content</div>
            </div>
            <div className="text-lg font-bold  text-blue-primary">
              {parseFloat(email?.fakenews_score_body).toFixed(2)}
            </div>
          </div>

          <div className=" flex  flex-col space-x-2 py-2 text-blue-primary">
            <div className=" flex  items-center space-x-2 py-2">
              <AiFillDislike size={30} className="text-blue-secondary" />
              <div className="font-bold">Cyber builling</div>
            </div>
            <div className="text-lg font-bold  text-blue-primary">
              {parseFloat(email?.builing_score_body).toFixed(2)}
            </div>
          </div>
        </div>
        <div>
          <div className=" flex  items-center  space-x-2 py-2 text-blue-primary">
            <HiOutlineExternalLink size={25} className="text-blue-secondary " />
            <div className="font-bold">Links</div>
          </div>
          <div className="">
            {email?.urls.map((url, _) => (
              <div className="flex  space-x-10" key={_}>
                <div>{url.url_text}</div>
                <div>{parseFloat(url.phishing_score).toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
