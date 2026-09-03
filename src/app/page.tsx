import { asciiPortrait } from './asciiPortrait';

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
        <p>
          <strong>jonts.ai</strong> is the home of Jonathan Tsai&apos;s personal AI assistant /
          döppelgänger. For the human, see{' '}
          <a href="https://jontsai.com">jontsai.com</a>.
        </p>
      </section>
    </main>
  );
}
