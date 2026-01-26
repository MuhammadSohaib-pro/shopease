# 🛍️ ShopEase - Modern E-Commerce Platform

A feature-rich, responsive e-commerce web application built with React, TypeScript, and Redux Toolkit. ShopEase provides a seamless shopping experience with modern UI/UX design and comprehensive e-commerce functionality.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?logo=typescript)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.5.0-purple?logo=redux)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?logo=tailwind-css)

## ✨ Features

### 🛒 Shopping Experience

- **Product Catalog**: Browse through a wide range of products with detailed information
- **Advanced Filtering**: Filter products by category, price, and ratings
- **Smart Search**: Real-time product search with debouncing for optimal performance
- **Product Details**: Comprehensive product pages with images, descriptions, and ratings
- **Related Products**: Intelligent product recommendations

### 🎯 User Features

- **Shopping Cart**: Add, remove, and update product quantities
- **Cart Drawer**: Quick access to cart with slide-out panel
- **Wishlist**: Save favorite products for later
- **Order Management**: Track order history and status
- **Guest Checkout**: Shop without account creation

### 🎨 UI/UX

- **Responsive Design**: Seamless experience across all devices
- **Dark Mode Support**: Eye-friendly dark theme
- **Loading Skeletons**: Smooth loading states for better UX
- **Toast Notifications**: Real-time feedback for user actions
- **Breadcrumb Navigation**: Easy navigation through product categories
- **Empty States**: User-friendly messages for empty carts/wishlists

### 🔧 Technical Features

- **State Management**: Redux Toolkit for predictable state management
- **Persistent Storage**: LocalStorage integration for cart, wishlist, and orders
- **Async Operations**: Redux Thunk for API calls
- **Type Safety**: Full TypeScript implementation
- **Code Splitting**: Optimized bundle size
- **API Integration**: RESTful API integration with Axios

## 🚀 Demo

### Live Demo

[View Live Demo](https://shopease-zeta-ten.vercel.app/)

### Screenshots

#### Home Page

![Home Page](https://raw.githubusercontent.com/MuhammadSohaib-pro/shopease/main/src/assets/img/home.png)

#### Product Listing

![Product Listing](https://raw.githubusercontent.com/MuhammadSohaib-pro/shopease/main/src/assets/img/products.png)

#### Shopping Cart

![Shopping Cart](https://raw.githubusercontent.com/MuhammadSohaib-pro/shopease/main/src/assets/img/cart.png)

#### Checkout

![Checkout](https://raw.githubusercontent.com/MuhammadSohaib-pro/shopease/main/src/assets/img/checkout.png)

## 🛠️ Tech Stack

### Frontend

- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 6.0.5** - Build tool and dev server
- **Redux Toolkit 2.5.0** - State management
- **React Router DOM 7.1.1** - Routing

### Styling

- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **Lucide React** - Beautiful icons

### API

- **Axios 1.7.9** - HTTP client
- **FakeStore API** - Product data

## 📦 Project Structure

```
shopease/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, CSS, and other assets
│   │   ├── css/
│   │   └── img/
│   ├── components/        # Reusable components
│   │   ├── cart/          # Cart-related components
│   │   ├── checkout/      # Checkout components
│   │   ├── common/        # Shared components
│   │   ├── footer/        # Footer component
│   │   ├── header/        # Header and navigation
│   │   ├── home/          # Home page sections
│   │   ├── product/       # Product components
│   │   ├── product_detail/# Product detail components
│   │   ├── profile/       # User profile components
│   │   └── ui/            # UI library components
│   ├── layout/            # Layout wrappers
│   │   └── Main.tsx
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── routes/            # Route configurations
│   │   └── index.ts
│   ├── store/             # Redux store
│   │   ├── cart/          # Cart slice and logic
│   │   ├── order/         # Order management
│   │   ├── products/      # Product data and thunks
│   │   ├── wishlist/      # Wishlist functionality
│   │   └── store.ts       # Store configuration
│   ├── utils/             # Helper utilities
│   │   └── axios.ts       # API configuration
│   ├── views/             # Page components
│   │   ├── cart/          # Cart page
│   │   ├── checkout/      # Checkout page
│   │   ├── home/          # Home page
│   │   ├── not_found/     # 404 page
│   │   ├── order_success/ # Order confirmation
│   │   ├── product/       # Products listing
│   │   ├── product_detail/# Product details
│   │   ├── profile/       # User profile
│   │   └── wishlist/      # Wishlist page
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Application entry point
├── .env                   # Environment variables
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MuhammadSohaib-pro/shopease
   cd shopease
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment file**

   Create a `.env` file in the root directory:

   ```env
   VITE_BASE_URL=https://fakestoreapi.com
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

## 📝 Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

## 🔑 Key Features Explained

### State Management

The application uses Redux Toolkit with the following slices:

- **Products Slice**: Manages product data, categories, and selected product
- **Cart Slice**: Handles cart items and drawer visibility
- **Wishlist Slice**: Manages user's favorite products
- **Order Slice**: Tracks order history

### LocalStorage Persistence

Data is automatically persisted to localStorage:

- Cart items (`shopease_cart`)
- Wishlist items (`shopease_wishlist`)
- Order history (`shopease_order`)

### API Integration

All API calls are handled through Redux Thunks:

```typescript
// Example: Fetching products
dispatch(fetchProducts());
```

Available thunks:

- `fetchProducts()` - Get all products
- `fetchCategories()` - Get product categories
- `fetchProductById(id)` - Get single product
- `fetchProductsByCategory(category)` - Get products by category

## 🎨 Customization

### Components

All UI components are in `src/components/ui/` and can be customized using Tailwind classes.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Use TypeScript for all new files
- Follow the existing folder structure
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes before committing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@MuhammadSohaib-pro](https://github.com/MuhammadSohaib-pro)
- Email: muhammadsohaib030@gmail.com

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Contact me via email

---

Made with ❤️ by Muhammad Sohaib

⭐ Star this repo if you find it helpful!
