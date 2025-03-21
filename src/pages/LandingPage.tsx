
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Phone, Check, Heart, Clock, Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import LoginButton from "@/components/auth/LoginButton";
import { useIsMobile } from "@/hooks/use-mobile";

const LandingPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Updated with new background image showing elderly support */}
      <div
        className="relative bg-cover bg-center py-8 md:py-12 px-4 md:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Navigation */}
        <div className="container mx-auto max-w-7xl">
          <nav className="flex justify-between items-center mb-8 md:mb-12">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl font-serif text-white font-bold">
                Senior Companion
              </h1>
            </div>
            
            {/* Mobile menu button */}
            {isMobile && (
              <button 
                onClick={toggleMobileMenu}
                className="text-white z-50"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            )}
            
            {/* Desktop navigation */}
            {!isMobile && (
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-white hover:text-gray-300">Home</a>
                <a href="#services" className="text-white hover:text-gray-300">Services</a>
                <a href="#about" className="text-white hover:text-gray-300">About Us</a>
                <a href="#resources" className="text-white hover:text-gray-300">Resources</a>
                <a href="#contact" className="text-white hover:text-gray-300">Contact Us</a>
                <LoginButton />
              </div>
            )}
          </nav>
          
          {/* Mobile menu overlay */}
          {isMobile && mobileMenuOpen && (
            <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center space-y-6 text-xl">
                <a href="#" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Home</a>
                <a href="#services" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Services</a>
                <a href="#about" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>About Us</a>
                <a href="#resources" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Resources</a>
                <a href="#contact" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Contact Us</a>
                <div onClick={toggleMobileMenu}>
                  <LoginButton />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Hero Text */}
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-4 md:mb-6">
                Providing Peace Of Mind With Personalized In-Home Senior Care
              </h2>
              <p className="text-lg md:text-xl text-white mb-6 md:mb-8">
                In San Antonio and All Surrounding Areas
              </p>
              <Button 
                className="bg-companion hover:bg-companion/90 text-white w-full sm:w-auto" 
                onClick={() => navigate("/auth")}
                size={isMobile ? "lg" : "default"}
              >
                Get Started Now
              </Button>
            </div>

            {/* Contact Card */}
            <div className="w-full md:w-2/5 max-w-md mx-auto md:mx-0">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Don't delay to talk with us</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Email Address" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Input 
                      placeholder="Phone" 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your message" 
                      className="resize-none"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="rounded-full bg-green-500 hover:bg-green-600 h-10 w-10 sm:h-12 sm:w-12 p-0">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-400 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-5xl font-serif font-bold mb-4">194<sup>+</sup></h3>
              <h4 className="text-xl font-bold mb-2">Total Clients</h4>
              <p className="text-sm">Total Clients trust our best in town caregiver service.</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-serif font-bold mb-4">132<sup>+</sup></h3>
              <h4 className="text-xl font-bold mb-2">Total Testimonials</h4>
              <p className="text-sm">Total Testimonials they provide after experiencing our services.</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-5xl font-serif font-bold mb-4">Since 2009</h3>
              <h4 className="text-xl font-bold mb-2">Starting Journey</h4>
              <p className="text-sm">We began services in 2009 in the heart of the hill country.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section - Replacing Tech Stack Section */}
      <div id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-serif font-bold mb-4 text-center">About Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Dedicated to enhancing the quality of life for seniors and their families through compassionate care
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                alt="Senior care team" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  At Senior Companion, our mission is to provide compassionate, personalized care that allows seniors to live independently, safely, and with dignity in their own homes. We believe in creating meaningful connections that enhance the quality of life for both seniors and their families.
                </p>
                <p className="text-gray-700">
                  Founded in 2009, we've grown to become the most trusted senior care service in San Antonio and surrounding areas, serving over 190 families with dedication and heart.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold flex items-center">
                      <Heart className="mr-2 h-5 w-5 text-companion" />
                      Compassion
                    </h4>
                    <p className="text-gray-600">We care deeply about every client we serve</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-companion" />
                      Safety
                    </h4>
                    <p className="text-gray-600">We prioritize the wellbeing of our clients</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold flex items-center">
                      <Check className="mr-2 h-5 w-5 text-companion" />
                      Quality
                    </h4>
                    <p className="text-gray-600">We deliver exceptional service every time</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-companion" />
                      Reliability
                    </h4>
                    <p className="text-gray-600">We're there when you need us, every time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Personal Care</h3>
              <p>We provide assistance with daily activities including bathing, dressing, and medication reminders.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Companionship</h3>
              <p>Our caregivers offer conversation, activities, and emotional support to combat loneliness.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Health Monitoring</h3>
              <p>Regular health checks and monitoring of vital signs to ensure well-being.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone CTA */}
      <div className="bg-companion py-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center md:justify-end">
            <a href="tel:2103910946" className="flex items-center text-white hover:text-white/90">
              <Phone className="mr-2 h-5 w-5" />
              <span className="text-xl font-bold">(210) 391-0946</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
