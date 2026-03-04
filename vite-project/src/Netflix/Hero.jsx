function Hero() {
  return (
    <section className="hero">
      <h1>Unlimited movies, TV shows and more</h1>

      <h2>Starts at ₹149. Cancel at any time.</h2>

      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="hero-form">
        <input
          type="email"
          placeholder="Email address"
        />

        <button>
          Get Started →
        </button>
      </div>
    </section>
  )
}

export default Hero
