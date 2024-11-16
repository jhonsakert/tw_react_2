import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/img1.png";
import Footer from "./CabinetFooter";

const Main = () => {
  return (
    <div className="flex flex-col flex-1 w-full h-full md:max-w-[438px] px-2 pt-2 m-auto">
      <button data-testid="backup-seedphrase-alert" className="bg-[#FEF6D8] p-[15px] flex items-center justify-between">
        <svg
          className="text-orange-300"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM10.75 15.5V18H13.25V15.5H10.75ZM10.75 6V13H13.25V6H10.75Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="text-textBrand caption-text flex-1 text-start">
          <div className="flex items-center justify-between">
            <div>
              <p className=" text-[#C99400] font-semibold text-[16px]">
                Создайте резервную копию сид-фразы сейчас
              </p>
            </div>
            <div className="pt-1">
              <svg
                className=" text-orange-700 opacity-[50%]"
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
        </div>
      </button>

      <div className="flex justify-between pt-[20px]">
        <div className="flex gap-[5px] items-center">
          <svg
            className="text-[#0500FF]"
            fill="none"
            width="16"
            height="19"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3.09998L7.99993 0.5V18.4998C2.28569 16.0999 0 11.4999 0 8.89993V3.09998ZM16 3.09998L8.00007 0.5V1.992L7.99997 1.99197V17.0379C8 17.0379 8.00004 17.0379 8.00007 17.0379V18.4998C13.7143 16.0999 16 11.4999 16 8.89993V3.09998ZM8.00007 17.0379C12.7765 15.0318 14.6871 11.1867 14.6871 9.01342V4.16528L8.00007 1.992V17.0379Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className=" font-semibold">Mnemonic 1</p>
          <svg
            className=" opacity-[50%]"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 8.49023V10.7402L12 15.5102L7.5 10.7402V8.49023H16.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="flex gap-[15px]">
          <button>
            <img src={img1} alt="" className="w-[22px]"/>
          </button>
          <button>
            <svg
              className=" opacity-[50%] bg-gray-100 p-[5px] rounded-sm"
              fill="none"
              width="30"
              height="30"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.45557 3.89441H20.4556V16.8944H17.4556V6.89441H9.45557V3.89441ZM4.45557 8.89441V21.8944H15.4556V8.91477L4.45557 8.89441Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              className=" opacity-[50%] bg-gray-100 p-[5px] rounded-sm"
              fill="none"
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667C13.3333 11.4679 11.4679 13.3333 9.16667 13.3333C6.86548 13.3333 5 11.4679 5 9.16667C5 6.86548 6.86548 5 9.16667 5ZM9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667C15.8333 10.3256 15.5376 11.4154 15.0175 12.3649L17.5763 14.9238L16.2505 16.2496L14.9248 17.5753L12.3663 15.0167C11.4166 15.5373 10.3262 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              className=" opacity-[50%] bg-gray-100 p-[5px] rounded-sm"
              fill="none"
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33203 8.33325H11.6654V11.6666H8.33203V8.33325Z"
                fill="currentColor"
              ></path>
              <path
                d="M14.168 8.33325H17.5013V11.6666H14.168V8.33325Z"
                fill="currentColor"
              ></path>
              <path
                d="M2.5 8.33325H5.83333V11.6666H2.5V8.33325Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="">
          <h2 className="font-semibold text-[32px]">
            0,00&nbsp;$
          </h2>
        </div>
        <div>
          <div
            data-tooltip-id="refresh-balance-tooltip-4"
            data-tooltip-content="Обновить"
          >
            <div
              className="flex w-full"
              data-tooltip-id="button-tooltip-5"
              data-tooltip-place="top-end"
            >
              <button
                data-testid="refresh-wallet-button"
                type="button"
                className="outline-none bg-transparent text-backgroundPrimary circle-button  p-0 w-full"
              >
                <svg
                  className=" opacity-[40%]"
                  fill="none"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.6631 10.1751C16.6646 10.1169 16.6654 10.0585 16.6654 9.99992C16.6654 9.94134 16.6646 9.88294 16.6631 9.82472V10.1751ZM12.944 12.9475L10.7705 10.774H16.6631V16.6666L14.7116 14.7151C13.5053 15.9209 11.8391 16.6666 9.9987 16.6666C6.89226 16.6666 4.28207 14.5419 3.54203 11.6665H6.1791C6.82204 13.1381 8.29047 14.1666 9.9991 14.1666C11.149 14.1666 12.1901 13.7008 12.944 12.9475ZM16.4553 8.33325C15.7153 5.45787 13.1051 3.33325 9.9987 3.33325C8.15802 3.33325 6.49156 4.07923 5.28518 5.28535L3.33308 3.33325V9.22581H9.22564L7.05315 7.05332C7.80714 6.29949 8.84867 5.83325 9.9991 5.83325C11.7077 5.83325 13.1761 6.86166 13.8191 8.33325H16.4553ZM3.33203 9.99992C3.33203 9.95686 3.33244 9.91391 3.33325 9.87105V10.1288C3.33244 10.0859 3.33203 10.043 3.33203 9.99992Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 pt-[10px]">
        <div className="flex flex-col space-y-2 items-center">
          <div
            data-tooltip-id="circle-action-tooltip-76"
            data-tooltip-place="top"
          >
            <div
              className="flex w-full"
              data-tooltip-id="button-tooltip-77"
              data-tooltip-place="top-end"
            >
              <button
                data-testid="wallet-board-send-button"
                type="button"
                className="bg-gray-100 p-[12px] rounded-full"
              >
                <svg
                  className="text-textPrimary"
                  fill="none"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.002 2.49903L15.8945 8.39158L14.4214 9.86472L11.0426 6.48597L11.0426 17.4998L8.95931 17.4998L8.95931 6.48697L5.58156 9.86472L4.10842 8.39158L10.001 2.49903L10.0015 2.49953L10.002 2.49903Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="body-text text-textPrimary font-medium   text-unset">
              Отправить
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <div
            data-tooltip-id="circle-action-tooltip-78"
            data-tooltip-place="top"
          >
            <div
              className="flex w-full"
              data-tooltip-id="button-tooltip-79"
              data-tooltip-place="top-end"
            >
              <button
                data-testid="wallet-board-receive-button"
                type="button"
                className="bg-gray-100 p-[12px] rounded-full"
              >
                <svg
                  className="text-textPrimary"
                  fill="none"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.99803 17.4993L4.10547 11.6067L5.57861 10.1336L8.95736 13.5123L8.95736 2.49845L11.0407 2.49845L11.0407 13.5113L14.4184 10.1336L15.8916 11.6067L9.99902 17.4993L9.99852 17.4988L9.99803 17.4993Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="body-text text-textPrimary font-medium   text-unset">
              Получить
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <div
            data-tooltip-id="circle-action-tooltip-80"
            data-tooltip-place="top"
          >
            <div
              className="flex w-full"
              data-tooltip-id="button-tooltip-81"
              data-tooltip-place="top-end"
            >
              <button
                data-testid="wallet-board-swap-button"
                type="button"
                className="bg-gray-100 p-[12px] rounded-full"
              >
                <svg
                  className="text-textPrimary"
                  fill="none"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.49984 7.50016L2.49984 5.00016L13.7498 5.00016V2.0835L17.9165 6.25016L13.7498 10.4168V7.50016L2.49984 7.50016ZM17.4998 15.0002V12.5002L5.83317 12.5002L5.83317 9.5835L1.6665 13.7502L5.83317 17.9168L5.83317 15.0002L17.4998 15.0002Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="body-text text-textPrimary font-medium   text-unset">
              Своп
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <div
            data-tooltip-id="circle-action-tooltip-82"
            data-tooltip-place="top"
          >
            <div
              className="flex w-full"
              data-tooltip-id="button-tooltip-83"
              data-tooltip-place="top-end"
            >
              <button
                data-testid="wallet-board-buy-sell-button"
                type="button"
                className="bg-gray-100 p-[12px] rounded-full"
              >
                <svg
                  className="text-textPrimary"
                  fill="none"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21 5H3V8H21V5ZM21 10.5H3V19H21V10.5ZM6 13H11V15.5H6V13ZM15.5 13H13V15.5H15.5V13Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="body-text text-textPrimary font-medium   text-unset">
              Покупка и продажа
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex space-x-1 justify-center border-b border-b-line pt-[10px]"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          data-testid="tab-crypto"
          className="px-2 outline-none flex flex-col items-center"
          id="headlessui-tabs-tab-7"
          role="tab"
          type="button"
          aria-selected="true"
          tabIndex="0"
          data-headlessui-state="selected"
          aria-controls="headlessui-tabs-panel-9"
        >
          <div className="pb-2">
            <p className="title-text text-textPrimary font-medium   text-unset">
              Crypto
            </p>
          </div>
          <div
            data-selected="true"
            className="w-6 bg-transparent h-1 data-[selected='true']:bg-primary"
          ></div>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
