import Image from "next/image";

export default function Home() {
  return (
    <main className="ml-0 mr-0 flex h-svh flex-wrap justify-center gap-16 bg-black font-primary font-semibold md:ml-8 md:mr-8 md:gap-24 lg:gap-16 xl:ml-0 xl:mr-0">
      <div className="flex flex-col items-center justify-center gap-2 xl:ml-6">
        <div className="w-48 sm:w-64 lg:w-96 xl:w-[480px]">
          <Image
            src="/logos/quikhyr-logo.svg"
            width={560}
            height={100}
            alt="QuikHyr Logo"
            className="lg:-mb-24 xl:-mb-32 xl:-mt-32 2xl:-mt-40"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 xl:gap-16">
          <div className="max-w-40 text-center">
            <Image
              src="/qr-code/quikhyr-qr-code.png"
              width={176}
              height={176}
              alt="QuikHyr Logo"
              className="mb-6"
            />

            <span className="max-w-3">
              Scan to download the&nbsp;
              <span className="text-secondary">Worker App</span>
            </span>
          </div>

          <div className="max-w-40 text-center">
            <Image
              src="/qr-code/quikhyr-qr-code.png"
              width={176}
              height={176}
              alt="QuikHyr Logo"
              className="mb-6"
            />

            <span className="max-w-3">
              Scan to download the&nbsp;
              <span className="text-primary">Client App</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto max-w-3xl">
        <Image
          src="/images/mockup.png"
          width={2160}
          height={2160}
          alt="QuikHyr Logo"
          className="h-4/5 w-full bg-cover"
        />
      </div>
    </main>
  );
}
