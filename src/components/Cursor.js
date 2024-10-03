import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.classList.add("cursor-none");

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  return null;
};

export default CustomCursor;
