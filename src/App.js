import React from "react";
import { Routes, Route } from "react-router-dom";
// import Header
import Header from "./layout/Header";
// import HomeOne
import HomeOne from "./page/Home";
// import AboutPage
import AboutPage from "./page/About";
// import EventPageArea
import EventPageArea from "./page/Event";
// import Event Details Page
import EventDetails from "./page/EventDetails";
// import Event Booking Page
import EventBookingPage from "./page/EventBooking";
// import TeamDetailsPage Page
import TeamDetailsPage from "./page/TeamDetails";
// import TeamPage Page
import TeamPage from "./page/Team";
// import Portfolio Page
import PortfolioPage from "./page/Portfolio";
// import rtfolioDetails Page
import PortfolioDetailsPage from "./page/PortfolioDetails";
// import Gallery Page 
import GalleryPage from "./page/Gallery";
// import Service Page
import ServicePage from "./page/Service"
// import ServiceDetails Page
import ServiceDetailsPage from "./page/ServiceDetails"
// import Faqs Page
import FaqsPage from "./page/Faq";
// import Testimonial Page
import TestimonialPage from "./page/Testimonial";
// import Ticket Page
import TicketPage from "./page/Ticket";
// import Product Page
import ProductPage from "./page/Product";
// import ProductDetails Page
import ProductDetailsPage from "./page/ProductDetails";
// import Cart Page
import CartPage from "./page/Cart";
// import Checkout Page
import CheckoutPage from "./page/Checkout";
// import Login Page
import LoginPage from "./page/Login";
// import Error Page
import ErrorPage from "./page/Error";
// import ComingSoon Page
import ComingSoonPage from "./page/ComingSoon";
// import News Page
import NewsPage from "./page/News";
// import NewsDetails Page
import NewsDetailsPage from "./page/NewsDetails";
// import Portfolio Page
import ContactPage from "./page/Contact";
// import Portfolio Page





import InstagramSlider from "./layout/Instagram";

import FooterArea from "./layout/Footer";

import CopyRight from "./layout/CopyRight";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event" element={<EventPageArea />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/event-booking" element={<EventBookingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team-details" element={<TeamDetailsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio-details" element={<PortfolioDetailsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service-details" element={<ServiceDetailsPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news-details" element={<NewsDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes> 
      <InstagramSlider/>
     <FooterArea/>
    <CopyRight/>
   
    </>
   
  );
}

export default App;
