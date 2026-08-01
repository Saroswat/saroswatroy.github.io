"use client";

import { useState } from "react";
import { profile } from "../data/portfolio";

export function ContactForm() {
  const [status, setStatus] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("company")) return;
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 20) { setStatus("Please add your name, a valid email and at least 20 characters of context."); return; }
    setStatus("Preparing your email…");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`;
    setStatus("Your email app should now be open. You can also use the direct email link alongside this form.");
  }
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-row"><label>Name<input name="name" autoComplete="name" minLength={2} required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div>
    <label className="honeypot" aria-hidden="true">Company<input name="company" tabIndex={-1} autoComplete="off" /></label>
    <label>How can I help?<textarea name="message" rows={7} minLength={20} required placeholder="Role, project or collaboration context" /></label>
    <button className="button primary" type="submit">Compose email <span aria-hidden="true">↗</span></button>
    <p className="form-status" aria-live="polite">{status}</p>
  </form>;
}
