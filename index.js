const express = require('express');
const fs = require('fs').promises;
const app = express();

// Эндпоинт для получения celka.lua
app.get('/get-celka', async (req, res) => {
    try {
        const celkaLua = await fs.readFile('celka.lua', 'utf8');
        res.status(200).send(celkaLua);
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ message: 'Ошибка при загрузке celka.lua' });
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
