"use client";

import MainModal from "@components/MainModal";
import ProductItem from "@components/ProductItem";
import ProductItemAdd from "@components/ProductItemAdd";
import Title from "@components/Title";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

interface IItem {
  link: String;
  name: String;
  transcript: String;
}

export default function Home({ searchParams }: Props) {
  const videoId = searchParams?.videoId;
  const title = searchParams?.title;

  const [items, setItems] = useState<IItem[]>();

  useEffect(() => {
    (async () => {
      const json = await (
        await fetch(`http://119.69.229.31:8000/transcripts`)
      ).json();
      setItems(json.transcripts);
    })();
  }, []);

  return (
    <>
      <Title text={"Product"} />
      <div className="flex w-full">
        <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {items?.map((item, key) => <ProductItem item={item} key={key} />)}

          <ProductItemAdd />
        </div>
      </div>
      {videoId && title ? <MainModal title={title} videoId={videoId} /> : null}
    </>
  );
}
