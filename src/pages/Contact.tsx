import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Navigation, Phone, Calendar, Clock } from "lucide-react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] antialiased flex flex-col pt-26 selection:bg-primary-container selection:text-white">
      {/* Main Content Canvas */}
      <main className="grow">
        {/* Hero Section */}
        <section className="px-6 sm:px-12 md:px-20 py-20 md:py-28 max-w-360 mx-auto text-center">
          <h1 className="font-montserrat text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-extrabold italic uppercase tracking-tighter mb-8 leading-[1.05]">
            YOUR CAR&apos;S NEXT{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-container">
              DESTINATION.
            </span>
          </h1>
          <p className="font-inter text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Experience precision engineering and atmospheric luxury. Visit our
            state-of-the-art detailing facility.
          </p>
        </section>

        {/* Location Bento Grid */}
        <section className="px-6 sm:px-12 md:px-20 pb-28 max-w-360 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Map Area */}
            <div className="lg:col-span-8 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden relative min-h-100 lg:min-h-150 group cursor-pointer shadow-2xl">
              <ImageWithSkeleton
                alt="Indore Facility Dark Map"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA71tVJ-c4NBCzlUo3JjTf6k6gJxC__oUbpKPXKJ43ICr8HC4Ul5KE-84Yw4Umf0amOTabcFwTCyMqkTK8RYBqTdtseGRmv9y2hiGuquKdSTNozwuWhMqcI-6Ue1q9Oj2tWH6AF5_rfFlK_yS66tHNfz0rMEDWNcg_HeEa9iqpT4MlfL2f_FEPoWQtCwAxF9tCjcenmBOGGVbJAHH4M1gufKlq3qx97v03btFr7FAZOwOilWrU506eMdw"
                loading="lazy"
                wrapperClassName="absolute inset-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-[#1a1a1a]/70 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-lg shadow-2xl">
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                    Indore Facility
                  </h3>
                  <p className="font-inter text-sm text-on-surface-variant flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    Nipaniya, Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Actions Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Reach Us Card */}
              <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl grow flex flex-col justify-center shadow-xl">
                <h3 className="font-montserrat font-bold text-3xl text-white mb-6 italic uppercase">
                  REACH US
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://maps.google.com/?q=Detailing+Devil+Indore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center py-4 rounded-lg bg-linear-to-r from-primary-container to-error-container text-white font-montserrat font-bold text-xs tracking-widest uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_20px_40px_rgba(215,0,0,0.2)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Navigation className="size-4" />
                      GET DIRECTIONS
                    </span>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="w-full block text-center py-4 rounded-lg bg-[#1a1a1a]/70 backdrop-blur-xl border border-white/10 text-white font-montserrat font-bold text-xs tracking-widest uppercase hover:bg-surface-container-high transition-colors duration-300"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone className="size-4 text-primary" />
                      CALL NOW
                    </span>
                  </a>

                  <Link
                    to="/contact"
                    className="w-full block text-center py-4 rounded-lg bg-transparent border border-outline text-white font-montserrat font-bold text-xs tracking-widest uppercase hover:bg-surface-container-low transition-colors duration-300"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="size-4 text-primary" />
                      BOOK AN APPOINTMENT
                    </span>
                  </Link>
                </div>
              </div>

              {/* Hours of Operation Card */}
              <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl relative overflow-hidden shadow-xl">
                <Clock className="absolute -right-8 -top-8 size-48 text-white/5 pointer-events-none" />
                <h4 className="font-montserrat font-bold text-xs text-primary tracking-widest mb-4 uppercase">
                  HOURS OF OPERATION
                </h4>
                <ul className="font-inter text-sm space-y-2.5 text-on-surface-variant">
                  <li className="flex justify-between items-center">
                    <span>Mon - Fri</span>
                    <span className="text-white font-medium">
                      9:00 AM - 7:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="text-white font-medium">
                      10:00 AM - 5:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-error font-semibold">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
