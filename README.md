# Fashion for All

Welcome to "Fashion for All" - an e-commerce platform designed to offer a wide range of fashion products to everyone. This project is developed by Mohamed Shaaban (ID: 29) as part of the ITI final project.

![Model Image](Readme-images/Moukup.png)

## Description

"Fashion for All" is a user-friendly e-commerce website that enables users to browse and purchase fashion items easily. The platform offers a seamless shopping experience with features like product filtering, pagination, and personalized user accounts.

src/
│
├── components/
│ ├── MainFooter/
│ │ ├── MainFooter.jsx
│ │ └── MainFooter.css
│ │
│ ├── Authentication/
│ │ ├── UserLoginForm.jsx
│ │ └── UserLoginForm.css
│ │
│ ├── Home/
│ │ ├── HomeBanner/
│ │ │ ├── HomeBanner.jsx
│ │ │ └── HomeBanner.css
│ │ ├── HomeFAQ/
│ │ │ ├── HomeFAQ.jsx
│ │ │ └── HomeFAQ.css
│ │ ├── HomeHeroSection/
│ │ │ ├── HomeHeroSection.jsx
│ │ │ └── HomeHeroSection.css
│ │ ├── CustomerTestimonials/
│ │ │ ├── CustomerTestimonials.jsx
│ │ │ └── CustomerTestimonials.css
│ │ ├── NewsletterSubscription/
│ │ │ ├── NewsletterSubscription.jsx
│ │ │ └── NewsletterSubscription.css
│ │ ├── OurServices/
│ │ │ ├── OurServices.jsx
│ │ │ └── OurServices.css
│ │ └── ...
│ │
│ ├── MainNavbar/
│ │ ├── MainNavbar.jsx
│ │ └── MainNavbar.css
│ │
│ └── Products/
│ ├── PageNavigation/
│ │ ├── PageNavigation.jsx
│ │ └── PageNavigation.css
│ ├── ProductList/
│ │ ├── ProductList.jsx
│ │ └── ProductList.css
│ ├── ProductDetails/
│ │ ├── ProductDetails.jsx
│ │ └── ProductDetails.css
│ ├── ProductImageSlider/
│ │ ├── ProductImageSlider.jsx
│ │ └── ProductImageSlider.css
│ ├── ProductEditForm/
│ │ ├── ProductEditForm.jsx
│ │ └── ProductEditForm.css
│ ├── FeaturedProducts/
│ │ ├── FeaturedProducts.jsx
│ │ ├── FeaturedProducts.css
│ │ ├── FeaturedProductsFilter.jsx
│ │ └── FeaturedProductsFilter.css
│ └── ...
│
├── pages/
│ ├── Home.jsx
│ ├── NotFound.jsx
│ ├── ProductListPage.jsx
│ ├── ProductEditPage.jsx
│ └── ProductDetailsPage.jsx
│
└── assets/

## Features

User Authentication:

A login page allows users to log in.
On first login, user information is stored in local storage, and users are redirected to the home page. ![Login Image](Readme-images/Login.png)

Home Page:

An elegant and attractive design to enhance user experience. ![home Image](Readme-images/Home-Page.png)

Product Page:

Displays a variety of products.
Filter products by type, age, lowest price, or highest price. ![proudct Image](Readme-images/Product-page.png)

Product Pagination:

Navigate through multiple pages of products easily.

Single Product Page:

Detailed view of a single product with all necessary information. ![Single proudct Image](Readme-images/Single-Product.jpeg)

Add and Update Products:

Admin can add new products and update existing ones. ![Update proudct Image](Readme-images/Update.jpeg)

Stock Indicators:

If the product quantity is 0, an "out of stock" banner is displayed, and the image is shown in black and white.
If the product quantity is 1, a "last one" banner is shown. ![Update proudct Image](Readme-images/oUTOFSTCK.jpeg)
