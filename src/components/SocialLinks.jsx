import React from "react";
import { FaInstagram,FaFacebook,FaReceipt } from "react-icons/fa";
import menu from "../assets/SEMTMENU.pdf"
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/Semtcoffee/",
    },
    {
        id: 2,
        style: "rounded-br-md",
        child: (
          <>
            Instagram <FaInstagram size={30} />
          </>
        ),
        href: "https://www.instagram.com/semtcoffee/",
      },
      {
        id: 2,
        style: "rounded-br-md",
        child: (
          <>
            Menu <FaReceipt size={30} />
          </>
        ),
        href: menu,
      style: "rounded-br-md",
      download: true,
      },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-20 px-1 ml-[-130px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
