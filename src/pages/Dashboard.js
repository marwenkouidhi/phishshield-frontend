import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdAttachEmail, MdPhishing } from "react-icons/md";
import { useEmail } from "src/store/emailContext/emailContext";

const Dashboard = () => {
  const {
    emailState: { emails },
  } = useEmail();

  const allURLs = emails.flatMap((obj) => obj.urls.map((url) => url));
  const countURLsInCategory = (phishing_score) => {
    return allURLs.filter((url) => url.phishing_score === phishing_score)
      .length;
  };
  console.log(allURLs);

  return (
    <div className="bg-white h-full rounded-md  flex flex-col items-center space-y-6 pt-10">
      <div class="flex space-x-5">
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
            <MdPhishing size={60} className="text-white" />
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Phishing emails</h3>
            <p class="text-3xl">
              {emails.filter((obj) => obj.phishing_score_body > 0.5).length}
            </p>
          </div>
        </div>

        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-indigo-400">
            <HiOutlineExternalLink size={60} className="text-white" />
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Fake News</h3>
            <p class="text-3xl">
              {emails.filter((obj) => obj.fakenews_score_body > 0.5).length}
            </p>
          </div>
        </div>
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-red-400">
            <HiOutlineExternalLink size={60} className="text-white" />
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Cyberbullying</h3>
            <p class="text-3xl">
              {emails.filter((obj) => obj.builing_score_body > 0.5).length}
            </p>
          </div>
        </div>
      </div>

      <div class="flex space-x-5">
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-blue-400">
            <HiOutlineExternalLink size={60} className="text-white" />
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Benign urls</h3>
            <p class="text-3xl">{countURLsInCategory(0.0)}</p>
          </div>
        </div>

        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-blue-400">
            <HiOutlineExternalLink size={60} className="text-white" />
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Defacement Urls</h3>
            <p class="text-3xl">{countURLsInCategory(1.0)}</p>
          </div>
        </div>

        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-blue-400">
            <HiOutlineExternalLink size={60} className="text-white" />
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Malware Urls</h3>
            <p class="text-3xl">{countURLsInCategory(2.0)}</p>
          </div>
        </div>

        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-blue-400">
            <HiOutlineExternalLink size={60} className="text-white" />
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Phshing Urls</h3>
            <p class="text-3xl">{countURLsInCategory(3.0)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
