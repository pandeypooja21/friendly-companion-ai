
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Phone, Check, Server, Database, Bot, Cloud, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import LoginButton from "@/components/auth/LoginButton";

const LandingPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-12 px-4 md:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/cc4eee7b-1a54-4f44-a305-df86cc3f95e5.png')`,
          backgroundSize: "cover",
        }}
      >
        {/* Navigation */}
        <div className="container mx-auto max-w-7xl">
          <nav className="flex justify-between items-center mb-12">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif text-white font-bold">
                Senior Companion
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-gray-300">Home</a>
              <a href="#services" className="text-white hover:text-gray-300">Services</a>
              <a href="#about" className="text-white hover:text-gray-300">About Us</a>
              <a href="#resources" className="text-white hover:text-gray-300">Resources</a>
              <a href="#contact" className="text-white hover:text-gray-300">Contact Us</a>
              <LoginButton />
            </div>
          </nav>

          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Hero Text */}
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-6">
                Providing Peace Of Mind With Personalized In-Home Senior Care
              </h2>
              <p className="text-xl text-white mb-8">
                In San Antonio and All Surrounding Areas
              </p>
              <Button 
                className="bg-companion hover:bg-companion/90 text-white" 
                onClick={() => navigate("/auth")}
              >
                Get Started Now
              </Button>
            </div>

            {/* Contact Card */}
            <div className="md:w-2/5">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6">Don't delay to talk with us</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
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
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="rounded-full bg-green-500 hover:bg-green-600 h-12 w-12 p-0">
                      <ArrowRight className="h-5 w-5" />
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

      {/* Tech Stack Section */}
      <div id="tech-stack" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-serif font-bold mb-4 text-center">Our Tech Stack</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Leveraging advanced AI technologies to provide personalized care and support for seniors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="AI Technology Integration" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">AI Integration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-companion rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center">
                        <Bot className="mr-2 h-5 w-5 text-companion" />
                        OpenAI API
                      </h4>
                      <p className="text-gray-600">Conversational AI for personalized recommendations and assistance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-companion rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center">
                        <Cloud className="mr-2 h-5 w-5 text-companion" />
                        Google Cloud Vision API
                      </h4>
                      <p className="text-gray-600">Image recognition for monitoring and safety features</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-companion rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center">
                        <Fingerprint className="mr-2 h-5 w-5 text-companion" />
                        Microsoft Azure Emotion API
                      </h4>
                      <p className="text-gray-600">Emotion detection for better understanding and assistance</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold flex items-center">
                      <Server className="mr-2 h-5 w-5 text-companion" />
                      Frontend
                    </h4>
                    <p className="text-gray-600">React.js with modern UI libraries</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold flex items-center">
                      <Server className="mr-2 h-5 w-5 text-companion" />
                      Backend
                    </h4>
                    <p className="text-gray-600">Node.js with Express.js</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold flex items-center">
                      <Database className="mr-2 h-5 w-5 text-companion" />
                      Database
                    </h4>
                    <p className="text-gray-600">Firebase + Supabase</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold flex items-center">
                      <Cloud className="mr-2 h-5 w-5 text-companion" />
                      Hosting
                    </h4>
                    <p className="text-gray-600">Vercel for quick deployment</p>
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
