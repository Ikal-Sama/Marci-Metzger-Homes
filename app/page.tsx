"use client";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Search,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Send,
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/hero-bg.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/search-bg.jpg",
  "/service-1.jpg",
  "/service-2.jpg",
  "/service-3.jpg",
];

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm ${formData.name}. ${formData.message}`
    );
    window.open(`https://wa.me/12069196886?text=${message}`, "_blank");
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500); // 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-light tracking-tight text-gray-900"
          >
            Marci Metzger Homes
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Listings
            </button>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              About Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-sm hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform -translate-y-2 overflow-hidden"
          }`}
        >
          <div className="px-6 py-4 space-y-2">
            <Link
              href="/"
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-sm transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-sm transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Listings
            </button>
            <button
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-sm transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </button>
          </div>
        </div>
      </nav>

      <section
        className="relative pt-32 pb-24 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white/90"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              Find Your Perfect
              <span className="block mt-2 font-normal text-blue-900">
                Sanctuary
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Curated properties and personalized service for discerning clients
              seeking exceptional homes
            </p>
            <button className="group inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-sm hover:bg-blue-800 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span className="text-lg font-light">Explore Properties</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/marci.jpg"
                  alt="Marci Metzger"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="inline-block px-4 py-1 bg-blue-900/5 rounded-full mb-6">
                <span className="text-sm text-blue-900 font-medium">
                  Founder
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
                Marci J Metzger
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                Marci was a REALTOR, then licensed Broker, in Washington State.
                Now, she is enjoying the sunshine, and helping clients in
                Southern Nevada. Having helped buyers and sellers in many
                markets since 1995, she is a wealth of knowledge.
              </p>
              <p className="text-2xl font-light my-2">In Her Words</p>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                &#34;I love that small-town feeling that our community offers.
                Spectacular golf courses, parks, pool, and easy access to Las
                Vegas make Pahrump a great place to call home. Working or
                retired, fast-paced or looking to relax... there&#39;s a place
                for you here! I enjoy living in the Mountain Falls community and
                will strive to find you a home that will suit you just as this
                community does me.&#34;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Tailored solutions for every stage of your real estate journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              image="/service-1.jpg"
              title="Home Buying"
              description="Navigate the market with confidence. We'll guide you through every step, from search to closing, ensuring you find a home that perfectly matches your lifestyle."
              delay="delay-100"
              isVisible={isVisible}
            />
            <ServiceCard
              image="/service-2.jpg"
              title="Home Selling"
              description="Maximize your property's value with strategic marketing and expert negotiation. Our proven approach ensures optimal results and seamless transactions."
              delay="delay-200"
              isVisible={isVisible}
            />
            <ServiceCard
              image="/service-3.jpg"
              title="Investment Properties"
              description="Build wealth through strategic real estate investments. We identify high-potential opportunities and provide comprehensive analysis for informed decisions."
              delay="delay-300"
              isVisible={isVisible}
            />
          </div>
        </div>
      </section>

      <section
        className="relative py-24 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/search-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Search Properties
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Find your perfect home with our advanced search
            </p>
          </div>

          <div className="bg-white rounded-sm shadow-xl border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all">
                  <option value="">Select location</option>
                  <option value="pahrump">Pahrump</option>
                  <option value="mountain-falls">Mountain Falls</option>
                  <option value="las-vegas">Las Vegas</option>
                  <option value="henderson">Henderson</option>
                </select>
              </div>

              {/* Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Property Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all">
                  <option value="">All types</option>
                  <option value="single-family">Single Family</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="land">Land</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Bedrooms
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all">
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Baths */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Bathrooms
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all">
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              {/* Min Price */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Min Price
                </label>
                <input
                  type="number"
                  placeholder="$0"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                />
              </div>

              {/* Max Price */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Max Price
                </label>
                <input
                  type="number"
                  placeholder="No max"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                />
              </div>

              {/* Sort By */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Sort By
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all">
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="beds">Most Bedrooms</option>
                  <option value="baths">Most Bathrooms</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="space-y-2 flex items-end">
                <button className="w-full group inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-sm hover:bg-blue-800 transition-all duration-300 hover:shadow-lg">
                  <Search className="w-5 h-5" />
                  <span className="font-light">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Property Gallery
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Explore our curated collection of exceptional properties
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-sm">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group mx-2">
                      <Image
                        src={image}
                        alt={`Property ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-blue-900 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 font-light">
              We&apos;re here to help you find your perfect home
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all resize-none"
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="group flex-1 inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-sm hover:bg-blue-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    <span className="font-light">Send Message</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="group flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-sm hover:bg-green-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-light">Message on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Business Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-900/5 rounded-sm flex items-center justify-center text-blue-900 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-normal text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        Marci Metzger - THE RIDGE REALTY GROUP
                        <br />
                        3190 HW-160, Suite F<br />
                        Pahrump, Nevada 89048
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-900/5 rounded-sm flex items-center justify-center text-blue-900 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-normal text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600 font-light">(206) 919-6886</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-900/5 rounded-sm flex items-center justify-center text-blue-900 flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-normal text-gray-900 mb-1">
                        Office Hours
                      </h4>
                      <div className="text-gray-600 font-light space-y-1">
                        <p className="font-medium text-green-600">Open today</p>
                        <p>08:00 am – 07:00 pm</p>
                        <p className="pt-2 border-t border-gray-100">
                          Open daily: 8:00 am - 7:00 pm
                        </p>
                        <p className="text-sm italic">
                          Appointments outside office hours available upon
                          request. Just call!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 bg-gray-100">
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733586494!2d-115.9838!3d36.2029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b8c5e8e4e4e4e4%3A0x1234567890abcdef!2s3190%20HW-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Marci Metzger Office Location"
          />
        </div>
        <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm p-6 rounded-sm shadow-lg max-w-sm">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-6 h-6 text-blue-900" />
            <h3 className="text-lg font-normal text-gray-900">
              Office Location
            </h3>
          </div>
          <p className="text-gray-600 font-light leading-relaxed">
            3190 HW-160, Suite F<br />
            Pahrump, Nevada 89048
            <br />
            United States
          </p>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-light text-white mb-4">
            Marci Metzger Homes
          </div>
          <p className="text-sm font-light mb-6">
            Elevating the art of real estate
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.facebook.com/MarciHomes/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Image
                src="/social/facebook-black.png"
                alt="Facebook"
                width={24}
                height={24}
                className="w-6 h-6 filter brightness-0 invert"
              />
            </a>
            <a
              href="https://www.instagram.com/marciandlauren_nvrealtors/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Image
                src="/social/instagram-black.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6 filter brightness-0 invert"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/marci-metzger-30642496/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Image
                src="/social/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6 filter brightness-0 invert"
              />
            </a>
            <a
              href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Yelp"
            >
              <Image
                src="/social/yelp.png"
                alt="Yelp"
                width={24}
                height={24}
                className="w-6 h-6 filter brightness-0 invert"
              />
            </a>
          </div>

          <div className="flex justify-center gap-8 text-sm font-light">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <div className="mt-8 text-xs font-light">
            © 2025 Marci Metzger Homes. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  delay: string;
  isVisible: boolean;
}

function ServiceCard({
  image,
  title,
  description,
  delay,
  isVisible,
}: ServiceCardProps) {
  return (
    <div
      className={`group bg-white p-8 rounded-sm border border-gray-100 hover:border-blue-900/20 hover:shadow-2xl transition-all duration-500 transform ${delay} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm overflow-hidden mb-6">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed font-light">{description}</p>
    </div>
  );
}
