import Image from "next/image";
import Link from "next/link";

interface IItem {
  link: String;
  name: String;
  transcript: String;
}

function ProductItem({ item }: { item: IItem }) {
  const getVideoId = (url: String) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match && match[1] ? match[1] : null;
  };
  return (
    <Link
      href={`/?videoId=${getVideoId(item.link)}&title=${item.name}`}
      className="flex flex-col items-center"
    >
      <Image
        src={`https://img.youtube.com/vi/${getVideoId(item.link)}/original.jpg`}
        alt=""
        width={500}
        height={300}
        className="h-36 w-full cursor-pointer rounded-lg bg-slate-400"
      />
      <p>{item.name}</p>
    </Link>
  );
}

export default ProductItem;
