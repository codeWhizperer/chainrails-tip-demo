'use client'
import { useState } from 'react'
import { PaymentModal, usePaymentModal } from '@chainrails/react'

export default function TipButton() {
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const cr = usePaymentModal({ sessionToken: null })

  async function handleTip() {
    setLoading(true)
    try {
      const response = await fetch('/api/tip-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: '0' }),
      })
      const data = await response.json()
      cr.updateSession(data)
      cr.open()
    } catch (err) {
      console.error('Failed to open payment modal:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={handleTip}
        disabled={loading}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 50,
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '12px 20px',
          background: '#3b82f6',
          color: '#ffffff',
          fontFamily: "'Courier New', monospace",
          fontSize: '11px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.1em',
          border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
          boxShadow: '0 0 24px rgba(59,130,246,0.25)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => {
          if (!loading) {
            const el = e.currentTarget as HTMLButtonElement
            el.style.background = '#2563eb'
            el.style.transform = 'translateY(-2px)'
            el.style.boxShadow = '0 0 40px rgba(59,130,246,0.45)'
          }
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLButtonElement
          el.style.background = '#3b82f6'
          el.style.transform = 'translateY(0)'
          el.style.boxShadow = '0 0 24px rgba(59,130,246,0.25)'
        }}
      >
        <span style={{ fontSize: '14px' }}>☕</span>
        <span>{loading ? 'Opening...' : 'Buy Me a Coffee'}</span>
      </button>

      <PaymentModal
        {...cr}
        onSuccess={() => {
          setShowToast(true)
          setTimeout(() => setShowToast(false), 6000)
        }}
      />

      {showToast && (
        <div style={{
          position: 'fixed', bottom: '88px', right: '24px', zIndex: 50,
          background: '#0d1520',
          border: '1px solid rgba(59,130,246,0.3)',
          padding: '16px 20px', maxWidth: '280px',
          boxShadow: '0 8px 40px rgba(59,130,246,0.15)',
          fontFamily: "'Courier New', monospace",
          animation: 'fadeUp 0.4s ease forwards',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span style={{ color: '#3b82f6', fontSize: '16px', marginTop: '2px' }}>✓</span>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Thank you so much! 🙏
              </p>
              <p style={{ fontSize: '11px', color: '#4a5568', marginTop: '6px', lineHeight: 1.6 }}>
                Your support means everything. It helps me keep building and writing.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}