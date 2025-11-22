const Terms = () => (
  <div className="mt-10">
    <section class="flex flex-col gap-6 font-bold uppercase text-base italic max-default:text-sm">
      <h2 class="self-center text-4xl not-italic max-default:text-2xl text-center">
        AI NEWS TERMS OF SERVICE
      </h2>

      <h3>TERMS OF SERVICE</h3>
      <h3>ACCEPTANCE OF THE TERMS OF SERVICE</h3>

      <h2 class="font-normal not-italic">
        Welcome to <span class="font-bold"> AI News</span>. By accessing and
        using this website, you agree to the following Terms of Service. This is
        a personal, non-commercial project created by a student from
        <span class="font-bold"> FATEC Campinas</span> and made freely available
        to the public.
      </h2>
    </section>

    <article class="prose prose-base prose-invert mt-10 uppercase max-default:prose-sm">
      <h2>1. Nature of the Service</h2>
      <p>
        AI News is a website that displays news and uses data stored locally in
        your browser (localStorage) to suggest personalized content through an
        external AI service (Google Gemini). The site does not require any
        login, does not collect personal accounts, and does not sell any
        services.
      </p>

      <h2>2. Use of the Website</h2>
      <p>
        You agree to use AI News responsibly and to refrain from exploiting
        vulnerabilities, illegally copying or modifying the site’s code, or
        interfering with its operation.
      </p>

      <h2>3. Content</h2>
      <p>
        Some content may be generated or influenced by AI. While efforts are
        made to provide relevant information, we do not guarantee accuracy or
        completeness. Users should verify any information they rely on.
      </p>

      <h2>4. AI Recommendations</h2>
      <p>
        Recommendations are generated automatically based on your click history
        stored in localStorage and processed by Google Gemini. Results may vary.
      </p>

      <h2>5. Liability</h2>
      <p>
        This is an experimental and educational project. We are not responsible
        for direct or indirect damages resulting from the use of the site. You
        agree to use it “as is.”
      </p>

      <h2>6. Changes</h2>
      <p>
        The Terms of Service may be updated at any time without notice. Check
        this page regularly.
      </p>

      <h2>7. Jurisdiction</h2>
      <p>These terms are governed by Brazilian law.</p>
    </article>
  </div>
);

export default Terms;
