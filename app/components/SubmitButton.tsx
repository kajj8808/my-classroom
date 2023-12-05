import Link from "next/link";

export default function SubmitButton() {
  return (
    <Link
      href={"/"}
      className={
        "flex justify-center rounded-md bg-[#2B2B2B] px-7 py-3 text-base text-white"
      }
    >
      <span>내용 저장</span>
    </Link>
  );
}
