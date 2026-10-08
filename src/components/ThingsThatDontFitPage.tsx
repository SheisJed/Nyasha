import './ThingsThatDontFitPage.css'

function ThingsThatDontFitPage() {
  return (
    <main className="things-page">
      <section className="things-page-intro">
        <span className="things-page-kicker">
          THE THINGS THAT DON'T FIT ON A CV
        </span>

        <h1>The other things I've done.</h1>

        <p>
          Some experiences don't make sense as job titles or bullet points.
          They still matter, so I gave them somewhere to live.
        </p>
      </section>

      <section className="things-page-story">
        <span className="things-page-story-label">
          01 · COMMUNITY SERVICE
        </span>

        <h2>There’s a story here.</h2>

        <p>
          The community work, what it was really about, the people I met, and
          the things that stayed with me afterwards. I’m still putting the
          words together.
        </p>

        <span className="things-page-coming-soon">
          Story coming soon.
        </span>
      </section>

      <a href="/Nyasha/" className="things-page-back">
        ← Back to Nyasha
      </a>
    </main>
  )
}

export default ThingsThatDontFitPage