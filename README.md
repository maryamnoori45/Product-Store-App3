# 🛍 NeoStore — Modern Product Store App

A modern and responsive e-commerce web application built with **React**, designed to demonstrate advanced React state management concepts including **Context API + useReducer**, **Redux Toolkit**, and **React Query**.

This project was developed as a practical assignment covering React global state management, API data handling, and scalable frontend architecture.

---

# ✨ Features

## 🛒 Product Store

* Display products from Fake Store API
* Product Details page
* Responsive product cards
* Search products instantly
* Grid / List layout toggle
* Beautiful modern UI

---

## 🧠 State Management

### ✅ Context API + useReducer

Used for:

* Dark / Light mode
* Grid / List view
* Search state

### ✅ Redux Toolkit

Used for:

* Shopping cart state
* Add products
* Remove products
* Increase quantity
* Decrease quantity
* Clear cart
* Total items counter
* Total price calculation

### ✅ React Query

Used for:

* Fetching product data
* Fetching single product details
* Loading state handling
* Error state handling
* API caching

---

# 🚀 Extra Features

* Save cart in localStorage
* Real-world Add To Cart feedback animation
* Fixed responsive navbar
* Smooth hover effects
* Modern responsive design
* Dynamic product pages
* Persistent cart after refresh

---

# 🛠 Technologies Used

| Technology       | Purpose                      |
| ---------------- | ---------------------------- |
| React            | Frontend Library             |
| Vite             | Fast Development Environment |
| Tailwind CSS v4  | Styling                      |
| React Router DOM | Routing                      |
| Redux Toolkit    | Global Cart State            |
| React Redux      | Redux Integration            |
| React Query      | API Fetching & Caching       |
| Axios            | HTTP Requests                |

---

# 📂 Project Structure

```bash
src/
│
├── components/
│   └── Navbar.jsx
│
├── context/
│   └── SettingsContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   └── ProductDetails.jsx
│
├── redux/
│   ├── store.js
│   └── cartSlice.js
│
├── routes/
│   └── AppRoutes.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone The Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```Product-Stor

---

## 2️⃣ Open Project Folder

```bash
cd Product-Store App
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Start Development Server

```bash
npm run dev
```

---

# 🌐 API Used

Fake Store API

```bash
https://fakestoreapi.com/
```

---

# 🎥 Project Demo Video

A short demo video of the application is included below:

👉


https://github.com/user-attachments/assets/f657c8df-6056-4d9b-bba3-59b4ff141007


The video demonstrates:

* Product fetching
* Product Details Page
* Add To Cart functionality
* Quantity controls
* Dark / Light mode
* Grid / List view
* Search functionality
* Responsive design
* LocalStorage cart persistence

---

# 🎯 Assignment Requirements Covered

## ✅ Context API + useReducer

* Shared global settings
* Dark / Light mode
* Grid / List view
* Search state management

## ✅ Redux Toolkit

* Global cart management
* Quantity updates
* Cart calculations
* State synchronization

## ✅ React Query

* API data fetching
* Product caching
* Loading & Error handling
* Dynamic query keys

---

# 📱 Responsive Design

Fully responsive across:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

---

# 🧪 Future Improvements

* Product category filtering
* Price sorting
* Authentication system
* Checkout page
* Payment integration

---

# 👨‍💻 Developer

Developed by **Maryam Noori**

---

# ⭐ Final Notes

This project demonstrates how different React state management tools should be used for different types of state:

* **Context API + useReducer** → App settings & shared UI state
* **Redux Toolkit** → Complex global cart state
* **React Query** → Server/API state management

---
