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

function QueryChat() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [chats, setChats] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<IForm>();

  const onValid = ({ message }: IForm) => {
    if (!isLoading) {
      setChats((prev) => [...prev, { isGPT: false, message }]);
      reset();
      setIsLoading(true);
      setChats((prev) => [
        ...prev,
        { isGPT: true, message: "gpt response data" },
      ]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [scrollRef]);

  return (
    <>
      <div
        className="h-[50%] items-center overflow-y-auto px-[5%] pb-[2%] sm:h-[45%]"
        ref={scrollRef}
      >
        <div className="flex h-full w-full flex-col justify-end gap-2">
          {chats.map((item, key) => (
            <div
              key={key}
              className={`flex items-start space-x-2 ${
                item.isGPT ? "" : "flex-row-reverse space-x-reverse "
              }`}
            >
              <div
                className={`max-w-[70%] overflow-hidden overflow-ellipsis rounded-full border p-2 text-sm ${
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
      </div>
      <form
        className="relative flex w-full px-5 "
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
            Loading...
          </button>
        ) : (
          <button className="top-4.5 absolute right-8 text-lg">🔜</button>
        )}
      </form>
    </>
  );
}

export default QueryChat;
