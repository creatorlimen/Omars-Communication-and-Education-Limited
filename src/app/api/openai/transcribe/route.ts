import { NextResponse } from "next/server";
import fs from "fs";
import os from "os";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
  const body = await req.json();

  const base64Audio = body.audio;

  // Convert the base64 audio data to a Buffer
  const audio = Buffer.from(base64Audio, "base64");

  // Define the file path using the OS temporary directory
  const fileName = `input-${Date.now()}.wav`;
  const filePath = path.join(os.tmpdir(), fileName);

  try {
    // Write the audio data to a temporary WAV file synchronously
    fs.writeFileSync(filePath, audio);

    // Create a readable stream from the temporary WAV file
    const readStream = fs.createReadStream(filePath);

    const data = await openai.audio.transcriptions.create({
      file: readStream,
      model: "whisper-1",
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("🚨 Error processing audio:", error);
    return NextResponse.error();
  } finally {
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (cleanupError) {
        console.error("🚨 Error cleaning up temporary file:", cleanupError);
      }
    }
  }
}
