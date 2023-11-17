import React from "react";

const Footer = () => {
  const menu = [
    {
      id: 1,
      title: "Adress",
      subMenu: [
        {
          id: 1,
          title: "Uluönder mahallesi , Selva sokak , no :2/E, Eskisehir, Turkey 26190",
        },
      ],
    },
  ];

  return (
    <div className="border-t border-white">
      <div className="my-32 max-w-screen-xl mx-auto">
        <div className="my-12 text-center text-sm text-amber-800">
          {menu.map(({ id, title, subMenu }) => (
            <div key={id}>
              <h1 className="text-lg font-bold">{title}</h1>
              <ul className="mt-1">
                {subMenu.map(({ id, title, link }) => (
                  <li key={id}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="my-12 text-center text-sm text-amber-800">
          © eneserdogan
        </p>
      </div>
    </div>
  );
};

export default Footer;
