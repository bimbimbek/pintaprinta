document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления контента
    gsap.from('.header, .hero, .promo-slider, .testimonials, .newsletter, .footer', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Анимация при клике на ссылки
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');

            gsap.to('.header, .hero, .promo-slider, .testimonials, .newsletter, .footer', {
                duration: 0.5,
                opacity: 0,
                y: 50,
                stagger: 0.1,
                ease: "power3.in",
                onComplete: () => {
                    window.location.href = href;
                }
            });
        });
    });

    // Анимация при прокрутке
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);

        const scrollToTopBtn = document.getElementById('scroll-to-top');
        scrollToTopBtn.classList.toggle('visible', window.scrollY > 300);
    });

    // Кнопка "Наверх"
    document.getElementById('scroll-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Анимации при наведении
    document.querySelectorAll('.btn, .testimonial, .slide').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });

    // Фильтрация товаров
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            document.querySelectorAll('.product-card').forEach(card => {
                card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
            });
        });
    });

    // Модальное окно товара
    const productModal = document.getElementById("productModal");
    const productLinks = document.querySelectorAll(".product-link");
    const productCloseBtn = document.querySelector("#productModal .close");

    function openModal(product) {
        productModal.style.display = "block";
        document.getElementById("modal-product-image").src = product.image;
        document.getElementById("modal-title").textContent = product.title;
        document.getElementById("modal-description").textContent = product.description;
        document.getElementById("modal-price").textContent = "Цена: " + product.price;
    }

    function closeModal() {
        productModal.style.display = "none";
    }

    productLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const productCard = this.closest(".product-card");
            const product = {
                image: productCard.querySelector("img").src,
                title: productCard.querySelector(".product-title").textContent,
                description: "Мягкая хлопковая футболка с уникальным дизайном. Доступна в различных размерах и цветах.",
                price: productCard.querySelector(".product-price").textContent
            };
            openModal(product);
        });
    });

    productCloseBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function(event) {
        if (event.target == productModal) {
            closeModal();
        }
    });

    // Конструктор дизайна (код из предыдущих сообщений)
    const designModal = document.getElementById("designModal");
    const designBtns = document.querySelectorAll(".design-button");
    const designSpan = document.querySelector("#designModal .close");
    let currentProduct = null; // Добавлено для отслеживания текущего продукта

    designBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            designModal.style.display = "block";
            const product = this.dataset.product;
            loadProductImage(product);
            currentProduct = product;
        });
    });

    designSpan.onclick = function() {
        designModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == designModal) {
            designModal.style.display = "none";
        }
    };

    function loadProductImage(product) {
        const modalProductImage = document.getElementById('modal-product-image');
        switch (product) {
            case 'tshirt':
                modalProductImage.src = 'pics/shirt.png';
                break;
            case 'hoodie':
                modalProductImage.src = 'pics/hoodie.png';
                break;
            case 'mug':
                modalProductImage.src = 'pics/mug.png';
                break;
            case 'bag':
                modalProductImage.src = 'pics/shopper.png';
                break;
            case 'cap':
                modalProductImage.src = 'pics/cap.png';
                break;
            case 'sweater':
                modalProductImage.src = 'pics/sweater.png';
                break;
            case 'pants':
                modalProductImage.src = 'pics/pants.png';
                break;
            case 'socks':
                modalProductImage.src = 'pics/socks.png';
                break;
            case 'jacket':
                modalProductImage.src = 'pics/jacket.png';
                break;
            case 'keychain':
                modalProductImage.src = 'pics/keychain.png';
                break;
            case 'notebook':
                modalProductImage.src = 'pics/notebook.png';
                break;
            default:
                modalProductImage.src = 'https://via.placeholder.com/300';
                break;
        }
    }

    const modalDesignCanvas = document.getElementById('modal-design-canvas');
    const modalImageUpload = document.getElementById('modal-image-upload');
    const modalTextInput = document.getElementById('modal-text-input');
    const modalAddTextButton = document.getElementById('modal-add-text-button');
    const modalAddToCartButton = document.getElementById('modal-add-to-cart-button');
    const modalCtx = modalDesignCanvas.getContext('2d');

    let uploadedImage = null;
    let addedText = '';

    function drawDesign() {
        modalCtx.clearRect(0, 0, modalDesignCanvas.width, modalDesignCanvas.height);

        if (uploadedImage) {
            modalCtx.drawImage(uploadedImage, 0, 0, modalDesignCanvas.width, modalDesignCanvas.height);
        }

        if (addedText) {
            modalCtx.font = '20px Arial';
            modalCtx.fillStyle = 'black';
            modalCtx.fillText(addedText, 50, 50);
        }
    }

    modalImageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            uploadedImage = new Image();
            uploadedImage.onload = () => {
                drawDesign();
            };
            uploadedImage.src = URL.createObjectURL(file);
        }
    });

    modalAddTextButton.addEventListener('click', () => {
        addedText = modalTextInput.value;
        drawDesign();
    });

    modalAddToCartButton.addEventListener('click', () => {
        const designData = modalDesignCanvas.toDataURL();
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({
            product: currentProduct,
            design: designData
        });
        localStorage.setItem('cart', JSON.stringify(cart));

            alert('Товар с вашим дизайном добавлен в корзину!');
            designModal.style.display = "none";
        });
    });
    const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

