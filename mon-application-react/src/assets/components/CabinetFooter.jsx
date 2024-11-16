import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Функция, чтобы определить, является ли текущий путь активным
  const isActive = (path) => location.pathname === path;

  return (
    <div className="pt-[10px] fixed bottom-0 left-0 w-full mb-[10px]">
      <div className="flex items-center z-10 flex-shrink-0 self-center w-full justify-between px-6 py-3.75 border-t border-line md:max-w-[375px] m-auto pt-[15px]">
        
        <Link to="/main">
          <div
            data-testid="navigation-item-home"
            className="flex flex-col w-12 text-center items-center"
            role="button"
          >
            <span className="flex justify-center mb-0.5">
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={isActive("/main") ? "text-[#0500FF]" : "opacity-[30%]"}
              >
                <path
                  className="text-primary"
                  d="M21 11L20.9999 21H15V13H9V21H3V11L12 2L21 11Z"
                  fill="currentColor"
                ></path>
                <rect
                  className="text-primaryPressed opacity-[50%]"
                  width="6"
                  height="8"
                  transform="matrix(1 0 0 -1 9 21)"
                  fill="currentColor"
                ></rect>
              </svg>
            </span>
            <small className={isActive("/main") ? "text-[#0500FF] font-medium" : "text-primary font-medium"}>
              Главная
            </small>
          </div>
        </Link>

        <Link to="/earn">
          <div
            data-testid="navigation-item-earn"
            className="flex flex-col w-12 text-center items-center"
            role="button"
          >
            <span className="flex justify-center mb-0.5">
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={isActive("/earn") ? "text-[#0500FF]" : "opacity-[30%]"}
              >
                <path
                  className="text-iconNormal opacity-[60%]"
                  d="M22.668 16H2.66797V22H22.668V16Z"
                  fill="currentColor"
                  
                ></path>
                <path
                  className="text-textDisabled "
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.4648 10.7988C21.4648 5.93937 17.5255 2 12.666 2C7.80656 2 3.86719 5.93937 3.86719 10.7988C3.86719 14.1599 5.75169 17.0807 8.52171 18.5625H16.8103C19.5803 17.0807 21.4648 14.1599 21.4648 10.7988ZM8.89509 10.7988L12.666 14.5698L16.4369 10.7988L12.666 7.0279L8.89509 10.7988Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <small className={isActive("/earn") ? "text-[#0500FF] font-medium" : "text-primary font-medium"}>
              Earn
            </small>
          </div>
        </Link>

        <Link to="/stor">
          <div
            data-testid="navigation-item-history"
            className="flex flex-col w-12 text-center items-center"
            role="button"
          >
            <span className="flex justify-center mb-0.5">
              <svg
                fill="none"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
                className={isActive("/stor") ? "text-[#0500FF]" : "opacity-[30%]"}
              >
                <path
                  className="text-iconNormal opacity-[50%]"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.6009 22H4.5V2H14.5L20.5 8V10.6738C19.5908 10.2419 18.5737 10.0002 17.5001 10.0002C13.6341 10.0002 10.5001 13.1343 10.5001 17.0002C10.5001 18.9588 11.3045 20.7295 12.6009 22ZM7.5 6H11.5V8H7.5V6Z"
                  fill="currentColor"
                ></path>
                <path
                  className="text-iconNormal"
                  d="M14.5 2V8H20.5L14.5 2Z"
                  fill="currentColor"
                ></path>
                <path
                  className="text-textDisabled"
                  d="M13.8929 11H7.5V13H11.755C12.3182 12.1926 13.0474 11.5094 13.8929 11Z"
                  fill="currentColor"
                ></path>
                <path
                  className="text-textDisabled"
                  d="M10.571 16C10.5243 16.3267 10.5001 16.6606 10.5001 17.0002C10.5001 17.3397 10.5243 17.6735 10.571 18H7.5V16H10.571Z"
                  fill="currentColor"
                ></path>
                <path
                  className="text-textDisabled"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5 17C22.5 14.2386 20.2614 12 17.5 12C14.7386 12 12.5 14.2386 12.5 17C12.5 19.7614 14.7386 22 17.5 22C20.2614 22 22.5 19.7614 22.5 17ZM18.25 16.6893V13.5935H16.75V17.3107L18.9819 19.5426L20.0426 18.4819L18.25 16.6893Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <small className={isActive("/stor") ? "text-[#0500FF] font-medium" : "text-primary font-medium"}>
              История
            </small>
          </div>
        </Link>

        <Link to="/set">
          <div
            data-testid="navigation-item-settings"
            className="flex flex-col w-12 text-center items-center"
            role="button"
          >
            <span className="flex justify-center mb-0.5">
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={isActive("/set") ? "text-[#0500FF]" : "opacity-[30%]"}
              >
                <path
                  className="text-textDisabled"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9854 4.3911L17.0516 5.58574L19.7229 5.4254L21.5411 8.57458L20.0672 10.8069V13.1931L21.5411 15.4254L19.7229 18.5746L17.0516 18.4143L14.9854 19.6089L13.7899 22H10.1535L8.95798 19.6089L6.89185 18.4142L4.22053 18.5746L2.40234 15.4254L3.87625 13.1931V10.8069L2.40234 8.5746L4.22053 5.42542L6.89185 5.58576L8.95798 4.3911L10.1535 2H13.7899L14.9854 4.3911ZM11.9955 6.5457C15.0079 6.5457 17.45 8.98778 17.45 12.0002C17.45 15.0127 15.0079 17.4548 11.9955 17.4548C8.98299 17.4548 6.54091 15.0127 6.54091 12.0002C6.54091 8.98778 8.98299 6.5457 11.9955 6.5457Z"
                  fill="currentColor"
                ></path>
                <path
                  className="text-iconNormal"
                  d="M9.26953 12.0002L11.9968 9.27295L14.7241 12.0002L11.9968 14.7275L9.26953 12.0002Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <small className={isActive("/set") ? "text-[#0500FF] font-medium" : "text-primary font-medium"}>
              Настройки
            </small>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Footer;

