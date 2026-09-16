import Container from "@/components/layout/Container";

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Let's Talk About Your Solar Needs
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Have a question or want to learn more about our solar
              solutions? Get in touch with our team.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="bg-background-light py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Get In Touch
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-text">
                We'd Love to Hear From You
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-muted">
                Whether you are interested in a residential or commercial
                solar solution, our team is ready to discuss your
                requirements.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-text">Email</h3>
                  <p className="mt-1 text-muted">info@invotech.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-text">Phone</h3>
                  <p className="mt-1 text-muted">+94 XX XXX XXXX</p>
                </div>

                <div>
                  <h3 className="font-semibold text-text">Location</h3>
                  <p className="mt-1 text-muted">Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-text">
                Send Us a Message
              </h2>

              <form className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-text"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-text"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-text"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-text"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your solar requirements..."
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}