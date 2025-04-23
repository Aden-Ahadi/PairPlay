"use client";

import React from "react";
import Link from "next/link";
import "./PillButton.css"; // Import the CSS file

interface PillButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const PillButton: React.FC<PillButtonProps> = ({
  children,
  onClick,
  className = "",
  href,
}) => {
  // If href is provided, render a Link component
  if (href) {
    return (
      <Link href={href} passHref className="button-link">
        <button className={`button ${className}`} onClick={onClick}>
          <div>
            <div>
              <div>{children}</div>
            </div>
          </div>
        </button>
      </Link>
    );
  }

  // Otherwise, render a regular button
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <div>
        <div>
          <div>{children}</div>
        </div>
      </div>
    </button>
  );
};

export default PillButton;
