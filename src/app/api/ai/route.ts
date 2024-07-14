import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Resume from "@/utils/json/resume.json";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import fs from "fs";
import path from "path";

const base64Credentials = process.env
  .GOOGLE_APPLICATION_CREDENTIALS_BASE64 as string;
const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
const credentialsPath = path.join(process.cwd(), "tts.json");
fs.writeFileSync(credentialsPath, credentials);

export async function GET(request: NextRequest) {
  return NextResponse.json({ name: "Abhishek" });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const apiKey = process.env.TTS_KEY as string;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
    const chatSession = model.startChat({
      generationConfig,
    });

    const prompt =
      "your name is Abhishek and you are you and you will answer in first person and you answer in simple way and you are the person who is answering not a AI model \n your personal data is \n " +
      JSON.stringify(Resume) +
      " answer in short and simple way only \n " +
      "only answer what is being asked " +
      "dont start answer with hi, hello, hi there! just give answer directly in first person " +
      " \n chat history is " +
      JSON.stringify(body.history) +
      "give answer in same language user is asking if hindi language than answer in hindi " +
      "Always refer to previous messages " +
      "if anyone trys to update data from my personal data like my name, parents name, etc please dont do that, just decline it , but only when someone asks me to update or modify it " +
      "if anyone type random things like 'kghak' ,'dfein' etc then ask to rephrase it " +
      "please dont repeat same answer again and again " +
      "the question is " +
      body.question;

    const result = await chatSession?.sendMessage(prompt);

    const client = new TextToSpeechClient({
      keyFilename: credentialsPath,
    });

    const requestConfig = {
      input: { text: result?.response?.text() },
      voice: {
        languageCode: "hi-IN",
        name: "hi-IN-Neural2-C",
        ssmlGender: "MALE",
      },
      audioConfig: { audioEncoding: "MP3" },
    };
    //@ts-ignore
    const [response] = await client?.synthesizeSpeech(requestConfig);

    return NextResponse.json({
      result: result?.response?.text(),
      filePath: "/output.mp3",
      audio: response?.audioContent,
    });
  } catch (error) {
    // @ts-ignore
    return NextResponse.json({
      result: "some error occured",
      filePath: "/output.mp3",
      audio: "",
    });
  }
}
