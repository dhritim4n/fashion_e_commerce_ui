# Fashion E‑Commerce Store UI

Deployed Link: https://fashion-e-commerce-ui.vercel.app/
A modern, responsive, and minimal e‑commerce web application built using **React**, **Context API**, **Tailwind CSS**, and **React Router**. The project includes product listings, search functionality, a shopping cart drawer, category navigation, and a clean UI inspired by Everlane.

---

## 🚀 Features

### 🛒 Shopping Cart System

* Add/remove items from cart
* Cart stored in **global context (Context API)**
* Cart badge shows total items
* Persistent UI state across pages

### 🔍 Search Functionality

* Real‑time product search
* Debounced input to improve performance
* Works across product pages



### 📦 Product Listing & Details

* Dynamic product list
* Product detail page
* Add‑to‑Cart button

### ⚙️ Global State Management

Managed in `StoreContext`:

### 🎨 UI / Styling

* TailwindCSS for fast styling
* Clean and modern layout
* Fully responsive

---

## 🧩 Project Structure

```
src/
│
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── .tsx
│   │   └── Cart.tsx
│   ├── ProductCard.tsx
│   └── ...
│
├── context/
│   └── StoreContext.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── ProductDetails.tsx
│   └── ...
│
├── App.tsx
└── main.tsx
```

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/dhritim4n/fashion_e_commerce_ui
cd everlane-react-store
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🛠 Tech Stack

* **React + Vite**
* **TypeScript**
* **Context API** for state management
* **TailwindCSS** for UI
* **Lucide Icons**
* **React Router**




