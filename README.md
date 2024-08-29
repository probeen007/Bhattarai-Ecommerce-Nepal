# Bhattarai Ecommerce

![Bhattarai Ecommerce Preview](https://via.placeholder.com/1200x600?text=Bhattarai+Ecommerce+Preview)

Welcome to **Bhattarai Ecommerce**, a modern and feature-rich e-commerce web application designed to bring your kitchenware store online. Built with the latest technologies, this app offers a seamless shopping experience for users and a robust admin interface for managing the store.

## 🚀 Features

- 🖌️ **Awesome UI in TailwindCSS**: Modern, responsive, and customizable design.
- 🛒 **Complete Shopping Cart**: Full-featured shopping cart experience.
- 🔐 **Authentication with Google Login in Next Auth**: Secure and easy sign-in with Google.
- 💰 **Payment Integration in Stripe**: Secure and smooth payment transactions.
- 👀 **Admin Dashboard**: Comprehensive admin interface for managing the store.
- 📉 **Shop Statistics (Summary)**: Insights into shop performance and key metrics.
- ⬆️ **Image Uploads in Firebase Storage**: Manage and store product images.
- 🔎 **Search Functionality**: Robust search feature for finding products.
- 👨‍👩‍👧‍👦 **Product Categories**: Organize products into categories for easy navigation.
- 🔥 **Product Rating**: Allows users to rate products and help others make informed decisions.
- 🛠️ **Manage Products**: Add, edit, and delete products easily.
- 🛠️ **Manage Orders**: Oversee and process customer orders efficiently.

## ⚙️ Technologies Used

- **Next.js 13**: Server-side rendering and static site generation.
- **React.js**: Front-end library for building user interfaces.
- **TypeScript**: Static typing for improved code quality.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Prisma**: ORM for database management.
- **Stripe**: Payment processing platform.
- **Next Auth**: Authentication solution for Next.js.
- **MongoDB**: NoSQL database for storing data.
- **Firebase Storage**: Image storage and management.

## 📥 Installation

To get started with Bhattarai Ecommerce locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/bhattarai-ecommerce.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd bhattarai-ecommerce
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add the following variables:

    ```env
    MONGODB_URI=your_mongodb_uri
    STRIPE_SECRET_KEY=your_stripe_secret_key
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    NEXTAUTH_SECRET=your_nextauth_secret
    ```

5. **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).

## 🔧 Configuration

- **MongoDB**: Ensure MongoDB is set up and accessible via the URI provided in your `.env.local` file.
- **Stripe**: Configure your Stripe account and use the provided secret key.
- **Firebase**: Set up Firebase Storage and provide the storage bucket name.
- **Next Auth**: Generate a secret key for Next Auth.

## 🛠️ Usage

- **For Users**: Browse products, add items to the cart, and complete purchases.
- **For Admins**: Use the admin dashboard to manage products, orders, and view shop statistics.

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines for contributing:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📖 Story

**Bhattarai Ecommerce** was born out of a need to modernize and expand the reach of a family business. Your dad’s kitchenware store, a beloved local shop, had been operating solely offline. While the store provided excellent products and service to its existing customers, it lacked an online presence that could cater to a broader audience.

Recognizing the potential to grow the business and improve customer convenience, you decided to create an e-commerce platform. The goal was to transition the store from a physical-only setup to a fully functional online store. By doing so, you aimed to make it easier for customers to browse and purchase products from anywhere, without needing to visit the physical store.

### Problem It Solves

The primary problem addressed by **Bhattarai Ecommerce** is the inconvenience faced by customers who had to physically visit the store to see available products and check new stock. This traditional approach limited the store’s reach and accessibility. By moving online, the app solves several issues:

- **Accessibility**: Customers can view and purchase products from the comfort of their homes, at any time.
- **Visibility**: The online platform showcases the full range of products and updates on new stock, which helps in attracting more customers.
- **Convenience**: Features like a complete shopping cart, search functionality, and secure payment options enhance the shopping experience, making it more user-friendly and efficient.

### Future Vision

Looking ahead, you envision **Bhattarai Ecommerce** evolving into a leading online destination for kitchenware, with the following goals:

1. **Expansion of Product Range**: Continuously add new products and categories to meet diverse customer needs and preferences.
2. **Enhanced User Experience**: Implement additional features such as personalized recommendations, improved search capabilities, and more interactive UI elements.
3. **Broader Market Reach**: Explore opportunities to scale the platform and reach new markets, both locally and internationally.


