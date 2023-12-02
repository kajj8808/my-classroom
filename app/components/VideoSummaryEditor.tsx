import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";
import { useEffect } from "react";

interface IForm {
  summary: String;
}

export default function VideoSummaryEditor({
  initalSummary,
}: {
  initalSummary: String;
}) {
  const { register, handleSubmit } = useForm<IForm>();

  const onValid = () => {};

  return (
    <form
      className="relative flex h-full w-full flex-col justify-between"
      onSubmit={handleSubmit(onValid)}
    >
      <div className="relative mt-16">
        <label className="absolute -top-8 left-4 z-0 flex h-16 w-24 justify-center rounded-md bg-textColor text-white ">
          <span className="absolute top-1">답변</span>
        </label>
        <textarea
          className="relative z-20 w-full resize-none rounded-md px-5 pt-3 ring-1 ring-ringColor focus:outline-none"
          aria-multiline
          {...register("summary", { value: initalSummary, required: true })}
        />
      </div>
      <div className="mt-8 flex w-full justify-end">
        <div className="flex gap-3">
          <SubmitButton />
          <CancelButton />
        </div>
      </div>
    </form>
  );
}
