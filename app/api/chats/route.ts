import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(request: Request) {
  console.log(openai.apiKey);
  const body = await request.json();
  const originalSummary: String = body.summary;
  const sliceSummary = originalSummary.slice(0, 4000);

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "You are Lesson Summary helpful assistant. with questions you can answer them in 50 characters or less. lang:Korea(존댓말)",
    },
    {
      role: "user",
      content: `questions: ${body.message}, summary : ${sliceSummary}`,
    },
  ];

  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
    top_p: 1,
    temperature: 0.2,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body.user,
    n: 1,
  });

  const stream = OpenAIStream(res);

  return new StreamingTextResponse(stream);
}