if (!cartItemsContainer || !totalPriceElement) {
    console.error('Элементы cart-items или total-price не найдены!');
} else {
    console.log('Элементы найдены:', cartItemsContainer, totalPriceElement);
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log('Данные из localStorage:', cart);

document.addEventListener('DOMContentLoaded', () => {
    console.log('Скрипт cart.js загружен!');

    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Проверка, что элементы найдены
    if (!cartItemsContainer || !totalPriceElement) {
        console.error('Элементы cart-items или total-price не найдены!');
        return;
    }

    // Получаем данные из localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Данные из localStorage:', cart);

    // Функция для отображения товаров в корзине
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            // Извлекаем числовую часть из строки с ценой
            const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));

            cartItem.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="item-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p class="item-price">${item.price}</p>
                    <div class="quantity-controls">
                        <button class="btn quantity-decrease" data-index="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="btn quantity-increase" data-index="${index}">+</button>
                    </div>
                </div>
                <div class="item-actions">
                    <button class="btn remove-item" data-index="${index}">Удалить</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);

            // Обновляем общую стоимость
            totalPrice += price * item.quantity;
        });

        totalPriceElement.textContent = `₽${totalPrice.toFixed(2)}`;
    }

    // Инициализация корзины при загрузке страницы
    renderCart();
});
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModalBtn = checkoutModal.querySelector('.close');
    const checkoutForm = document.getElementById('checkout-form');

    // Получаем данные из localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Функция для отображения товаров в корзине
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            // Извлекаем числовую часть из строки с ценой
            const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));

            cartItem.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="item-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p class="item-price">${item.price}</p>
                    <div class="quantity-controls">
                        <button class="btn quantity-decrease" data-index="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="btn quantity-increase" data-index="${index}">+</button>
                    </div>
                </div>
                <div class="item-actions">
                    <button class="btn remove-item" data-index="${index}">Удалить</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);

            // Обновляем общую стоимость
            totalPrice += price * item.quantity;
        });

        totalPriceElement.textContent = `₽${totalPrice.toFixed(2)}`;
    }

    // Функция для удаления товара
    function removeItem(index) {
        cart.splice(index, 1); // Удаляем товар из массива
        localStorage.setItem('cart', JSON.stringify(cart)); // Обновляем localStorage
        renderCart(); // Перерисовываем корзину
    }

    // Функция для изменения количества товара
    function updateQuantity(index, change) {
        cart[index].quantity += change; // Изменяем количество
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1; // Минимальное количество — 1
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // Обновляем localStorage
        renderCart(); // Перерисовываем корзину
    }

    // Обработчик для кнопок удаления и изменения количества
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.getAttribute('data-index');
            removeItem(index);
        } else if (e.target.classList.contains('quantity-decrease')) {
            const index = e.target.getAttribute('data-index');
            updateQuantity(index, -1);
        } else if (e.target.classList.contains('quantity-increase')) {
            const index = e.target.getAttribute('data-index');
            updateQuantity(index, 1);
        }
    });

    // Открытие модального окна при нажатии на "Оформить заказ"
    checkoutBtn.addEventListener('click', () => {
        checkoutModal.style.display = 'block';
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });

    // Обработка формы оформления заказа
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Получаем данные из формы
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Отправляем запрос на сервер для создания платежа
        try {
            const response = await fetch('https://ваш-сервер.vercel.app/create-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: parseFloat(totalPriceElement.textContent.replace('₽', '')),
                    description: 'Оплата заказа',
                    customer: { name, phone, email },
                }),
            });

            const data = await response.json();

            if (data.paymentUrl) {
                // Перенаправляем пользователя на страницу оплаты
                window.location.href = data.paymentUrl;
            } else {
                alert('Ошибка при создании платежа');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при создании платежа');
        }
    });

    // Инициализация корзины при загрузке страницы
    renderCart();
});
console.log('Скрипт cart.js загружен!');