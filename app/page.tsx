const showcase = ["projects", "tools", "notes"];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-xl flex-1 px-6 py-24">
        <div
          aria-hidden="true"
          className="relative mb-5 flex size-6 items-center justify-center rounded-full bg-[#141413] text-[11px] font-bold text-white"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          k
          <span className="absolute right-0 bottom-0 size-1.5 rounded-full bg-signal" />
        </div>

        <h1 className="text-sm/relaxed text-black">
          <span className="font-medium">klaidi.dingu.org</span>
          <span aria-hidden="true" className="mx-2 text-stone-400">
            ·
          </span>
          <span className="text-stone-500">
            still growing
            <span
              aria-hidden="true"
              className="cursor-blink ml-1 inline-block h-[0.9em] w-[0.5ch] translate-y-[0.12em] bg-stone-500 align-baseline"
            />
          </span>
        </h1>

        <div className="mt-4 max-w-[560px] space-y-3 pb-12 text-sm/relaxed text-pretty text-black">
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

        <h2 className="text-sm font-medium text-black">what&rsquo;s coming</h2>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
          {showcase.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="mailto:klaididingu@gmail.com"
            className="rounded-md border border-stone-300 px-3 py-1.5 text-center text-sm text-black transition-colors duration-100 ease-linear hover:bg-wash"
          >
            get in touch
          </a>
          <a
            href="https://github.com/kdingu"
            className="text-sm text-stone-500 transition-colors duration-100 ease-linear hover:text-black"
          >
            github
          </a>
          <a
            href="https://dingu.org"
            className="text-sm text-stone-500 transition-colors duration-100 ease-linear hover:text-black"
          >
            dingu.org
          </a>
        </div>
      </main>
    </div>
  );
}
