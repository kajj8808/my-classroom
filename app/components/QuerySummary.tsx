function QuerySummary({ summary }: { summary: String }) {
  return (
    <div className="h-2/5 overflow-y-auto p-4">
      <span className="whitespace-pre-wrap text-sm sm:text-base">
        {summary}
      </span>
    </div>
  );
}

export default QuerySummary;
