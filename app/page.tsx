const showcase = ["projects", "tools", "notes"];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-xl flex-1 px-6 py-24">
        <svg aria-hidden="true" viewBox="0 0 340 230" className="mb-5 h-8 w-auto">
          <mask id="cut">
            <rect x="-300" y="-300" width="1400" height="900" fill="white" />
            <circle cx="110" cy="115" r="106" fill="black" />
          </mask>
          <circle cx="230" cy="115" r="100" fill="#171717" mask="url(#cut)" />
          <circle cx="110" cy="115" r="100" fill="#171717" />
          <text
            x="110"
            y="149"
            textAnchor="middle"
            fontFamily="Geist, Helvetica, Arial, sans-serif"
            fontWeight="600"
            fontSize="96"
            fill="#FFFFFF"
          >
            k<tspan fill="#D9482B">.</tspan>
          </text>
        </svg>

        <h1 className="text-sm/relaxed text-black">
          <span className="font-medium">klaidi.dingu.org</span>
          <span aria-hidden="true" className="mx-2 text-stone-400">
            ·
          </span>
          <span className="text-stone-500">
            still growing
            <span
              aria-hidden="true"
              className="cursor-blink ml-1 inline-block h-[0.9em] w-[0.5ch] translate-y-[0.12em] bg-black align-baseline"
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
