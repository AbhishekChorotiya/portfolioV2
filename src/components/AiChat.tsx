"use client";
import { Mic, Pause, Play, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useVoiceToText } from "react-speakup";

type ChatBubbleProps = {
  message: string;
  time: string | number;
  self?: boolean;
};

const ChatBubble = ({
  message,
  time,
  self = false,
}: ChatBubbleProps): JSX.Element => {
  const formatTime = (time: any): string => {
    try {
      const date = new Date(time);
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return "";
    }
  };

  return (
    <div
      className={`w-full p-4 pb-3 text-textPrimary flex flex-col ${
        self ? "items-end" : "items-start"
      } `}
    >
      <span className="text-xs text-primary font-semibold">
        {!self ? "My AI Assistant" : "You"}
      </span>
      <div
        className={`text-sm relative py-1 px-4 bg-textPrimary text-background flex min-w-20 w-fit max-w-[90%] ${
          self ? "rounded-tr-none" : "rounded-tl-none"
        } rounded-md`}
      >
        <span
          className={`text-primary ${self ? "text-right" : "text-left"} w-full`}
        >
          {message}
        </span>
        <div
          className={`absolute top-full ${
            self ? "left-1" : "right-1"
          } text-[10px] text-textPrimary`}
        >
          {formatTime(time)}
        </div>
      </div>
    </div>
  );
};

