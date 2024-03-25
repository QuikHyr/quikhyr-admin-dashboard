import Image from "next/image";

export default function AdminPanel() {
  return (
    <main className="flex pt-24 justify-center font-primary font-semibold">
      <Image
        src="/logos/quikhyr-logo.svg"
        width={360}
        height={360}
        alt="QuikHyr Logo"
      />
    </main>
  );
}
