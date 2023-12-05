"use client";
import ThreeDotsWave from "@components/ThreeDotsWave";
import Title from "@components/Title";
import VideoSummaryEditor from "@components/VideoSummaryEditor";
import { url } from "inspector";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getVideoId } from "util/youtube";

interface IForm {
  url: String;
  title: String;
}

export default function Page() {
  const { register, handleSubmit, watch } = useForm<IForm>();

  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<String>("");
  const onValid = async ({ url }: IForm) => {
    if (url) {
      setIsLoading(true);
      const json = await (
        await fetch(`http://119.69.229.31:8000/create`, {
          next: { tags: ["collection"] },
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            link: url,
            name: `강의_${getVideoId(url)}`,
          }),
        })
      ).json();
      setSummary(json.transcript);
      setIsLoading(false);
      setIsEdit(true);
    }
  };
  return (
    <>
      <Title text={"Save"} />
      <form className="w-full" onSubmit={handleSubmit(onValid)}>
        <div className="relative flex h-16 w-full flex-col">
          {/*       <label className="absolute left-5 font-bold">Youtube</label>
           */}
          <div className="flex gap-2">
            <input
              type="text"
              className="w-full rounded-lg px-5 ring-1 ring-ringColor"
              placeholder="Youtube URL"
              autoComplete="off"
              {...register("url")}
            />
            {summary === "" ? (
              <button
                className="relative min-w-[9rem]  rounded-lg bg-textColor px-7 py-3 text-center text-base font-bold text-white ring-1 ring-textColor"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Next"}
              </button>
            ) : (
              <div className="relative min-w-[9rem] rounded-lg bg-[#939393] px-7 py-3 text-center text-base font-bold text-white ring-1 ring-textColor">
                Done
              </div>
            )}
          </div>
        </div>

        {isEdit ? (
          <>
            <span
              className="mt-8 border-b border-ringColor bg-bgColor py-2 text-2xl outline-none"
              {...register("title", {
                required: true,
                value: `강의_${getVideoId(watch("url"))}`,
              })}
            />
          </>
        ) : null}
      </form>
      {isEdit ? <VideoSummaryEditor initalSummary={summary} /> : null}
    </>
  );
}
