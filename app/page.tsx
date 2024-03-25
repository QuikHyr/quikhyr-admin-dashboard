import Image from "next/image";

export default function Home() {
  return (
    <main className="font-primary font-semibold flex justify-center h-svh bg-black">
      <Image
        src="/logos/quikhyr-logo.svg"
        width={360}
        height={100}
        alt="QuikHyr Logo"
        className="mb-12"
      />
    </main>
  );
}
