import React from 'react';

const ErrorPage = () => {
  const handleReload = () => {
    // Перезагрузка текущей страницы
    window.location.reload();
  };

  return (
    <div>
                <svg
          fill="none"
          width="72"
          height="97"
          viewBox="0 0 62 87"
          xmlns="http://www.w3.org/2000/svg"
           className='m-auto mt-[100px] mb-[100px]'
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
            <div className="flex flex-col items-center justify-center text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Server Error</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Oops! There was an issue with the server. Please wait a few minutes and try again.
      </p>
      <button
        onClick={handleReload}
        className="px-6 py-2 bg-[#0500FF] text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Try Again
      </button>
    </div>
    </div>

  );
};

export default ErrorPage;