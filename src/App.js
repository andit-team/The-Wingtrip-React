import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";

import HomeOne from "./page/Home";

import AboutPage from "./page/About";

import EventPageArea from "./page/Event";

// import Event Details Page
import EventDetails from "./page/EventDetails";
// import Event Booking Page
import EventBookingPage from "./page/EventBooking";
import TeamDetailsPage from "./page/TeamDetails";
import TeamPage from "./page/Team";
// import PortfolioPage
import PortfolioPage from "./page/Portfolio";
import PortfolioDetailsPage from "./page/PortfolioDetails";
import GalleryPage from "./page/Gallery";
import ServicePage from "./page/Service"
import ServiceDetailsPage from "./page/ServiceDetails"
import FaqsPage from "./page/Faq";
import TestimonialPage from "./page/Testimonial";
import TicketPage from "./page/Ticket";
import ProductPage from "./page/Product";
import ProductDetailsPage from "./page/ProductDetails";
import CartPage from "./page/Cart";
import CheckoutPage from "./page/Checkout";
import LoginPage from "./page/Login";
import ErrorPage from "./page/Error";
import ComingSoonPage from "./page/ComingSoon";
import NewsPage from "./page/News";
import NewsDetailsPage from "./page/NewsDetails";
import ContactPage from "./page/Contact";





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
