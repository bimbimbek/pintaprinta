const express = require('express');
const { YooCheckout } = require('@a2seven/yoo-checkout');

const app = express();
app.use(express.json());

const shopId = 'Ваш shopId'; // Замените на ваш shopId
const secretKey = 'test_uZvrkWJQSPa1a6Q-VqOdh-bDuHyVv1aqkhyFSowsFKY'; // Ваш секретный ключ

const yooCheckout = new YooCheckout({ shopId, secretKey });

// Маршрут для создания платежа
app.post('/create-payment', async (req, res) => {
    const { amount, description } = req.body;

    try {
        const payment = await yooCheckout.createPayment({
            amount: {
                value: amount, // Сумма платежа
                currency: 'RUB', // Валюта
            },
            confirmation: {
                type: 'redirect',
                return_url: 'https://bimbimbek.github.io/pintaprinta', // URL для возврата после оплаты
            },
            capture: true,
            description: description, // Описание платежа
        });

        res.json({ paymentUrl: payment.confirmation.confirmation_url });
    } catch (error) {
        console.error('Ошибка при создании платежа:', error);
        res.status(500).json({ error: 'Ошибка при создании платежа' });
    }
});

// Запуск сервера
const response = await fetch('https://pintaprinta.vercel.app/create-payment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount, description }),
});