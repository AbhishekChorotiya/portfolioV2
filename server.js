const textToSpeach = require("@google-cloud/text-to-speech");

const fs = require("fs");

process.env.GOOGLE_APPLICATION_CREDENTIALS = "tts.json";

async function transformTextToSpeachWithGoogle(text, outputFile) {
  try {
    const client = new textToSpeach.TextToSpeechClient();

    const request = {
      input: { text },
      voice: {
        languageCode: "hi-IN",
        name: "hi-IN-Neural2-C",
        ssmlGender: "MALE",
      },
      audioConfig: { audioEncoding: "MP3" },
    };

    const [response] = await client.synthesizeSpeech(request);

    fs.writeFileSync(outputFile, response.audioContent, "binary");

    return outputFile;
  } catch (error) {
    console.error("Error:", error);
  }
}

(async () => {
  await transformTextToSpeachWithGoogle(
    "Test text i want to hear, hello, my name is Abhishek Chorotiya, me rajasthan se hu, bangalore m rahta hu aur me ek frontend developer hu",
    "output.mp3"
  );
})();
