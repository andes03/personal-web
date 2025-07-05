'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
