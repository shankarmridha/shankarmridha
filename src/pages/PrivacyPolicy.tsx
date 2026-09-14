const PrivacyPolicy = () => (
  <main className="bg-ivory text-body-light">
    <section className="bg-midnight py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="font-mono text-gold text-xs uppercase tracking-[0.2em] mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl text-ivory">Privacy Policy</h1>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl space-y-8 font-body text-sm md:text-base leading-relaxed">
        <p>
          Shankar Mridha respects your privacy and is committed to protecting personal information shared
          with us through this website, direct communications, or service enquiries.
        </p>

        <div>
          <h2 className="font-display text-2xl text-midnight mb-3">Information We Collect</h2>
          <p>
            We may collect information such as your name, email address, phone number, organisation, role,
            and the content of your enquiry when you contact us through the website or other channels.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-midnight mb-3">How We Use It</h2>
          <p>
            The information is used to respond to your enquiry, provide services, maintain communication,
            improve user experience, and ensure we address your request appropriately and efficiently.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-midnight mb-3">Data Protection</h2>
          <p>
            We take reasonable steps to protect personal data from unauthorised access, misuse, or loss.
            However, no online platform can guarantee absolute security, and we encourage users to exercise
            care when sharing information online.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-midnight mb-3">Third-Party Links</h2>
          <p>
            This website may include links to external websites, including social platforms and partner sites.
            We are not responsible for the privacy practices or content of those third-party websites.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-midnight mb-3">Cookies</h2>
          <p>
            This website may use basic analytics or cookies to understand visitor behaviour and improve the
            overall experience. You may disable cookies in your browser settings if you prefer.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-midnight mb-3">Contact</h2>
          <p>
            For any privacy-related questions, please contact Shankar Mridha at
            <a href="mailto:shankar.mridha@gmail.com" className="text-gold underline ml-1">shankar.mridha@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default PrivacyPolicy;
