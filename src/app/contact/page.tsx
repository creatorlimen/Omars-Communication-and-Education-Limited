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
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 py-20 sm:py-28 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-black text-white uppercase tracking-wider">📩 Get In Touch</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Contact & Get Involved
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
                Join us in transforming education. We&apos;re excited to hear from you and explore how we can work together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Contact Methods</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Ways to Reach Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.link}
                    className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-bold uppercase tracking-tight text-primary mb-2">{method.title}</h3>
                      <p className="text-gray-600 font-medium">{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-6 block">Follow Us</span>
              <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-3 bg-white rounded-full border border-gray-200 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300"
                      title={social.name}
                    >
                      <Icon size={20} className="text-primary" />
                      <span className="text-sm font-bold text-gray-600 group-hover:text-primary">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-12">
              <div className="text-center mb-8">
                <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Contact Form</span>
                <h2 className="text-3xl font-black uppercase tracking-tight text-primary mb-2">Send Us a Message</h2>
                <p className="text-gray-600 font-medium">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                      className="rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                      className="rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
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
                    className="rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                    Phone (Optional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help or how you'd like to get involved..."
                    className="min-h-32 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20 rounded-full font-bold transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Opportunities</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Ways to Get Involved</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason) => (
                <div key={reason} className="group bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                  <div className="relative">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                      ✓
                    </span>
                    <p className="font-bold text-primary">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary/20 text-white py-20 sm:py-28 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-black text-white uppercase tracking-wider">✨ Make An Impact</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-white/80 font-medium max-w-2xl mx-auto mb-8">
              Your involvement matters. Whether as a student, educator, partner, or sponsor, you can help us transform education and amplify young voices.
            </p>
            <a href="#" onClick={() => document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' })}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20 rounded-full font-bold transition-all duration-300 hover:scale-105">
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
