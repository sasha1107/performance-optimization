import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <picture>
          <source
            srcSet={"/assets/earth_2x.png"}
            type="image/png"
            media="(-webkit-device-pixel-ratio: 2)"
          />
          <source srcSet={"/assets/earth.png"} type="image/png" />
          <img
            className="w-[400px] h-[400px]"
            src="/assets/earth.png"
            alt="earth"
          />
        </picture>
        <p className="text-center w-full">
          Local Image with html <code>{`<picture/>`}</code> tag
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/sasha1107/performance-optimization"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/github.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}