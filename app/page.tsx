"use client";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#080c14', color: '#f0f0f0', fontFamily: "'Courier New', monospace" }}>

      <nav style={{ borderBottom: '1px solid rgba(59,130,246,0.1)', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }} />
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4a5568' }}>
            chainrails / tip-demo
          </span>
        </div>
        <a href="https://docs.chainrails.io" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '11px', color: '#4a5568', textDecoration: 'none', letterSpacing: '0.05em' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#3b82f6')}
          onMouseLeave={e => (e.currentTarget.style.color = '#4a5568')}
        >
          docs →
        </a>
      </nav>

      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', textAlign: 'center' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(59,130,246,0.3)', padding: '6px 14px', borderRadius: '999px', marginBottom: '40px' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }} />
          <span style={{ fontSize: '10px', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Live Demo · Buy Me a Coffee
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(52px, 10vw, 100px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.92, marginBottom: '20px', color: '#ffffff' }}>
          Chain<span style={{ color: '#3b82f6' }}>rails</span>
        </h1>

        <p style={{ fontSize: '12px', color: '#4a5568', marginBottom: '56px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          by{' '}
          <a href="https://horuslabs.co" target="_blank" rel="noopener noreferrer" className="horus-link">
            Horus Labs
          </a>
        </p>

        <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.06)', marginBottom: '56px' }} />

        <div style={{ maxWidth: '520px', width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>

          <div style={{ background: '#0d1520', border: '1px solid rgba(59,130,246,0.12)', padding: '24px' }}>
            <p style={{ fontSize: '10px', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
              What this demos
            </p>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.75 }}>
              A crypto tip button powered by{' '}
              <a href="https://chainrails.io" target="_blank" rel="noopener noreferrer"
                style={{ color: '#3b82f6', textDecoration: 'none' }}>
                Chainrails
              </a>
              {' '}— accept payments from any chain, any token, through a single integration. No bridge logic. No multiple wallets.
            </p>
          </div>

          <div style={{ background: '#0d1520', border: '1px solid rgba(59,130,246,0.12)', padding: '24px' }}>
            <p style={{ fontSize: '10px', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
              How it works
            </p>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Click the ☕ button (bottom right)',
                'Chainrails payment modal opens',
                'Pick your chain and token',
                'Send any amount you want',
                'Funds arrive in the recipient wallet',
              ].map((step, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ fontSize: '10px', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.3)', padding: '2px 7px', flexShrink: 0, marginTop: '1px', fontFamily: "'Courier New', monospace" }}>
                    0{i + 1}
                  </span>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.2)', padding: '24px' }}>
            <p style={{ fontSize: '10px', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>
              Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Next.js 14', 'App Router', '@chainrails/react', '@chainrails/sdk', 'TypeScript', 'Tailwind CSS'].map((tag) => (
                <span key={tag} style={{ fontSize: '11px', border: '1px solid rgba(59,130,246,0.2)', color: '#3b82f6', padding: '4px 10px', background: 'rgba(59,130,246,0.05)', fontFamily: "'Courier New', monospace" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '56px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          <p style={{ fontSize: '12px', color: '#4a5568' }}>
            Read the full tutorial on{' '}
            <a href="https://adegbite.hashnode.dev" target="_blank" rel="noopener noreferrer"
              style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#3b82f6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
            >
              Hashnode →
            </a>
          </p>
          <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.08)' }} />
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(59,130,246,0.1)', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '11px', color: '#4a5568' }}>
          Powered by{' '}
          <a href="https://chainrails.io" target="_blank" rel="noopener noreferrer"
            style={{ color: '#3b82f6', textDecoration: 'none' }}>
            Chainrails
          </a>
        </span>
        <a href="https://github.com/codeWhizperer" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '11px', color: '#4a5568', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#4a5568')}
        >
          @codeWhizperer
        </a>
      </footer>

    </main>
  )
}