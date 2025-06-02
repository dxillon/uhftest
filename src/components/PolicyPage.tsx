import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, FileText, AlertCircle, HelpCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-3/4"
          >
            <div className="mb-8">
              <Link to="/" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
              <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Policies
              </h1>
              <p className="mt-2 text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Shipping Policy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-500/20 p-3 rounded-full">
                  <FileText className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Digital Delivery Policy</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-white mb-2">Instant Access</h3>
                  <p>All PDF materials are instantly accessible after payment completion. You'll receive an email with login credentials to access your purchased content immediately.</p>
                </div>
                
                <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-white mb-2">Shipping Not Applicable</h3>
                  <p>Since all our products are digital, no physical shipping is involved. Your purchase is delivered electronically via email immediately after payment.</p>
                </div>
              </div>
            </motion.div>

            {/* Refund Policy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Refund Policy</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-white mb-2">24-Hour Window</h3>
                  <p>Refund requests must be made within 24 hours of payment. After this period, no refunds will be processed for any reason.</p>
                </div>
                
                <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-white mb-2">Processing Time</h3>
                  <p>Approved refunds will be processed within 5-7 business days. The refund will be credited to your original payment method.</p>
                </div>
                
                <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-gray-500">
                  <h3 className="font-semibold text-white mb-2">Non-Refundable After Access</h3>
                  <p>Once you've accessed the digital content, no refunds will be granted as the materials cannot be "returned".</p>
                </div>
              </div>
            </motion.div>

            {/* Cancellation Policy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Cancellation Policy</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-white mb-2">24-Hour Cancellation</h3>
                  <p>You may cancel your purchase within 24 hours of payment for a full refund, provided you haven't accessed the materials.</p>
                </div>
                
                <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-white mb-2">How to Cancel</h3>
                  <p>Send an email to <span className="text-orange-400">operations@uhfilms.in</span> with your order details within the cancellation window.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:w-1/4"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-400" />
                Need Help?
              </h3>
              
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-2 rounded-full mt-1">
                      <MapPin className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Location</h4>
                      <p className="text-gray-400 text-sm">Delhi, India</p>
                      <p className="text-orange-400 text-xs mt-1">Studio visits by appointment only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-2 rounded-full mt-1">
                      <Phone className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Call Us</h4>
                      <p className="text-gray-400 text-sm">Mon-Fri, 10am-6pm IST</p>
                      <a href="tel:+918920476445" className="text-orange-400 hover:text-orange-300 text-sm block mt-1 transition-colors">
                        +91 8920476445
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-2 rounded-full mt-1">
                      <Mail className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Email Us</h4>
                      <a href="mailto:operations@uhfilms.in" className="text-orange-400 hover:text-orange-300 text-sm block mt-1 transition-colors">
                        operations@uhfilms.in
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Quick Links */}
                <div>
                  <h4 className="font-medium text-white mb-3">Quick Links</h4>
                  <div className="space-y-2">
                    <Link 
                      to="/faq" 
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      FAQ Page
                    </Link>
                    <Link 
                      to="/courses" 
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Our Courses
                    </Link>
                    <Link 
                      to="/contact" 
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Contact Form
                    </Link>
                  </div>
                </div>
                
                {/* Emergency Notice */}
                <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-300">
                      For urgent issues outside business hours, please email with "URGENT" in the subject line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;