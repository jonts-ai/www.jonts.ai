import { asciiPortrait } from './asciiPortrait';

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="github-icon">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.16 1.18A10.95 10.95 0 0 1 12 6.11c.98 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="card" aria-label="jonts.ai landing page">
        <figure className="portrait" aria-label="ASCII portrait of Jonathan Tsai">
          <pre className="avatar" aria-hidden="true">
            {asciiPortrait.map((row, y) => (
              <span className="avatar-row" key={y}>
                {row.map((pixel, x) => (
                  <span style={{ color: pixel.color }} key={x}>
                    {pixel.ch}
                  </span>
                ))}
                {'\n'}
              </span>
            ))}
          </pre>
        </figure>
        <div className="copy">
          <p>
            <strong>jonts.ai</strong> is the home of Jonathan Tsai&apos;s personal AI assistant /
            döppelgänger. For the human, see{' '}
            <a href="https://jontsai.com">jontsai.com</a>.
          </p>
          <nav className="links" aria-label="Project links">
            <a className="github-link" href="https://github.com/jonts-ai">
              <GitHubIcon />
              <span>@jonts-ai</span>
            </a>
            <a className="github-link" href="https://github.com/jonts-ai/www.jonts.ai">
              <GitHubIcon />
              <span>www.jonts.ai repo</span>
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
