const portrait = [
  '⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⢰⣿⣿⠟⠋⠉⠉⠙⠻⣿⣿⡆⠀⠀⠀⠀',
  '⠀⠀⠀⠀⣿⣿⠁⠀⢀⣀⣀⡀⠀⠈⣿⣿⠀⠀⠀⠀',
  '⠀⠀⠀⢸⣿⡇⠀⣴⣿⣿⣿⣿⣦⠀⢸⣿⡇⠀⠀⠀',
  '⠀⠀⠀⢸⣿⡇⠀⣿⠋⢀⡀⠙⣿⠀⢸⣿⡇⠀⠀⠀',
  '⠀⠀⠀⠀⣿⣷⠀⠘⠷⠿⠿⠾⠃⠀⣾⣿⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠸⣿⣷⣄⠀⠐⠒⠀⣠⣾⣿⠇⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠈⠻⣿⣿⣶⣶⣿⣿⠟⠁⠀⠀⠀⠀⠀',
  '⠀⠀⠀⢀⣤⣤⣤⡈⠙⠛⠛⠋⢁⣤⣤⣤⡀⠀⠀⠀',
  '⠀⠀⣰⣿⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⣿⣿⣆⠀⠀',
  '⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀',
  '⢰⣿⣿⣿⣿⡿⠋⠉⠻⣿⣿⠟⠉⠙⢿⣿⣿⣿⣿⡆',
  '⢸⣿⣿⣿⣿⡇⠀⢠⣤⠈⠁⣤⡄⠀⢸⣿⣿⣿⣿⡇',
  '⠈⠻⢿⣿⣿⣿⣦⣈⠛⣀⣀⠛⣁⣴⣿⣿⣿⡿⠟⠁',
].join('\n');

export default function Home() {
  return (
    <main>
      <section className="card" aria-label="jonts.ai landing page">
        <pre className="avatar" aria-hidden="true">
          {portrait}
        </pre>
        <p>
          <strong>jonts.ai</strong> is the home of Jonathan Tsai&apos;s personal AI assistant /
          doppelganger. For the human, see{' '}
          <a href="https://jontsai.com">jontsai.com</a>.
        </p>
      </section>
    </main>
  );
}
