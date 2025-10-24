'use client'

import React from 'react'
import { Phone } from 'lucide-react'

export default function WhatsAppFab() {
  // US number in international format without symbols
  const waNumber = '16198373522'
  const waLink = `https://wa.me/${waNumber}`

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-fab"
    >
      <div className="whatsapp-fab-icon" aria-hidden>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.5 3.5C18.5 1.5 15.9 1 13.6 1 8 1 3.8 5.2 3.8 10.8c0 1.9.5 3.3 1.6 4.7L3 21l5.8-1.5c1.3.7 2.8 1 4.4 1 5.6 0 9.8-4.2 9.8-9.8 0-2.3-.5-4.6-2.5-6.1z" fill="#25D366"/>
          <path d="M17.3 14.1c-.4-.2-2.2-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.2-.8.1-.4-.1-1.6-.6-3-1.9-1.1-1.1-1.8-2.5-2-3-.2-.4 0-.6.1-.8.1-.1.3-.3.4-.5.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2 0-.4 0-.5 0-.2-.9-2.3-1.2-3.2-.3-.9-.6-1-1.1-1.1-.4-.1-.9 0-1.3.1-.4.1-1 .4-1.4.7-.4.3-1 .9-1.1 1.4-.1.5-.2 1.3.9 3 1.1 1.7 3.5 4.1 6.6 5.4 3.1 1.3 3.1 1 3.6 1 .5 0 1.5-.6 1.7-1 .2-.4.2-.9.1-1.1-.1-.2-.4-.3-.8-.5z" fill="#fff"/>
        </svg>
      </div>
      <span className="whatsapp-fab-label">WhatsApp</span>
    </a>
  )
}
