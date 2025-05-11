import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} MediCare+. All rights reserved.</p>
    </footer>
  );
}