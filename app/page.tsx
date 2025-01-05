import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click{" "}
      <Link href={""}>
        <span>here</span>
      </Link>{" "}
      to go to document Id
    </div>
  );
}
