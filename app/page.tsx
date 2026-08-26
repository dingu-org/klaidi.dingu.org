const showcase = ["projects", "tools", "notes"];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20 sm:px-8 sm:py-28">
      <div
        aria-hidden="true"
        className="mb-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm text-cream"
      >
        k
      </div>

      <p className="mb-6 text-sm">
        <span>klaidi.dingu.org</span>{" "}
        <span className="text-faint">· growing</span>
      </p>

      <h1 className="mb-8 text-4xl leading-tight font-medium sm:text-5xl">
        still growing
        <span
          aria-hidden="true"
          className="cursor-blink ml-1 inline-block h-[0.9em] w-[0.5ch] translate-y-[0.12em] bg-ink align-baseline"
        />
      </h1>

      <div className="max-w-xl space-y-5 text-base leading-relaxed sm:text-lg">
        <p>
          I&rsquo;m Klaidi &mdash; a developer based in Tirana, Albania. I
          build small, practical software, mostly through dingu.org, where
          side projects get planted and some grow into real tools.
        </p>
        <p>
          This is where that work will eventually live in one place: what I
          build, what I ship, and how I think about it.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="mb-3 text-sm font-medium">what&rsquo;s coming</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {showcase.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href="mailto:klaididingu@gmail.com"
          className="rounded-md border border-hairline px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-cream"
        >
          get in touch
        </a>
        <a
          href="https://github.com/kdingu"
          className="text-sm text-muted underline-offset-4 hover:underline"
        >
          github
        </a>
        <a
          href="https://dingu.org"
          className="text-sm text-muted underline-offset-4 hover:underline"
        >
          dingu.org
        </a>
      </div>
    </main>
  );
}
