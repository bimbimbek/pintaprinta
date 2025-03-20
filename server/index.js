const express = require('express');
const cors = require('cors'); // Импортируем cors
const { YooCheckout } = require('@a2seven/yoo-checkout');

const app = express();
app.use(cors()); // Разрешаем все CORS-запросы
app.use(express.json());

// Остальной код сервера...

const shopId = '1052580'; // Замените на ваш shopId
const secretKey = 'test_uZvrkWJQSPa1a6Q-VqOdh-bDuHyVv1aqkhyFSowsFKY'; // Ваш секретный ключ

const yooCheckout = new YooCheckout({ shopId, secretKey });

// Маршрут для создания платежа
app.post('/create-payment', async (req, res) => {
    console.log('Получен запрос на создание платежа:', req.body); // Добавьте этот лог
    const { amount, description, customer } = req.body;

    try {
        const payment = await yooCheckout.createPayment({
            amount: {
                value: amount, // Сумма платежа
                currency: 'RUB', // Валюта
            },
            confirmation: {
                type: 'redirect',
                return_url: 'https://bimbimbek.github.io/pintaprinta/thank-you.html', // URL для возврата после оплаты
            },
            capture: true,
            description: description, // Описание платежа
            metadata: {
                customer_name: customer.name,
                customer_phone: customer.phone,
                customer_email: customer.email,
            },
        });

        res.json({ paymentUrl: payment.confirmation.confirmation_url });
    } catch (error) {
        console.error('Ошибка при создании платежа:', error);
        res.status(500).json({ error: 'Ошибка при создании платежа' });
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Сервер работает!');
});