// src/Components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import '../assets/CSS/ScrollToTopButton.css'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}
