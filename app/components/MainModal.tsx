"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import QueryChat from "./QueryChat";
import QuerySummary from "./QuerySummary";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function MainModal({
  title,
  videoId,
}: {
  title: String;
  videoId: String;
}) {
  const router = useRouter();

  const [hasWindow, setHasWindow] = useState(false);
  const [summary, setSummary] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
    if (title) {
      (async () => {
        const json = await (
          await fetch(`http://119.69.229.31:8000/summary/${title}`, {
            method: "GET",
            mode: "cors",
          })
        ).json();
        setSummary(json.result);
      })();
    }
  }, [title]);

  const onClick = () => {
    router.push("/");
  };

  return (
    <div className="absolute left-0 top-0 flex h-[100svh] w-full justify-center">
      <div
        className="z-30 h-full w-full bg-[rgba(0,0,0,0.7)]"
        onClick={onClick}
      ></div>
      <div className="animate-fade-up animate-duration-300 fixed bottom-0 z-50 h-full min-h-[600px] w-full max-w-5xl overflow-scroll scroll-smooth bg-white px-10 py-5 scrollbar-none sm:top-[5%] sm:h-[95%] sm:w-10/12 sm:rounded-t-3xl sm:p-10">
        <div className=" flex h-[5%] items-center justify-between">
          <div className="flex gap-1 font-bold">
            <span>[{title}]</span>
            <span>{videoId}</span>
          </div>
          <button onClick={onClick}>
            <Image src={"/close.png"} alt="" width={32} height={32} />
          </button>
        </div>
        {/* <iframe
          width="560"
          height="315"
          src=""
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; auto"
        ></iframe> */}
        {hasWindow ? (
          <div className="mt-5 h-[30%] overflow-hidden rounded-lg ring ring-ringColor">
            <ReactPlayer
              url={[`https://www.youtube.com/embed/${videoId}`]}
              controls
              width={"100%"}
              height={"100%"}
            />
          </div>
        ) : null}

        {summary ? (
          <div className="mt-5 h-3/5 w-full rounded-lg bg-[#F5F5F5] p-0.5 pb-5 ring ring-ringColor sm:h-3/5">
            <div className="h-full">
              <QuerySummary summary={summary} />
              <div className="m-3 border-t border-[#939393]" />
              <QueryChat summary={summary} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
