import Image from "next/image";
import Link from "next/link";

export default function ProductItemAdd() {
  return (
    <Link href={"/save"} className="flex flex-col items-center">
      <div className="flex h-36 w-full cursor-pointer items-center justify-center rounded-lg bg-[#5E5E5E]">
        <Image
          src={"/add.png"}
          alt="add btn image"
          width={45}
          height={45}
          className="relative z-50 h-16 w-16 rounded-full bg-[#2B2B2B] p-4"
        />
      </div>
      <p>추가하기</p>
    </Link>
  );
}
