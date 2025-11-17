import React, { useState } from "react";
import { supabase, isSupabaseReady } from "../lib/supabaseClient";

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    customerName: "",
    email: "",
    phone: "",
    service: "",
    eventDate: "",
    eventType: "",
    guests: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const services = [
    "Fine Dining Experience",
    "Catering Services", 
    "Takeaway & Delivery",
    "Corporate Lunch Services",
    "Festival & Special Events",
    "Cooking Classes & Workshops"
  ];

  const eventTypes = [
    "Wedding Reception",
    "Corporate Event",
    "Birthday Party",
    "Anniversary",
    "Business Meeting",
    "Family Dinner",
    "Religious Ceremony",
    "Cultural Event",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!isSupabaseReady) {
      setSubmitError("Supabase is not configured. Please try again later.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        customer_name: bookingData.customerName.trim(),
        email: bookingData.email.trim(),
        phone: bookingData.phone.trim(),
        service: bookingData.service,
        event_date: bookingData.eventDate,
        event_type: bookingData.eventType,
        guests: Number(bookingData.guests) || 0,
        message: bookingData.message.trim(),
        status: "pending"
      };

      const { error } = await supabase.from("service_bookings").insert(payload);

      if (error) {
        throw error;
      }

      setSubmitSuccess(true);
      setBookingData({
        customerName: "",
        email: "",
        phone: "",
        service: "",
        eventDate: "",
        eventType: "",
        guests: "",
        message: ""
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error("Failed to submit booking:", err);
      setSubmitError(err.message || "Unable to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-5xl mb-4">
          <i className="fas fa-check-circle"></i>
        </div>
        <h3 className="text-xl font-serif text-green-800 mb-2">Booking Submitted Successfully!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your booking request. We'll get back to you within 24 hours to confirm your reservation.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
        >
          Submit Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-[#800000] mb-4">Book Our Services</h2>
        <p className="text-gray-600">
          Fill out the form below to book our services. We'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {submitError}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="customerName"
              value={bookingData.customerName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={bookingData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={bookingData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Required *
            </label>
            <select
              name="service"
              value={bookingData.service}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Date *
            </label>
            <input
              type="date"
              name="eventDate"
              value={bookingData.eventDate}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Type *
            </label>
            <select
              name="eventType"
              value={bookingData.eventType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
            >
              <option value="">Select event type</option>
              {eventTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Guests *
            </label>
            <input
              type="number"
              name="guests"
              value={bookingData.guests}
              onChange={handleInputChange}
              required
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
              placeholder="Enter number of guests"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Requirements
          </label>
          <textarea
            name="message"
            value={bookingData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
            placeholder="Tell us about your specific requirements, dietary preferences, or any special requests..."
          ></textarea>
        </div>

        <div className="bg-[#FFFDD0] p-4 rounded-lg">
          <h4 className="font-medium text-[#800000] mb-2">Important Information:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• All our services are 100% vegetarian</li>
            <li>• We require at least 48 hours notice for bookings</li>
            <li>• Payment terms will be discussed during confirmation</li>
            <li>• We can accommodate special dietary requirements</li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FF9933] hover:bg-[#e88a2a] disabled:bg-gray-400 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i>
              Submitting Booking...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane mr-2"></i>
              Submit Booking Request
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

