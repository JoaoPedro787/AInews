const Privacy = () => {
  document.title = "Privacy Policy";
  return (
    <div className="mt-10">
      <section class="flex flex-col gap-6 font-bold uppercase text-base italic max-default:text-sm">
        <h2 class="self-center text-4xl not-italic max-default:text-2xl text-center">
          AI NEWS PRIVACY POLICY
        </h2>

        <h3>PRIVACY POLICY</h3>
        <h3>INTRODUCTION TO THE PRIVACY POLICY</h3>

        <h2 class="font-normal not-italic ">
          This Privacy Policy explains how{" "}
          <span class="font-bold"> AI News </span>
          collects, uses, and stores information. This website is a personal,
          non-profit project created by a student from
          <span class="font-bold"> FATEC Campinas</span>, based in Brazil.
        </h2>
      </section>

      <article class="prose prose-base prose-invert mt-10 uppercase max-default:prose-sm">
        <h2>1. Data Collected</h2>
        <p>
          AI News does not collect personally identifiable information. The only
          data stored is a simple click history saved in your browser’s
          localStorage.
        </p>

        <pre>
          <code>{`[{ section: "football", type: "article", clicked: "11/22/2025" }]`}</code>
        </pre>

        <p>These records remain only on your device.</p>

        <h2>2. How the Data Is Used</h2>
        <p>
          The data stored locally may be sent to Google Gemini solely to
          generate personalized content recommendations. It is not used for
          commercial purposes.
        </p>

        <h2>3. No Sharing of Data</h2>
        <p>
          AI News does not share data with third parties, store data on servers,
          use tracking cookies, or sell information. The only data sent to
          Google’s AI is what is needed to generate recommendations.
        </p>

        <h2>4. Storage</h2>
        <p>
          All information is saved on your device via localStorage. You may
          delete it anytime in your browser settings.
        </p>

        <h2>5. Security</h2>
        <p>
          Basic security measures are applied, but absolute protection cannot be
          guaranteed. You use the site at your own risk.
        </p>

        <h2>6. Children</h2>
        <p>
          The site is not specifically designed for children, and no data about
          minors is knowingly collected.
        </p>

        <h2>7. Updates</h2>
        <p>
          This policy may be updated without prior notice. Check this page
          periodically.
        </p>

        <h2>8. Contact</h2>
        <p>
          As a personal project, there is no official support channel. You may
          contact the developer directly if needed.
        </p>
      </article>
    </div>
  );
};

export default Privacy;
