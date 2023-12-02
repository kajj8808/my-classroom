import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-center bg-textColor">
      <Link
        href={"/"}
        className="text-primary-color flex w-4/5 max-w-[1147px] text-2xl font-bold text-productColor"
      >
        Logo
      </Link>
    </header>
  );
}
