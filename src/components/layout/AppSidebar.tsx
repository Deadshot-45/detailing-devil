import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services & Packages", path: "/services" },
  { name: "The Devil's Garage", path: "/our-work" },
  { name: "Why Detailing Devil", path: "/why-us" },
  { name: "The 6-Stage Process", path: "/process" },
  { name: "VIP Client Reviews", path: "/reviews" },
  { name: "Contact & Studio", path: "/contact" },
];

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sliding Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface-container-lowest border-l border-[#222] p-6 flex flex-col justify-between shadow-2xl z-50"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#222]">
                <BrandLogo />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-[#888] hover:text-white p-2"
                >
                  <span className="material-symbols-outlined text-xl">
                    close
                  </span>
                </motion.button>
              </div>

              {/* Nav Links */}
              <div className="py-6 flex flex-col space-y-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-heading font-semibold transition-all ${
                          isActive
                            ? "bg-primary-container/15 text-primary-container border-l-2 border-primary-container"
                            : "text-[#888] hover:text-white hover:bg-white/5"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{item.name}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Booking Button */}
            <div className="pt-6 border-t border-[#222] space-y-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <NavLink
                  to="/contact"
                  onClick={onClose}
                  className="w-full block text-center py-3 bg-primary-container hover:bg-[#b00000] text-white font-heading font-bold text-xs uppercase tracking-widest rounded transition-colors shadow-lg shadow-primary-container/20"
                >
                  Book Appointment
                </NavLink>
              </motion.div>
              <div className="text-center text-xs text-[#666]">
                Nipaniya, Indore, Madhya Pradesh
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
