import Image from "next/image";
import shimaenaga from "../assets/shimaenaga.png";
import github from "../assets/github-mark.svg";
import itch from "../assets/itchio-textless-black.svg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            src={shimaenaga}
            alt="shimaenaga"
            width={180}
            height={38}
            priority
            style={{
              alignSelf: 'center',
              borderRadius: 20,
              transform: 'rotate(0deg)'
            }}
          />
        <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            BlazeChron&apos;s site WIP using next.js
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/BlazeChron"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={github}
            alt="File icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://blazechron.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={itch}
            alt="Window icon"
            width={16}
            height={16}
          />
          itch
        </a>
      </footer>
    </div>
  );
}
