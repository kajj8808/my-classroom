function Title({ text }: { text: String }) {
  return (
    <div className="relative mb-12 ml-1 mt-14">
      <h1 className="relative z-50 text-4xl font-bold">{text}</h1>
      <div className="absolute -left-1 -right-1 top-[14px] h-7 bg-productColor px-1 text-4xl font-bold text-transparent">
        {text}
      </div>
    </div>
  );
}
export default Title;
