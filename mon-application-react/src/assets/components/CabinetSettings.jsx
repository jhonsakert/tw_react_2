import React from "react";
import Footer from "./CabinetFooter";
import { Link } from "react-router-dom";


const Settings = () => {
  return (
    <div className="flex flex-col justify-between">
      <div
        className=" flex flex-col flex-1 w-full h-full md:max-w-[438px] px-2 pt-2 m-auto" style={{ maxHeight: '920px', overflowY: 'auto' }}>
        
        <div className="flex items-center w-full h-full self-center space-x-4 pb-2 md:max-w-[438px]">
          <div className="w-7"></div>
          <div className="flex-grow text-center overflow-hidden">
            <h3 className="header-text text-textPrimary font-semibold truncate text-[21px] text-unset">
              Настройки
            </h3>
          </div>
          <div className="w-7"></div>
        </div>
        <div className=" flex flex-col flex-grow w-full h-full self-center pt-2 md:max-w-[438px]">
          <div className=" flex flex-1 w-full">
            <div className=" flex flex-1 flex-col w-full h-full top-0 left-0 items-stretch justify-stretch tw-scrollbar">
              <div className="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 bg-bg3">
                <div className="flex items-center flex-row space-x-4">
                  <div>
                    <svg
                      fill="none"
                      width="45"
                      height="21"
                      viewBox="0 0 45 21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="3.5"
                        width="17"
                        height="17"
                        rx="8.5"
                        fill="#0500FF"
                      ></rect>
                      <mask id="path-2-inside-1_23913_25810" fill="white">
                        <path d="M9.12426 7.6317C9.12426 7.63381 9.1229 7.63568 9.12089 7.63633L5.94212 8.66499C5.52952 8.79851 5.25 9.18275 5.25 9.61641V11.7084C5.25 12.9668 6.35648 15.1893 9.12047 16.3601C9.12274 16.361 9.12426 16.3633 9.12426 16.3658C9.12426 16.3702 9.12873 16.3731 9.13278 16.3714C9.13406 16.3709 9.13534 16.3704 9.13662 16.3698C9.13884 16.3689 9.14133 16.3689 9.14354 16.3698C9.14482 16.3704 9.14611 16.3709 9.14739 16.3714C9.15144 16.3731 9.15591 16.3702 9.15591 16.3658C9.15591 16.3633 9.15743 16.361 9.1597 16.3601C11.9237 15.1893 13.0302 12.9668 13.0302 11.7084V9.61641C13.0302 9.18275 12.7506 8.79851 12.3381 8.66499L9.15928 7.63633C9.15727 7.63568 9.15591 7.63381 9.15591 7.6317C9.15591 7.62839 9.15268 7.62604 9.14953 7.62706L9.1431 7.62914C9.14114 7.62978 9.13903 7.62978 9.13707 7.62914L9.13063 7.62706C9.12749 7.62604 9.12426 7.62839 9.12426 7.6317Z"></path>
                      </mask>
                      <path
                        d="M9.13063 7.62706L9.50009 6.48535L9.13063 7.62706ZM9.15928 7.63633L9.52874 6.49462L9.15928 7.63633ZM9.1597 16.3601L9.62776 17.465L9.1597 16.3601ZM9.14739 16.3714L9.61158 15.2648L9.14739 16.3714ZM9.13278 16.3714L8.66857 15.2649L9.13278 16.3714ZM9.12047 16.3601L8.65241 17.465L9.12047 16.3601ZM9.1431 7.62914L9.51256 8.77085L9.1431 7.62914ZM9.13707 7.62914L8.76761 8.77085L9.13707 7.62914ZM9.12089 7.63633L8.75143 6.49462L9.12089 7.63633ZM9.13662 16.3698L9.60137 17.4762L9.13662 16.3698ZM9.14354 16.3698L9.60827 15.2635L9.14354 16.3698ZM9.14953 7.62706L8.78007 6.48535L9.14953 7.62706ZM6.31158 9.8067L9.49035 8.77804L8.75143 6.49462L5.57266 7.52328L6.31158 9.8067ZM6.45 11.7084V9.61641H4.05V11.7084H6.45ZM9.58852 15.2551C7.19243 14.2401 6.45 12.4076 6.45 11.7084H4.05C4.05 13.526 5.52053 16.1384 8.65241 17.465L9.58852 15.2551ZM9.59699 17.478C9.59845 17.4774 9.59991 17.4768 9.60137 17.4762L8.67188 15.2635C8.67078 15.2639 8.66967 15.2644 8.66857 15.2649L9.59699 17.478ZM9.61158 15.2648C9.61048 15.2644 9.60937 15.2639 9.60827 15.2635L8.67881 17.4762C8.68027 17.4768 8.68174 17.4774 8.6832 17.478L9.61158 15.2648ZM9.62776 17.465C12.7596 16.1384 14.2302 13.526 14.2302 11.7084H11.8302C11.8302 12.4076 11.0877 14.2401 8.69164 15.2551L9.62776 17.465ZM14.2302 11.7084V9.61641H11.8302V11.7084H14.2302ZM12.7075 7.52328L9.52874 6.49462L8.78982 8.77804L11.9686 9.8067L12.7075 7.52328ZM9.51256 8.77085L9.51899 8.76877L8.78007 6.48535L8.77364 6.48744L9.51256 8.77085ZM9.50653 6.48744L9.50009 6.48535L8.76117 8.76877L8.76761 8.77085L9.50653 6.48744ZM9.50009 6.48535C8.72188 6.23352 7.92426 6.81375 7.92426 7.6317H10.3243C10.3243 8.44303 9.5331 9.01857 8.76117 8.76877L9.50009 6.48535ZM9.52874 6.49462C10.0219 6.65421 10.3559 7.11346 10.3559 7.6317H7.9559C7.9559 8.15416 8.29264 8.61715 8.78982 8.77804L9.52874 6.49462ZM14.2302 9.61641C14.2302 8.66235 13.6152 7.81702 12.7075 7.52328L11.9686 9.8067C11.8861 9.78 11.8302 9.70315 11.8302 9.61641H14.2302ZM10.3559 16.3658C10.3559 16.8558 10.0593 17.2822 9.62776 17.465L8.69164 15.2551C8.25558 15.4398 7.9559 15.8707 7.9559 16.3658H10.3559ZM8.6832 17.478C9.47895 17.8118 10.3559 17.2267 10.3559 16.3658H7.9559C7.9559 15.5136 8.82393 14.9344 9.61158 15.2648L8.6832 17.478ZM7.92426 16.3658C7.92426 17.2267 8.80123 17.8118 9.59699 17.478L8.66857 15.2649C9.45623 14.9344 10.3243 15.5136 10.3243 16.3658H7.92426ZM8.65241 17.465C8.2209 17.2822 7.92426 16.8558 7.92426 16.3658H10.3243C10.3243 15.8707 10.0246 15.4398 9.58852 15.2551L8.65241 17.465ZM8.77364 6.48744C9.01185 6.41035 9.26831 6.41035 9.50653 6.48744L8.76761 8.77085C9.00974 8.84921 9.27042 8.84921 9.51256 8.77085L8.77364 6.48744ZM9.49035 8.77804C9.98752 8.61715 10.3243 8.15416 10.3243 7.6317H7.92426C7.92426 7.11346 8.25828 6.65421 8.75143 6.49462L9.49035 8.77804ZM9.60137 17.4762C9.30633 17.6001 8.97384 17.6001 8.67881 17.4762L9.60827 15.2635C9.30882 15.1377 8.97134 15.1377 8.67188 15.2635L9.60137 17.4762ZM10.3559 7.6317C10.3559 6.81375 9.55829 6.23352 8.78007 6.48535L9.51899 8.76877C8.74707 9.01857 7.9559 8.44303 7.9559 7.6317H10.3559ZM5.57266 7.52328C4.66494 7.81702 4.05 8.66235 4.05 9.61641H6.45C6.45 9.70315 6.3941 9.78 6.31158 9.8067L5.57266 7.52328Z"
                        fill="white"
                        mask="url(#path-2-inside-1_23913_25810)"
                      ></path>
                      <rect
                        x="0.5"
                        y="3.5"
                        width="17"
                        height="17"
                        rx="8.5"
                        stroke="#FAFAFA"
                      ></rect>
                      <rect
                        x="12.5"
                        y="3.5"
                        width="17"
                        height="17"
                        rx="8.5"
                        fill="url(#paint0_linear_23913_25810)"
                      ></rect>
                      <path
                        d="M23.3 8L22.5 8.8L23.3 9.6L24.1 8.8L23.3 8Z"
                        fill="white"
                      ></path>
                      <path
                        d="M18.1 14L17.5 14.6L18.1 15.2L18.7 14.6L18.1 14Z"
                        fill="white"
                      ></path>
                      <path
                        d="M23.5 14L22.5 15L23.5 16L24.5 15L23.5 14Z"
                        fill="white"
                      ></path>
                      <path
                        d="M20.5 9L17.5 12L20.5 15L23.5 12L20.5 9ZM19.5024 12L20.5 11.0024L21.4976 12L20.5 12.9976L19.5024 12Z"
                        fill="white"
                      ></path>
                      <rect
                        x="12.5"
                        y="3.5"
                        width="17"
                        height="17"
                        rx="8.5"
                        stroke="#FAFAFA"
                      ></rect>
                      <rect
                        x="24.5"
                        y="3.5"
                        width="17"
                        height="17"
                        rx="8.5"
                        fill="#5E6673"
                      ></rect>
                      <path
                        d="M33.625 8.25H32.375V11.375H29.25V12.625H32.375V15.75H33.625V12.625H36.75V11.375L33.625 11.375V8.25Z"
                        fill="white"
                      ></path>
                      <rect
                        x="24.5"
                        y="3.5"
                        width="17"
                        height="17"
                        rx="8.5"
                        stroke="#FAFAFA"
                      ></rect>
                      <circle
                        cx="41.9167"
                        cy="2.91667"
                        r="2.91667"
                        fill="#E33B54"
                      ></circle>
                      <defs>
                        <linearGradient
                          id="paint0_linear_23913_25810"
                          x1="21"
                          y1="4"
                          x2="21"
                          y2="20"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.09375" stopColor="#2ECCFF"></stop>
                          <stop offset="1" stopColor="#0500FF"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <p className="title-text text-textPrimary font-medium   text-unset">
                      Управление кошельками
                    </p>
                    <p className="title-text text-textSecondary font-normal   text-unset">
                      Просмотр и редактирование всех кошельков
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    className="text-iconNormal"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2886 11.9993L8.3996 8.11035L10.1674 6.34258L15.8242 11.9994L14.0565 13.7672L14.0563 13.7671L10.1672 17.6562L8.39941 15.8885L12.2886 11.9993Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 ">
                <div className="flex items-center flex-row space-x-4">
                  <div>
                    <svg
                      className="text-iconNormal"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 4H4V11H11V9H13V9.40723L9.40723 13H4V20H11V18H13V20H20V13H13V16H11V14.2357L14.2357 11H20V4H13V7H11V4ZM8.5 6.5H6.5V8.5H8.5V6.5ZM8.5 15.5H6.5V17.5H8.5V15.5ZM15.5 6.5H17.5V8.5H15.5V6.5ZM17.5 15.5H15.5V17.5H17.5V15.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="title-text text-textPrimary font-medium   text-unset">
                      Сеть
                    </p>
                    <p className="title-text text-textSecondary font-normal   text-unset">
                      Ethereum
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    className="text-iconNormal"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2886 11.9993L8.3996 8.11035L10.1674 6.34258L15.8242 11.9994L14.0565 13.7672L14.0563 13.7671L10.1672 17.6562L8.39941 15.8885L12.2886 11.9993Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 ">
                <div className="flex items-center flex-row space-x-4">
                  <div>
                    <svg
                      className="text-iconNormal"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.37918 8.50049L4.43987 10.4398C1.92109 12.9586 1.92108 17.0423 4.43987 19.5611C6.95865 22.0799 11.0424 22.0799 13.5612 19.5611L15.5005 17.6218L13.3792 15.5005L11.4399 17.4398C10.0927 18.787 7.9084 18.787 6.56119 17.4398C5.21398 16.0926 5.21398 13.9083 6.56119 12.5611L8.5005 10.6218L6.37918 8.50049Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12.5612 6.56119C13.9084 5.21398 16.0926 5.21398 17.4398 6.56119C18.7871 7.9084 18.7871 10.0927 17.4398 11.4399L15.5005 13.3792L17.6218 15.5005L19.5612 13.5612C22.0799 11.0424 22.0799 6.95865 19.5612 4.43987C17.0424 1.92108 12.9586 1.92109 10.4398 4.43987L8.50052 6.37919L10.6218 8.50051L12.5612 6.56119Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.81117 16.3112L7.68985 14.1898L14.1899 7.68984L16.3112 9.81116L9.81117 16.3112Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="title-text text-textPrimary font-medium   text-unset">
                      Подключенные dApp
                    </p>
                    <p className="title-text text-textSecondary font-normal   text-unset">
                      0
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    className="text-iconNormal"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2886 11.9993L8.3996 8.11035L10.1674 6.34258L15.8242 11.9994L14.0565 13.7672L14.0563 13.7671L10.1672 17.6562L8.39941 15.8885L12.2886 11.9993Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 ">
                <div className="flex items-center flex-row space-x-4">
                  <div>
                    <svg
                      className="text-iconNormal"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="3"
                        fill="currentColor"
                      ></rect>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 2H9V4H15V2ZM19 7H5V21H19V7ZM10.5 9H8V18H10.5V9ZM13.5 9H16V18H13.5V9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="title-text text-textPrimary font-medium   text-unset">
                      Заблокированные dApp
                    </p>
                    <p className="title-text text-textSecondary font-normal   text-unset"></p>
                  </div>
                </div>
                <div>
                  <svg
                    className="text-iconNormal"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2886 11.9993L8.3996 8.11035L10.1674 6.34258L15.8242 11.9994L14.0565 13.7672L14.0563 13.7671L10.1672 17.6562L8.39941 15.8885L12.2886 11.9993Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 ">
                <div className="flex items-center flex-row space-x-4">
                  <div>
                    <svg
                      className="text-iconNormal"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.55528 6.30998L1 12L6.55528 17.69C9.56231 20.77 14.4377 20.77 17.4447 17.69L23 12L17.4447 6.30998C14.4377 3.23001 9.56232 3.23 6.55528 6.30998ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="title-text text-textPrimary font-medium   text-unset">
                      Показать Secret Phrase
                    </p>
                    <p className="title-text text-textSecondary font-normal   text-unset"></p>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 ">
                <div className="flex items-center flex-row space-x-4">
                  <div>
                    <svg
                      className="text-iconNormal"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.2307 20.4027C18.2316 19.2481 20.4577 16.5321 20.9137 13.25H16.9718C16.8248 16.1102 16.1791 18.638 15.2307 20.4027ZM14.473 13.25C14.2952 17.3518 13.2556 20.5 11.9998 20.5C10.744 20.5 9.70447 17.3518 9.52667 13.25H14.473ZM14.473 10.75H9.52667C9.70447 6.64821 10.744 3.5 11.9998 3.5C13.2556 3.5 14.2952 6.64821 14.473 10.75ZM16.9718 10.75H20.9137C20.4577 7.46786 18.2316 4.75191 15.2307 3.59731C16.1791 5.36198 16.8248 7.88979 16.9718 10.75ZM7.03566 10.75C7.18282 7.88774 7.82928 5.35836 8.77882 3.59353C5.77291 4.74598 3.54249 7.46427 3.08594 10.75H7.03566ZM7.03566 13.25H3.08594C3.54249 16.5357 5.77291 19.254 8.77882 20.4065C7.82928 18.6416 7.18282 16.1123 7.03566 13.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="title-text text-textPrimary font-medium   text-unset">
                      Язык
                    </p>
                    <p className="title-text text-textSecondary font-normal   text-unset">
                      Русский
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    className="text-iconNormal"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2886 11.9993L8.3996 8.11035L10.1674 6.34258L15.8242 11.9994L14.0565 13.7672L14.0563 13.7671L10.1672 17.6562L8.39941 15.8885L12.2886 11.9993Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 ">
                <div className="flex items-center flex-row space-x-4">
                  <div>
                    <svg
                      className="text-iconNormal"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0002 2.5C6.7785 2.5 4.16683 5.11167 4.16683 8.33333V10.8333L3.3335 11.6667V13.3333H4.16683H15.8335H16.6668V11.6667L15.8335 10.8333L15.8335 8.33333C15.8335 5.11167 13.2218 2.5 10.0002 2.5ZM10.0001 17.5C8.29154 17.5 6.82314 16.4716 6.18018 15H13.8201C13.1771 16.4716 11.7087 17.5 10.0001 17.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="title-text text-textPrimary font-medium   text-unset">
                      Уведомления
                    </p>
                    <p className="title-text text-textSecondary font-normal   text-unset"></p>
                  </div>
                </div>
                <div>
                  <svg
                    className="text-iconNormal"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2886 11.9993L8.3996 8.11035L10.1674 6.34258L15.8242 11.9994L14.0565 13.7672L14.0563 13.7671L10.1672 17.6562L8.39941 15.8885L12.2886 11.9993Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 ">
                <div className="flex items-center flex-row space-x-4">
                  <div>
                    <svg
                      className="text-iconNormal"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.9999 8.26683C11.4109 8.26683 10.9335 8.74428 10.9335 9.33325V9.75981H8.80065V9.33325C8.80065 7.56635 10.233 6.13399 11.9999 6.13399C13.7668 6.13399 15.1992 7.56635 15.1992 9.33325C15.1992 10.2164 14.8399 11.0177 14.2621 11.5955L13.0663 12.7913V14.0255H10.9335V11.9078L12.754 10.0873C12.9481 9.89317 13.0663 9.62802 13.0663 9.33325C13.0663 8.74428 12.5889 8.26683 11.9999 8.26683ZM10.9335 17.8646V15.7318H13.0663V17.8646H10.9335Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="title-text text-textPrimary font-medium   text-unset">
                      Помощь и поддержка
                    </p>
                    <p className="title-text text-textSecondary font-normal   text-unset"></p>
                  </div>
                </div>
                <div>
                  <svg
                    className="text-iconNormal"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2886 11.9993L8.3996 8.11035L10.1674 6.34258L15.8242 11.9994L14.0565 13.7672L14.0563 13.7671L10.1672 17.6562L8.39941 15.8885L12.2886 11.9993Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="border-t border-line my-2"></div>
              <div className="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 ">
                <div className="flex items-center flex-row space-x-4">
                  <div>
                    <svg
                      className="text-iconNormal"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 8V10L5 10V21H19V10L17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8ZM14.5 10V8C14.5 6.61929 13.3807 5.5 12 5.5C10.6193 5.5 9.5 6.61929 9.5 8V10H14.5ZM13.5 18V13H10.5V18H13.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="title-text text-textPrimary font-medium   text-unset">
                      Заблокировать
                    </p>
                    <p className="title-text text-textSecondary font-normal   text-unset"></p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