const AiChat = () => {
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { user: string; message: string; time: string | number }[]
  >([
    {
      user: "ai",
      message: "Hi, how can I help you?",
      time: Date.now(),
    },
    {
      user: "ai",
      message:
        "You can ask me anything, and I will try my best to answer it, I can also speak to you in your language.",
      time: Date.now(),
    },
  ]);
  const [listening, setListening] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const speechRef = useRef<SpeechRecognition>(null);
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [loading, setLoading] = useState(false);

  const askAI = async (speech = "") => {
    setLoading(true);
    try {
      setMessages((prev) => [
        ...prev,
        { user: "ai", message: "Loading...", time: Date.now() },
      ]);
      const res = await fetch("/api/ai", {
        method: "POST",
        body: JSON.stringify({
          question: question || speech,
          history: messages?.slice(-20),
        }),
      });

      const data = await res?.json();

      const arrayBuffer = data?.audio?.data; // Assuming data.audio is an ArrayBuffer
      const blob = new Blob([new Uint8Array(arrayBuffer)], {
        type: "audio/mp3",
      });
      const audioUrl = URL.createObjectURL(blob);
      setAudioUrl(audioUrl);

      setMessages((prev) => prev.slice(0, -1));
      setMessages((prev) => [
        ...prev,
        { user: "ai", message: data?.result, time: Date.now() },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          user: "ai",
          message: "Something went wrong, please try again.",
          time: Date.now(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!audioUrl) return;

    const audioElement = audioRef?.current;
    if (audioElement) {
      audioElement.src = audioUrl;
      autoPlay && audioElement?.play();
    }

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = "";
      }
    };
  }, [audioUrl]);

  const handleSpeech = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    // @ts-ignore
    speechRef.current = recognition;
    speechRef.current.lang = "en-IN";
    setListening(true);
    speechRef.current.onresult = (event) => {
      if (event?.results[0][0].transcript === "") return;
      setQuestion(event?.results?.[0]?.[0]?.transcript);
      setListening(false);
      setTimeout(() => {
        getData(event?.results?.[0]?.[0].transcript);
      }, 600);
    };
    speechRef.current.start();
  };

  const getData = (data = "") => {
    if (loading) return;
    if (!question && !data) return;
    setMessages((prev) => [
      ...prev,
      { user: "user", message: question || data, time: Date.now() },
    ]);
    setQuestion("");
    askAI(data);
  };

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef?.current;
    if (audioElement) {
      audioElement.addEventListener("play", () => {
        setIsAudioPlaying(true);
      });

      audioElement.addEventListener("pause", () => {
        setIsAudioPlaying(false);
      });

      audioElement.addEventListener("ended", () => {
        setIsAudioPlaying(false);
      });
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("play", () => {
          setIsAudioPlaying(true);
        });

        audioElement.removeEventListener("pause", () => {
          setIsAudioPlaying(false);
        });

        audioElement.removeEventListener("ended", () => {
          setIsAudioPlaying(false);
        });
      }
    };
  }, [audioRef.current]);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop =
        divRef.current.scrollHeight - divRef.current.clientHeight;
    }
  }, [messages]);

  return (
    <>
      {show ? (
        <>
          <div
            onClick={() => setShow(false)}
            className="fixed  top-0 left-0 text-textPrimary w-screen h-screen overflow-hidden bg-black/30 z-[1000]"
          />
          <div className="fixed animate-slide-in shadow-aiBox flex flex-col lg:w-[420px] w-[85vw] right-0 top-0 h-dvh bg-white/90 lg:bg-white/80 backdrop-blur-[5px] z-[10000]">
            <div className="flex w-full items-center p-4 bg-tabBg/50 border-b border-textPrimary gap-4">
              <X
                className="w-6 h-6 cursor-pointer text-textPrimary"
                onClick={() => setShow(false)}
              />
              <h1 className="text-xl font-semibold text-textPrimary">Ask AI</h1>
            </div>
            <div className="flex flex-col-reverse w-full h-full overflow-hidden">
              <div
                ref={divRef}
                className="h-fit min-w-full py-2 overflow-y-scroll scroll-smooth no-scrollbar flex flex-col"
              >
                {messages.map((msg, i) => (
                  <ChatBubble
                    key={i}
                    message={msg.message}
                    time={msg.time}
                    self={msg.user !== "ai"}
                  />
                ))}
              </div>
            </div>
            <div className="flex min-h-fit flex-col p-5 gap-5">
              <div className="min-w-full relative flex">
                <textarea
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                  className="p-2 pr-8 min-w-full resize-none text-sm rounded-md border border-textSecondary/50 bg-white/50 outline-none ring-0 h-20 text-textPrimary"
                  placeholder="Type your question here..."
                  onKeyUp={(e) => {
                    e.key === "Enter" && getData();
                    setAutoPlay(false);
                  }}
                  autoFocus
                />

                <div
                  onClick={() => {
                    if (!listening) {
                      handleSpeech();
                    } else {
                      speechRef.current?.stop();
                      setListening(false);
                    }
                  }}
                  className="absolute cursor-pointer flex items-center justify-center right-0 bottom-0 min-w-10 min-h-10"
                >
                  <Mic
                    onClick={() => setAutoPlay(true)}
                    className={
                      listening
                        ? "animate-scale text-red-500 animate-pulse"
                        : "text-textPrimary"
                    }
                  />
                </div>
                <div
                  onClick={() => {
                    if (isAudioPlaying) {
                      audioRef.current?.pause();
                    } else {
                      audioRef.current?.play();
                    }
                  }}
                  className={`absolute right-2 top-2 ${!audioUrl && "hidden"}`}
                >
                  {isAudioPlaying ? (
                    <Pause className="w-6 h-6 cursor-pointer" />
                  ) : (
                    <Play className="w-6 h-6 cursor-pointer" />
                  )}
                </div>
              </div>
              <audio
                className={"hidden"}
                ref={audioRef}
                autoPlay={autoPlay}
                controls
              />
              <button
                disabled={loading}
                onClick={() => {
                  getData();
                  setAutoPlay(false);
                }}
                className="px-4 h-10 bg-textPrimary rounded-md text-white"
              >
                Ask
              </button>
            </div>
          </div>
        </>
      ) : (
        <div
          onClick={() => setShow(true)}
          className="fixed cursor-pointer min-h-12 min-w-28 overflow-hidden flex items-center justify-center text-white rounded-full right-6 bottom-6 lg:right-14 lg:bottom-10 z-[1000]"
        >
          <div
            className="min-w-[200%] absolute flex  min-h-6 bg-[#8bb1f2] animate-spin"
            style={{ animationDuration: "2s" }}
          >
            <div className="w-full min-h-full bg-[#8bb1f2]"></div>
            <div className="w-full min-h-full bg-[#f47676]"></div>
          </div>
          <div className="absolute font-semibold top-0 flex left-0 w-full h-full  p-[3px]">
            <div className="min-w-full min-h-full gap-2 border border-background shadow-profile flex relative items-center justify-center text-white bg-textPrimary rounded-full">
              <Image
                width={20}
                height={20}
                src={"/geminiStar.avif"}
                className="animate-scale"
                alt="ai"
              />
              Ask AI
              <span className="shine-effect" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiChat;
