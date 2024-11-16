import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const ImportWallet = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [conditions, setConditions] = useState({
    length: false,
    uppercase: false,
    digit: false,
    specialChar: false,
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Проверка условий пароля
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setConditions({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      digit: /\d/.test(value),
      specialChar: /[!@#$%^&*()_,.?":{}|<>]/.test(value),
    });

    setPasswordsMatch(value === confirmPassword);
  };

  // Обработчик для подтверждения пароля
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };

  // Переключение видимости пароля
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  // Функция для отправки данных на сервер
  const handleSubmit = async () => {
    if (passwordsMatch) { // Проверяем совпадение паролей перед отправкой
      try {
        const response = await axios.post("http://localhost:5000/register", { password });
        console.log("Пользователь создан с ID:", response.data.userId);
      } catch (error) {
        console.error("Ошибка при создании пользователя:", error);
      }
    } else {
      console.error("Пароли не совпадают.");
    }
  };

  // Условие для активации кнопки "Далее"
  const isSubmitEnabled = Object.values(conditions).every(Boolean) && passwordsMatch && termsAccepted;

  // Рендеринг иконки для требований
  const renderIcon = (condition) => (
    <div
      className={`flex items-center justify-center w-5 h-5 rounded-full border ${
        condition ? "bg-[#0500FF] border[#0500FF]" : "border-gray-300"
      }`}
    >
      {condition && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 14L3.5 10L4.5 9L7.5 12L15.5 4L16.5 5L7.5 14Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );

  return (
    <div>
      <div
        className="relative flex flex-col flex-1 w-full h-full self-center m-auto
        
        md:max-w-[438px] p-2"
      ></div>
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
      <div className="bg-backgroundPrimary border border-line rounded p-6 mb-11 m-auto md:max-w-[438px]">
        <div className="w-full flex items-center justify-between space-x-4">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center h-1 bg-[#0500FF] opacity-100"></div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center h-1 bg-[#0500FF] opacity-20"></div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <h2
            data-testid="onboarding-step-title"
            className="font-bold text-[26px]"
          >
            Установите пароль
          </h2>
          <p className="title-text text-textSecondary font-normal text-unset">
            Этот пароль используется для защиты вашего кошелька. Его нельзя
            сбросить, он находится отдельно от мобильного кошелька.
          </p>
          <div className="w-full mt-6 flex flex-col space-y-6">
            <form className="space-y-6">
              <div className="flex flex-col space-y-2">
                <div
                  data-testid="password-field-input-group"
                  className="text-start"
                >
                  <p
                    data-testid="input-label"
                    className="body-text text-textPrimary font-medium text-unset"
                  >
                    Новый пароль
                  </p>
                  <div className="input-field space-x-1 h-12 flex ">
                    <input
                      data-testid="password-field"
                      className="w-full flex-1 bg-gray-100 title-text font-medium text-left pl-[10px]"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="outline-none bg-transparent text-backgroundPrimary p-0 "
                    >
                      {showPassword ? (
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
                        // Скрытый пароль — значок "закрытого" глаза
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

                {/* Условия пароля */}
                <ul className="space-y-2">
                  <li className="flex items-center space-x-1">
                    {renderIcon(conditions.length)}
                    <p className="subtitle-text text-textSecondary font-normal text-unset">
                      8 и более символов
                    </p>
                  </li>
                  <li className="flex items-center space-x-1">
                    {renderIcon(conditions.uppercase)}
                    <p className="subtitle-text text-textSecondary font-normal text-unset">
                      Не менее одной заглавной буквы
                    </p>
                  </li>
                  <li className="flex items-center space-x-1">
                    {renderIcon(conditions.digit)}
                    <p className="subtitle-text text-textSecondary font-normal text-unset">
                      Минимум 1 цифра
                    </p>
                  </li>
                  <li className="flex items-center space-x-1">
                    {renderIcon(conditions.specialChar)}
                    <p className="subtitle-text text-textSecondary font-normal text-unset">
                      Минимум один спец. символ
                    </p>
                  </li>
                </ul>
              </div>

              {/* Поле подтверждения пароля */}
              <div className="flex flex-col space-y-2">
                <div
                  data-testid="password-field-input-group"
                  className="text-start"
                >
                  <p
                    data-testid="input-label"
                    className="body-text text-textPrimary font-medium text-unset"
                  >
                    Подтвердите новый пароль
                  </p>
                  <div className="input-field space-x-1 h-12 flex">
                    <input
                      data-testid="confirm-password-field"
                      className="w-full flex-1 bg-gray-100 title-text font-medium text-left pl-[10px]"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                    <button
                      type="button"
                      onClick={toggleShowConfirmPassword}
                      className="outline-none bg-transparent text-backgroundPrimary p-0 "
                    >
                      {showConfirmPassword ? (
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
                        // Скрытый пароль — значок "закрытого" глаза
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

              {/* Согласие с условиями */}
              <div className="flex justify-center">
                <div className="flex items-center">
                  <input
                    data-testid="checkbox-terms-of-service"
                    id="m3j5g"
                    type="checkbox"
                    className="w-4 h-4 accent-primary rounded"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                  />
                  <label
                    htmlFor="m3j5g"
                    className="ml-2 text-textPrimary subtitle-text font-normal text-[14px]"
                  >
                    Я прочитал и согласен с{" "}
                    <a
                      href="https://trustwallet.com/terms-of-services"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary text-[#0500FF]"
                    >
                      Условиями обслуживания
                    </a>
                    .
                  </label>
                </div>
              </div>

              {/* Кнопка "Далее" */}
              <div className="flex w-full items-center justify-between mt-6 space-x-4">
                <Link to="/">
                  <button
                    type="button"
                    className="outline-none bg-transparent text-backgroundPrimary default-button p-0 w-full"
                  >
                    <p className="title-text text-primary font-medium text-unset text-[#0500FF]">
                      Назад
                    </p>
                  </button>
                </Link>
                <Link to="/Imp12">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isSubmitEnabled}
                    className={`outline-none w-[180px] p-[10px] rounded-full text-white ${
                      isSubmitEnabled ? "bg-[#0500FF]" : "opacity-100"
                    }`}
                    style={{ opacity: isSubmitEnabled ? 1 : 0 }} // Устанавливаем opacity на основе состояния
                  >
                    Далее
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportWallet;
