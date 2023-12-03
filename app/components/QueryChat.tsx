import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";

interface IMessage {
  isGPT: boolean;
  message: String;
}

interface IForm {
  message: String;
}

function QueryChat({ summary }: { summary: String }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [botMessage, setBotMessage] = useState<String[]>([]);

  const [chats, setChats] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<IForm>();

  const onValid = async ({ message }: IForm) => {
    if (!isLoading) {
      setIsLoading(true);
      setChats((prev) => [{ isGPT: false, message }, ...prev]);
      reset();
      const res = await fetch("/api/chats", {
        method: "POST",
        body: JSON.stringify({ summary, message }),
      });
      const data = res.body;
      if (!data) {
        return;
      }
      const reader = data.getReader();
      const textDecoder = new TextDecoder();
      while (true) {
        const stream = await reader.read();
        if (stream.done) {
          setIsLoading(false);
          break;
        }
        const chuckData = textDecoder.decode(stream.value);
        setBotMessage((prev) => [...prev, chuckData]);
      }
    }
  };

  useEffect(() => {
    if (botMessage.length != 0 && isLoading == false) {
      setChats((prev) => [
        { isGPT: true, message: botMessage.join("") },
        ...prev,
      ]);
      setBotMessage([]);
    }
  }, [isLoading]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [scrollRef]);

  return (
    <div className="flex h-[55%] flex-col justify-between">
      <div
        className="flex h-full w-full flex-col-reverse gap-2 overflow-x-auto px-[2%] pb-[2%]"
        ref={scrollRef}
      >
        {isLoading ? (
          <div className="flex items-start space-x-2">
            <div className="max-w-[70%] overflow-hidden overflow-ellipsis rounded-2xl rounded-bl-none border bg-[#D4D4D4] p-2 text-sm text-textColor">
              {botMessage.join("")}
            </div>
          </div>
        ) : null}
        {chats.map((item, key) => (
          <div
            key={key}
            className={`flex items-start space-x-2 ${
              item.isGPT ? "" : "flex-row-reverse space-x-reverse "
            }`}
          >
            <div
              className={`max-w-[70%] overflow-hidden overflow-ellipsis rounded-2xl border p-2 text-sm ${
                item.isGPT
                  ? "rounded-bl-none bg-[#D4D4D4] text-textColor"
                  : "rounded-br-none bg-[#2B2B2B] text-white"
              }`}
            >
              <span>{item.message}</span>
            </div>
          </div>
        ))}
      </div>
      <form
        className="relative flex w-full px-5 pt-1"
        onSubmit={handleSubmit(onValid)}
      >
        <input
          className="w-full rounded-full px-3 py-1 outline-none ring ring-ringColor"
          type="text"
          placeholder="Message MyClass..."
          {...register("message", { required: true })}
        />
        {isLoading ? (
          <button className="top-4.5 absolute right-8 text-lg" disabled>
            <svg
              className="mr-3 h-5 w-5 animate-spin fill-slate-950"
              viewBox="0 0 24 24"
            ></svg>
          </button>
        ) : (
          <button className="top-4.5 absolute right-8 text-lg">🔜</button>
        )}
      </form>
    </div>
  );
}
export const runtime = "edge";
export default QueryChat;
