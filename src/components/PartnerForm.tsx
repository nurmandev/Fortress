"use client";

import { useState, FormEvent } from "react";
import {
  Building2,
  TrendingUp,
  Handshake,
  Send,
  CheckCircle2,
  FileText,
  Upload,
} from "lucide-react";

const opportunityTypes = [
  {
    id: "investment",
    label: "Submit Investment Opportunity",
    icon: TrendingUp,
    description: "Present a viable investment opportunity for review",
  },
  {
    id: "acquisition",
    label: "Business Acquisition",
    icon: Building2,
    description: "Propose a business for acquisition or partnership",
  },
  {
    id: "joint-venture",
    label: "Joint Venture",
    icon: Handshake,
    description: "Explore joint venture possibilities",
  },
  {
    id: "partnership",
    label: "Strategic Partnership",
    icon: FileText,
    description: "Propose a strategic partnership arrangement",
  },
];

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    opportunityType: "",
    investmentRange: "",
    message: "",
    fileName: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/partner-submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-fortress-gold/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-fortress-gold" />
        </div>
        <h3 className="text-2xl font-bold text-fortress-ivory mb-3">
          Thank You, {formData.firstName}
        </h3>
        <p className="text-fortress-silver max-w-md mx-auto">
          Your submission has been received. Our team will review your enquiry
          and respond within 2-3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Opportunity Type Selection */}
      <div>
        <label className="block text-fortress-ivory font-medium mb-4 text-sm">
          Type of Enquiry *
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          {opportunityTypes.map((type) => (
            <label
              key={type.id}
              className={`flex items-start gap-4 p-4 border cursor-pointer transition-all duration-300 ${
                formData.opportunityType === type.id
                  ? "border-fortress-gold/50 bg-fortress-gold/5"
                  : "border-fortress-gold/10 bg-fortress-deep/50 hover:border-fortress-gold/25"
              }`}
            >
              <input
                type="radio"
                name="opportunityType"
                value={type.id}
                checked={formData.opportunityType === type.id}
                onChange={handleChange}
                required
                className="sr-only"
              />
              <div
                className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                  formData.opportunityType === type.id
                    ? "bg-fortress-gold/20"
                    : "bg-white/5"
                }`}
              >
                <type.icon
                  className={`w-5 h-5 ${
                    formData.opportunityType === type.id
                      ? "text-fortress-gold"
                      : "text-fortress-silver"
                  }`}
                />
              </div>
              <div>
                <p
                  className={`font-medium text-sm ${
                    formData.opportunityType === type.id
                      ? "text-fortress-gold"
                      : "text-fortress-ivory"
                  }`}
                >
                  {type.label}
                </p>
                <p className="text-fortress-silver text-xs mt-1">
                  {type.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Personal Info */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-fortress-silver text-sm mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-5 py-3.5 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory placeholder:text-fortress-silver/40 focus:outline-none focus:border-fortress-gold/50 transition-colors rounded-sm"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-fortress-silver text-sm mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-5 py-3.5 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory placeholder:text-fortress-silver/40 focus:outline-none focus:border-fortress-gold/50 transition-colors rounded-sm"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-fortress-silver text-sm mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3.5 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory placeholder:text-fortress-silver/40 focus:outline-none focus:border-fortress-gold/50 transition-colors rounded-sm"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label className="block text-fortress-silver text-sm mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-3.5 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory placeholder:text-fortress-silver/40 focus:outline-none focus:border-fortress-gold/50 transition-colors rounded-sm"
            placeholder="+971 50 XXX XXXX"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-fortress-silver text-sm mb-2">
            Company / Organisation
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-5 py-3.5 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory placeholder:text-fortress-silver/40 focus:outline-none focus:border-fortress-gold/50 transition-colors rounded-sm"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label className="block text-fortress-silver text-sm mb-2">
            Investment Range
          </label>
          <select
            name="investmentRange"
            value={formData.investmentRange}
            onChange={handleChange}
            className="w-full px-5 py-3.5 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory focus:outline-none focus:border-fortress-gold/50 transition-colors appearance-none rounded-sm"
          >
            <option value="">Select range</option>
            <option value="under-1m">Under $1 Million</option>
            <option value="1m-5m">$1M - $5 Million</option>
            <option value="5m-25m">$5M - $25 Million</option>
            <option value="25m-100m">$25M - $100 Million</option>
            <option value="100m+">$100 Million+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-fortress-silver text-sm mb-2">
          Brief Description *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-5 py-3.5 bg-fortress-navy border border-fortress-gold/20 text-fortress-ivory placeholder:text-fortress-silver/40 focus:outline-none focus:border-fortress-gold/50 transition-colors resize-none rounded-sm"
          placeholder="Provide a brief overview of the opportunity, key highlights, and expected outcomes..."
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-fortress-silver text-sm mb-2">
          Attach Documents (Optional)
        </label>
        <label className="flex items-center gap-3 px-5 py-3.5 bg-fortress-navy border border-dashed border-fortress-gold/20 text-fortress-silver hover:border-fortress-gold/40 transition-colors cursor-pointer rounded-sm">
          <Upload className="w-5 h-5 text-fortress-gold/60" />
          <span className="text-sm">
            {formData.fileName || "Upload pitch deck, financials, or reports (PDF, DOCX)"}
          </span>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.pptx,.xlsx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-fortress-gold to-fortress-champagne text-fortress-navy font-bold text-sm hover:shadow-2xl hover:shadow-fortress-gold/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 rounded-sm"
        >
          <Send className="w-4 h-4" />
          Submit Enquiry
        </button>
        <p className="text-fortress-silver/40 text-xs mt-4">
          All submissions are treated with strict confidentiality. Our team
          typically responds within 2-3 business days.
        </p>
      </div>
    </form>
  );
}
