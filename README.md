# Vogue Attire - Ecommerce Web Application
Vogue Attire is a comprehensive ecommerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. Designed for a seamless shopping experience, it offers secure authentication, an extensive range of products across men's, women's, and kids' clothing categories, and a user-friendly interface. The application includes an admin panel for efficient management of products, orders, and analytics. Additionally, it integrates a secure payment gateway for hassle-free transactions.

## 🛍️Features
1. **User Registration and Login:** Secure authentication using JWT (JSON Web Tokens), allowing users to create accounts, log in, and manage their shopping preferences.
2. **Product Categories:** An extensive collection of products, neatly organized into men's, women's, and kids' clothing categories for easy browsing.
3. **Product Filtering:** Users can filter products by various criteria such as category (men's, women's, kids'), size, color, and price, helping them find exactly what they’re looking for.
4. **Admin Panel:** A dedicated admin interface for managing product listings, customer orders, and inventory. The panel also provides access to sales reports and user analytics for better decision-making.
5. **Shopping Cart & Checkout:** Users can add items to their cart, review them, and proceed to a smooth checkout process for an enhanced shopping experience.
6. **Payment Gateway Integration:** Secure payment processing through Stripe and Razorpay, ensuring safe and easy transactions for users.
7. **User Profile:** Users can view their past orders, track current order status, and manage their personal information.
8. **Responsive Design:** The application is fully optimized for both desktop and mobile devices, delivering a seamless experience across all platforms.

<hr>

# Getting Started
## 🚀Installation
- Clone the repository and navigate to the project directory:
```bash
git clone https://github.com/SOURABH2809/Vogue-Attire
```
- Change the working directory:
```bash
cd Vogue-Attire
```

### Step 1: Setup Backend
- Navigate to the backend folder, right-click, and select "Open in Integrated Terminal."

**Install Backend Dependencies**
- Run the following command in the terminal:
```bash
npm install
```

**Configure Cloudinary for File Storage**
- Sign up at Cloudinary.
- Copy your Cloud Name, API Key, and API Secret from the Dashboard.
- Update the .env file located in the backend folder with the following:
```bash
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret_key
```

**Configure MongoDB**
- Sign up at MongoDB.
- Create a new project and database, selecting the M0 plan.
- Set up a database user and password (avoid using @ in the password).
- Whitelist IP 0.0.0.0/0 and connect to the database using MongoDB Compass.
- Copy the connection string and update the .env file:
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your_database_name
```

**Configure Stripe (Optional)**
- Create an account at Stripe.
- Copy your Secret Key from the Dashboard and add it to the .env file:
```bash
STRIPE_SECRET_KEY=your_stripe_secret_key
```

**Configure Razorpay (Optional)**
- Sign up at Razorpay.
- Obtain the Key ID and Secret Key from the Dashboard.
- Update the .env file:
```bash
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=
```

**Run the Backend**
- Start the backend by running:
```bash
npm run start
```
- Ensure the backend is running before moving on to the frontend or admin panel setup.

## Step 2: Run Frontend
- Open the frontend folder in VS Code
- Right-click on the frontend folder and select "Open in Integrated Terminal."

**Install Frontend Dependencies**
- Run the following command:
```bash
npm install
```

**Run the Frontend**
- After installing the dependencies, start the frontend with the following command:
```bash
npm run dev
```

**Access the Frontend**
- Open http://localhost:5173 in your browser to access the application.

## Step 3: Run Admin Panel
- Open the admin folder in VS Code
- Right-click on the admin folder and select "Open in Integrated Terminal."
- Install Admin Panel Dependencies

- Run the following command:
```bash 
npm install
```

**Run the Admin Panel**
- Start the admin panel by running:
```bash 
npm run dev
```
- Access the Admin Panel
- The admin panel will be accessible at http://localhost:5174. Open this link in your browser.

<hr>
<p align="center">
Developed with ❤️ by Sourabh Gautam
</p>

