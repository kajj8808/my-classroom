function QuerySummary({ summary }: { summary: String }) {
  return (
    <div className="h-2/5 overflow-y-auto p-4">
      <span>{summary}</span>
    </div>
  );
}

export default QuerySummary;
