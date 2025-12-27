"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import { IMAGES } from "@/utils/images";

const menuItems = [
  { label: "Dashboard", icon: "bi-speedometer2", href: "/" },
  { label: "Tables", icon: "bi-table", href: "/tables" },
  { label: "Billing", icon: "bi-credit-card", href: "/billing" },
  { label: "Virtual Reality", icon: "bi-box", href: "/vr" },
  { label: "RTL", icon: "bi-globe", href: "/rtl" },
  // Divider/Category can be handled here or inside the map
  { label: "Profile", icon: "bi-person-fill", href: "/profile", category: "ACCOUNT PAGES" },
  { label: "Sign In", icon: "bi-bookmarks-fill", href: "/signin" },
  { label: "Sign Up", icon: "bi-journal-medical", href: "/signup" },
  
];


const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      {/* 1. FIXED HEADER: Logo Section */}
      <div className={styles.sidebarHeader}>
        <div className="d-flex align-items-center gap-2 p-3 pb-2">
          <Image src={IMAGES.MAIN_LOGO} alt="Logo" width={30} height={30} />
          <span className="fw-semibold text-muted fs-6" style={{ letterSpacing: "0px" }}>
            Argon Dashboard 2
          </span>
        </div>
        <hr className="mx-3 my-2" />
      </div>

      {/* 2. SCROLLABLE CONTENT: Menu Items */}
      <div className={styles.scrollContainer}>
        <ul className="nav flex-column gap-1 p-3">
          {menuItems.map((item, index) => (
            <div key={item.label}>
              {/* Optional: Render category label if it exists */}
              {item.category && (
                <div className="mt-4 mb-2 ps-2">
                  <small className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.75rem' }}>
                    {item.category}
                  </small>
                </div>
              )}
              
              <li className="nav-item">
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}
                >
                  <div className={styles.iconWrapper}>
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <span>{item.label}</span>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;