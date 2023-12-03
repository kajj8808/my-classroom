import Link from "next/link";

export default function ProductItemAdd() {
  return (
    <Link href={"/save"} className="flex flex-col items-center">
      <div className="h-36 w-full cursor-pointer rounded-lg bg-slate-400" />
      <p>추가하기</p>
    </Link>
  );
}
