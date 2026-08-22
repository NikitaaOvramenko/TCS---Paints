"use client";

import { useState } from "react";
import type { QuoteFormData, FormErrors, FormStatus, Service } from "./types";
import { servicesInitial } from "./types";
import {
  validateQuoteForm,
  hasErrors,
  getInitialFormData,
} from "./quoteSchema";
import { submitQuote } from "./submitQuote";
import { ImageUpload } from "./ImageUpload";

export function QuoteForm() {
  const [services, setServices] = useState<Service[]>(servicesInitial);
  const [formData, setFormData] = useState<QuoteFormData>(getInitialFormData());
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceSelect = (service: Service[]) => {
    setFormData((prev) => ({ ...prev, service: service.map((s) => s.name) }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateQuoteForm(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      return;
    }

    setStatus("submitting");
    const result = await submitQuote(formData);

    if (result.success) {
      setStatus("success");
      setSubmitMessage(result.message);
      setFormData(getInitialFormData());
    } else {
      setStatus("error");
      setSubmitMessage(result.message);
    }
  };

  if (status === "success") {
    return (
      <div className="border border-neutral-900/15 p-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center border border-purple-700/30">
          <svg
            className="h-6 w-6 text-purple-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="display text-2xl">Thank you</h3>
        <p className="mt-3 opacity-70">{submitMessage}</p>
        <p className="mt-4 text-sm opacity-50">
          We&apos;ll be in touch within 24 hours.
        </p>
        <button
          className="eyebrow mt-8 rounded-none border border-current px-6 py-3 text-purple-700 transition-colors hover:bg-purple-50"
          onClick={() => setStatus("idle")}
        >
          Submit Another Quote
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error message */}
      {status === "error" && (
        <div className="rounded-none border border-red-500/40 bg-red-50 p-4 text-red-700">
          {submitMessage}
        </div>
      )}

      {/* Name fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="eyebrow mb-3 block opacity-50"
          >
            First Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`block w-full rounded-none border bg-white px-4 py-3.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-purple-700 focus:outline-none ${
              errors.name ? "border-red-500" : "border-neutral-900/15"
            }`}
            placeholder="John"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="eyebrow mb-3 block opacity-50"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className={`block w-full rounded-none border bg-white px-4 py-3.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-purple-700 focus:outline-none ${
              errors.lastname ? "border-red-500" : "border-neutral-900/15"
            }`}
            placeholder="Doe"
          />
          {errors.lastname && (
            <p className="mt-1 text-sm text-red-400">{errors.lastname}</p>
          )}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="eyebrow mb-3 block opacity-50"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`block w-full rounded-none border bg-white px-4 py-3.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-purple-700 focus:outline-none ${
              errors.email ? "border-red-500" : "border-neutral-900/15"
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="eyebrow mb-3 block opacity-50"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`block w-full rounded-none border bg-white px-4 py-3.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-purple-700 focus:outline-none ${
              errors.phone ? "border-red-500" : "border-neutral-900/15"
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* City & Postal Code
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="town"
            className="eyebrow mb-3 block opacity-50"
          >
            City / Town *
          </label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className={`block w-full rounded-none border bg-white px-4 py-3.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-purple-700 focus:outline-none ${
              errors.town ? "border-red-500" : "border-neutral-900/15"
            }`}
            placeholder="Miami"
          />
          {errors.town && (
            <p className="mt-1 text-sm text-red-400">{errors.town}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="street"
            className="eyebrow mb-3 block opacity-50"
          >
            Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="block w-full rounded-none border border-neutral-900/15 bg-white px-4 py-3.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-purple-700 focus:outline-none"
            placeholder="123 Main St"
          />
        </div>
      </div> */}

      <div>
        <label
          htmlFor="postal_code"
          className="eyebrow mb-3 block opacity-50"
        >
          Postal Code
        </label>
        <input
          type="text"
          id="postal_code"
          name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
          className="block w-full rounded-none border border-neutral-900/15 bg-white px-4 py-3.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-purple-700 focus:outline-none sm:max-w-[50%]"
          placeholder="33101"
        />
      </div>

      {/* Service selection buttons */}
      <div>
        <label className="eyebrow mb-4 block opacity-50">
          Select Service Type *
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {services.map((service: Service) => (
            <button
              key={service.name}
              type="button"
              onClick={() => {
                const updated = services.map((s) =>
                  s.name === service.name
                    ? { ...s, isSelected: !s.isSelected }
                    : s,
                );
                console.log(updated);
                setServices(updated);
                handleServiceSelect(updated.filter((s) => s.isSelected));
              }}
              className={`eyebrow rounded-none border px-4 py-3.5 transition-colors ${
                service.isSelected
                  ? "border-purple-700 bg-purple-50 text-purple-700"
                  : "border-neutral-900/15 bg-white text-neutral-600 hover:border-purple-700/50"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>
        {errors.service && (
          <p className="mt-2 text-sm text-red-400">{errors.service}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="eyebrow mb-3 block opacity-50"
        >
          What do you need painted?
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className={`block w-full rounded-none border bg-white px-4 py-3.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-purple-700 focus:outline-none ${
            errors.description ? "border-red-500" : "border-neutral-900/15"
          }`}
          placeholder="Tell us about your project - rooms, colors, timeline..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-400">{errors.description}</p>
        )}
      </div>

      {/* Image Upload */}
      <ImageUpload
        onImagesChange={(images) =>
          setFormData((prev) => ({ ...prev, images }))
        }
        initialImages={formData.images}
      />

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="eyebrow w-full rounded-none bg-neutral-950 px-6 py-4.5 text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "submitting" ? "Submitting..." : "Submit Request"}
      </button>

      {/* Validation hint */}
      {Object.values(errors).some(Boolean) && (
        <p className="text-center text-sm text-red-400">
          Please fill in all required fields to submit.
        </p>
      )}
    </form>
  );
}
