const { YooCheckout } = require('@a2seven/yoo-checkout');

const shopId = '1052580'; // Замените на ваш shopId
const secretKey = 'test_uZvrkWJQSPa1a6Q-VqOdh-bDuHyVv1aqkhyFSowsFKY'; // Ваш секретный ключ

const yooCheckout = new YooCheckout({ shopId, secretKey });

module.exports = async (req, res) => {
    const { amount, description, customer } = req.body;

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
};