'use client';

import React from "react"

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server or API
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'omarscomandedultd@gmail.com',
      link: 'mailto:omarscomandedultd@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234',
      link: 'tel:+234',
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/omarseducation',
      label: '@omarseducation',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/omarseducation',
      label: '@omarseducation',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/omarseducation',
      label: '@omarseducation',
    },
  ];

  const reasons = [
    'Join our programs',
    'Submit an entry for Whispers and Words',
    'Sponsor an initiative',
    'Partner with us',
    'Share feedback',
    'Volunteer',
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-primary">
                Contact & Get Involved
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Join us in transforming education. We&apos;re excited to hear from you and explore how we can work together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Ways to Reach Us</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.link}
                    className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{method.title}</h3>
                    <p className="text-foreground/70">{method.value}</p>
                  </a>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="text-center mb-12">
              <h3 className="text-lg font-semibold text-primary mb-6">Follow Us</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:bg-primary/5 transition-colors"
                      title={social.name}
                    >
                      <Icon size={20} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg border border-border p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-primary mb-2 text-center">Send Us a Message</h2>
              <p className="text-foreground/70 text-center mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone (Optional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help or how you'd like to get involved..."
                    className="min-h-32"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Ways to Get Involved</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason) => (
                <div key={reason} className="bg-card rounded-lg p-6 border border-border text-center hover:shadow-lg transition-shadow">
                  <p className="font-semibold text-primary">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Your involvement matters. Whether as a student, educator, partner, or sponsor, you can help us transform education and amplify young voices.
            </p>
            <a href="#" onClick={() => document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' })}>
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
