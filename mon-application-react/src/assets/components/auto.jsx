import React from "react";
import { Link } from "react-router-dom";

const StartMenu = () => {
  return (
    <div
      className="relative flex flex-col flex-1 w-full h-full self-center m-auto
      
      md:max-w-[438px] p-2"
    >
      <div className="flex my-11 justify-center">
        <svg
          fill="none"
          width="62"
          height="87"
          viewBox="0 0 62 87"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_25278_20289)">
            <path
              d="M0 26.9363L30.5839 16.9512V86.0767C8.73806 76.8594 0 59.1941 0 49.2089V26.935V26.9363Z"
              fill="#0500FF"
            ></path>
            <path
              d="M61.1698 26.9363L30.5859 16.9512V86.0767C52.4318 76.8594 61.1698 59.1941 61.1698 49.2103V26.9363Z"
              fill="url(#paint0_linear_25278_20289)"
            ></path>
            <path
              d="M12.0424 0.342773H16.3099V2.73341C17.7089 0.584462 19.3179 0.342773 21.674 0.342773V4.56886H20.6009C17.778 4.56886 16.4259 5.89745 16.4259 8.5284V13.0197H12.041V0.342773H12.0424Z"
              fill="#0500FF"
            ></path>
            <path
              d="M35.9182 13.0183H31.5333V11.8098C30.5762 12.9216 29.2711 13.4036 27.6621 13.4036C24.6072 13.4036 22.8809 11.593 22.8809 8.26047V0.342773H27.2658V7.273C27.2658 8.8419 28.035 9.75893 29.3401 9.75893C30.6453 9.75893 31.5333 8.86538 31.5333 7.34482V0.342773H35.9182V13.0196V13.0183Z"
              fill="#0500FF"
            ></path>
            <path
              d="M36.9883 9.10444H41.0942C41.282 10.0215 41.9104 10.4068 43.4255 10.4068C44.6615 10.4068 45.3852 10.1182 45.3852 9.58644C45.3852 9.17488 45.0344 8.90971 44.0331 8.69288L40.7213 7.94434C38.5061 7.43887 37.386 6.15861 37.386 4.10496C37.386 1.39943 39.3679 -0.000976562 43.2155 -0.000976562C47.0632 -0.000976562 48.9525 1.36352 49.2798 4.28588H45.1988C45.1297 3.51386 44.3356 3.04153 43.0305 3.04153C41.9822 3.04153 41.3055 3.37851 41.3055 3.88675C41.3055 4.3204 41.7475 4.65877 42.6355 4.87836L46.1103 5.72358C48.3946 6.27739 49.4925 7.43749 49.4925 9.32127C49.4925 11.9301 47.2303 13.4755 43.384 13.4755C39.5377 13.4755 36.9938 11.81 36.9938 9.10444H36.9897H36.9883Z"
              fill="#0500FF"
            ></path>
            <path
              d="M61.1684 4.28436V0.342773H50.3477V4.28712H53.5766V13.0183H57.938V4.28436H61.1684Z"
              fill="#0500FF"
            ></path>
            <path
              d="M10.8227 4.28436V0.342773H0.00195312V4.28712H3.2309V13.0183H7.59234V4.28436H10.8213H10.8227Z"
              fill="#0500FF"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_25278_20289"
              x1="53.1099"
              y1="12.1326"
              x2="29.8181"
              y2="85.092"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.02" stopColor="#0000FF"></stop>
              <stop offset="0.08" stopColor="#0094FF"></stop>
              <stop offset="0.16" stopColor="#48FF91"></stop>
              <stop offset="0.42" stopColor="#0094FF"></stop>
              <stop offset="0.68" stopColor="#0038FF"></stop>
              <stop offset="0.9" stopColor="#0500FF"></stop>
            </linearGradient>
            <clipPath id="clip0_25278_20289">
              <rect width="61.1691" height="86.0768" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative flex flex-col flex-grow w-full h-full self-center pt-2 md:max-w-[438px]">
        <div className="bg-backgroundPrimary border border-line rounded p-6 mb-11">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2
              data-testid="onboarding-step-title"
              className="screamer-text text-textPrimary font-bold  text-unset text-[26px]"
            >
              Добро пожаловать в Trust Wallet Extension
            </h2>
            <p className="title-text text-textSecondary font-normal   text-unset">
              Мультичейн-кошелек, которому доверяют миллионы людей
            </p>
            <div className="w-full mt-6 flex flex-col space-y-6">
              <div className="flex flex-col space-y-6">
                <div
                  role="button"
                  className="outline-0  cursor-pointer"
                  tabIndex="0"
                >

                    <div className="flex items-center justify-between py-4 pl-3 pr-4">
                      <div className="flex items-center text-start space-x-4">
                        <div className="flex w-6 h-6">
                          <svg
                            className="opacity-[50%] text-iconNormal"
                            fill="none"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM10.75 13.25V18H13.25V13.25H18V10.75H13.25V6H10.75V10.75H6V13.25H10.75Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <p className="title-text text-textPrimary font-medium   text-unset">
                            Создать новый кошелек
                          </p>
                          <p className="title-text text-textSecondary font-normal   text-unset">
                            Начните заново с новым кошельком
                          </p>
                        </div>
                      </div>
                      <svg
                        className=" opacity-[50%]"
                        fill="none"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99903 10.75L2.99903 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>

                </div>
                <div className="border-t border-line my-2"></div>
                <div
                  role="button"
                  className="outline-0  cursor-pointer"
                  tabIndex="0"
                >
                  <Link to="/imp">
                    <div className="flex items-center justify-between py-4 pl-3 pr-4">
                      <div className="flex items-center text-start space-x-4">
                        <div className="flex w-6 h-6">
                          <svg
                            className=" opacity-[50%]"
                            fill="none"
                            width="20"
                            height="22"
                            viewBox="0 0 20 22"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 3.17778L9.99992 0V22C2.85712 19.0667 0 13.4444 0 10.2667V3.17778ZM20 3.17778L10.0001 0V1.82357L9.99997 1.82354V20.2132C10 20.2132 10 20.2132 10.0001 20.2132V22C17.1429 19.0667 20 13.4444 20 10.2667V3.17778ZM10.0001 20.2132C15.9706 17.7612 18.3588 13.0617 18.3588 10.4054V4.47982L10.0001 1.82357V20.2132Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <p className="title-text text-textPrimary font-medium   text-unset">
                            Импортировать или восстановить кошелек
                          </p>
                          <p className="title-text text-textSecondary font-normal   text-unset">
                            Импортируйте с помощью Secret Phrase
                          </p>
                        </div>
                      </div>
                      <svg
                        className=" opacity-[50%]"
                        fill="none"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99903 10.75L2.99903 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div
                  role="button"
                  className="outline-0  cursor-pointer"
                  tabIndex="0"
                >
                  <div className="flex items-center justify-between py-4 pl-3 pr-4">
                    <div className="flex items-center text-start space-x-4">
                      <div className="flex w-6 h-6">
                        <svg
                          className=" opacity-[50%]"
                          fill="none"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0868 0.491219H6.22266V9.75402H15.4855V2.88989C15.4862 2.57467 15.4248 2.2624 15.3045 1.97102C15.1842 1.67964 15.0076 1.41489 14.7847 1.192C14.5618 0.969103 14.297 0.792448 14.0057 0.672186C13.7143 0.551923 13.402 0.490423 13.0868 0.491219Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M4.0799 0.491305H2.90018C2.58242 0.488487 2.26727 0.548997 1.97315 0.669302C1.67903 0.789607 1.41182 0.967297 1.18712 1.192C0.962414 1.4167 0.784724 1.68391 0.66442 1.97803C0.544115 2.27216 0.483605 2.5873 0.486422 2.90506V4.08479H4.0799V0.491305Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M4.08035 6.20898H0.501953V9.78738H4.08035V6.20898Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M11.9395 15.4719H13.1222C13.44 15.4747 13.7551 15.4142 14.0492 15.2939C14.3433 15.1736 14.6106 14.9959 14.8353 14.7712C15.06 14.5465 15.2377 14.2793 15.358 13.9851C15.4783 13.691 15.5388 13.3759 15.536 13.0581V11.9297H11.9395V15.4719Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M9.80105 11.9297H6.22266V15.5081H9.80105V11.9297Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M0.502047 11.9297V13.1124C0.49923 13.4302 0.559739 13.7453 0.680044 14.0395C0.800349 14.3336 0.978039 14.6008 1.20274 14.8255C1.42744 15.0502 1.69465 15.2279 1.98878 15.3482C2.2829 15.4685 2.59804 15.529 2.91581 15.5262H4.09553V11.9297H0.502047Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <p className="title-text text-textPrimary font-medium   text-unset">
                          Ledger
                        </p>
                        <p className="title-text text-textSecondary font-normal   text-unset">
                          Подключите свой кошелек Ledger
                        </p>
                      </div>
                    </div>
                    <svg
                      className=" opacity-[50%]"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99903 10.75L2.99903 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
