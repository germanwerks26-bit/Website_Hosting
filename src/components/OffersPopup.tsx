"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, CheckCircle, Percent, Sparkles, Car, Users, Star } from "lucide-react";

const offers = [
  {
    id: 1,
    icon: CheckCircle,
    title: "Vehicle Health Checkup & Onboard Diagnosis @ ₹500 ",
    shortText: "₹500 Health Check & Onboard Diagnosis",
    description: "Comprehensive multi-point inspection covering brakes, fluids, battery, tires, and more.",
    details: [
      "Complete brake system inspection",
      "Fluid levels check (engine oil, coolant, brake fluid)",
      "Battery health & charging system test",
      "Tire pressure & tread depth measurement",
      "Suspension & steering inspection"
    ],
    color: "from-blue-600 to-blue-800",
    badge: "bg-blue-600",
  },
  {
    id: 2,
    icon: Percent,
    title: "10% Off Labor Charges on all Mechanical Services",
    shortText: "10% Off Labor on all Mechanical Services",
    description: "Flat discount on all labor charges for services booked during our launch period.",
    details: [
      "Valid on all service types",
      "No minimum booking amount",
      "Applicable on launch month bookings",
      "Combine with other offers",
      "Premium service at special rates"
    ],
    color: "from-green-600 to-green-800",
    badge: "bg-green-600",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Car Wash & Cleaning starts @ ₹399",
    shortText: "Car Wash & Cleaning starts @ ₹399",
    description: "Complimentary exterior wash and interior vacuum cleaning with any paid service.",
    details: [
      "Full exterior wash & dry",
      "Interior vacuum cleaning",
      "Dashboard wipe & shine",
      "Window cleaning (interior & exterior)",
      "Tire shine application"
    ],
    color: "from-purple-600 to-purple-800",
    badge: "bg-purple-600",
  },
  {
    id: 4,
    icon: Car,
    title: "20 % Ceramic Coating | PPF Film installation",
    shortText: "Ceramic Coating & PPF Film - 20% Off",
    description: "Get 20% off on premium ceramic and PPF film services for superior paint protection.",
    details: [
      "Advanced hydrophobic ceramic coating",
      "Durable paint protection film (PPF)",
      "Enhanced gloss & shine",
      "Scratch & swirl mark resistance",
      "Long-lasting protection up to 10 years",
    ],
    color: "from-orange-600 to-orange-800",
    badge: "bg-orange-600",
  },
  {
    id: 5,
    icon: Users,
    title: "Full Body Painting starts from 49,999 Rates",
    shortText: "Full Body Painting from ₹49,999",
    description: "Full Body Painting starts from 49,999 Rates with premium quality paints and expert finish.",
    details: [
      "Premium quality automotive paints",
      "Expert surface preparation & priming",
      "Multiple coats for durability & shine",
      "Color matching & custom options",
      "Protective clear coat finish",
      "Warranty on paintwork upto 5 years",
    ],
    color: "from-pink-600 to-pink-800",
    badge: "bg-pink-600",
  },
];

export function OffersPopup() {
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  return (
    <>
      {/* Floating Offers Badge */}
      <div className="fixed top-24 right-4 z-40 flex flex-col gap-2">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setSelectedOffer(offer.id)}
            onMouseLeave={() => setSelectedOffer(null)}
            className="relative group"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`${offer.badge} text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:shadow-xl transition-all relative overflow-hidden`}
            >
              {/* Sparkle animation */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white opacity-20"
              />
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Gift className="h-4 w-4 relative z-10" />
              </motion.div>
              <span className="text-sm font-bold relative z-10">{offer.shortText}</span>
              
              {/* Pulse ring */}
              <motion.div
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.5, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`absolute inset-0 ${offer.badge} rounded-full`}
              />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedOffer && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 50 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 right-24 z-50 w-96"
            onMouseEnter={() => setSelectedOffer(selectedOffer)}
            onMouseLeave={() => setSelectedOffer(null)}
          >
            {(() => {
              const offer = offers.find(o => o.id === selectedOffer);
              if (!offer) return null;

              return (
                <div className={`bg-gradient-to-br ${offer.color} rounded-2xl shadow-2xl p-6 text-white border-2 border-white/20 backdrop-blur-sm`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <offer.icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold">{offer.title}</h3>
                        <div className="flex items-center mt-1">
                          <motion.div
                            animate={{ 
                              rotate: [0, 360],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity 
                            }}
                          >
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          </motion.div>
                          <span className="text-xs font-semibold">Launch Offer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Details List */}
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <h4 className="text-sm font-semibold mb-3 flex items-center">
                      <motion.div
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity 
                        }}
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                      </motion.div>
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {offer.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start text-sm"
                        >
                          <motion.div
                            animate={{ 
                              scale: [1, 1.3, 1],
                            }}
                            transition={{ 
                              duration: 1, 
                              repeat: Infinity,
                              delay: idx * 0.2
                            }}
                          >
                            <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 text-green-300" />
                          </motion.div>
                          <span className="text-white/90">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-xs text-white/70 text-center">
                      🎉 Valid for first 100 customers | January 2026
                    </p>
                  </div>

                  {/* Animated corner accent */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1],
                      y: [0, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Gift className="h-4 w-4 text-yellow-900" />
                    </motion.div>
                  </motion.div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
