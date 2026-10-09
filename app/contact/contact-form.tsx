"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const initialState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  budget: "",
  location: "",
  details: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    setStatus(response.ok ? "success" : "error");
    setMessage(result.message);
    if (response.ok) setValues(initialState);
  }

  function update(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  return <form className="contact-form" onSubmit={onSubmit}>
    <input className="hidden-field" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} aria-hidden="true" />
    <label>Full Name<input required value={values.fullName} onChange={(event) => update("fullName", event.target.value)} /></label>
    <label>Company Name<input required value={values.companyName} onChange={(event) => update("companyName", event.target.value)} /></label>
    <label>Business Email<input required type="email" value={values.email} onChange={(event) => update("email", event.target.value)} /></label>
    <label>Phone Number<input required value={values.phone} onChange={(event) => update("phone", event.target.value)} /></label>
    <label>Event Type<select required value={values.eventType} onChange={(event) => update("eventType", event.target.value)}>
      <option value="">Select event type</option>
      <option>Product Launch</option>
      <option>Brand Activation</option>
      <option>Roadshow</option>
      <option>Premium Event Support</option>
      <option>Other Corporate Event</option>
    </select></label>
    <label>Proposed Event Date<input required type="date" value={values.eventDate} onChange={(event) => update("eventDate", event.target.value)} /></label>
    <label>Estimated Budget <span>Optional</span><input value={values.budget} onChange={(event) => update("budget", event.target.value)} /></label>
    <label>Event Location <span>Optional</span><input value={values.location} onChange={(event) => update("location", event.target.value)} /></label>
    <label className="full">Event Details<textarea required rows={6} value={values.details} onChange={(event) => update("details", event.target.value)} /></label>
    <button className="button light full" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Submit Inquiry"} <Send size={17} /></button>
    {message ? <p className={`form-message ${status}`}>{message}</p> : null}
  </form>;
}
