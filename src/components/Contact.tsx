"use client";
import { Mail, MessageSquareMore, SendHorizonal, User } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    if (!name || !email || !message) {
      toast.error("Please Enter All Fields", {
        id: "send",
      });
      setLoading(false);
      return;
    }
    toast.loading("Sending...", {
      id: "send",
    });
    const res = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res?.status === 200) {
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Email Sent. Thank You!", {
        id: "send",
      });
    } else {
      toast.error("Error Occurred. Try Again Later", {
        id: "send",
      });
    }
    setLoading(false);
  };

  return (
    <div
      id="contact"
      className="w-full h-full gap-6 flex flex-col justify-center   border-textPrimary/80 p-6"
    >
      <div className="w-full h-fit flex items-center border-b-2 border-textPrimary/80">
        <div className="w-12 h-12 flex items-center justify-center">
          <User className="w-6 h-6 text-textPrimary/80" />
        </div>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full h-full outline-none border-none ring-0 px-2 bg-transparent"
        />
      </div>
      <div className="w-full h-fit flex items-center border-b-2 border-textPrimary/80">
        <div className="w-12 h-12 flex items-center justify-center">
          <Mail className="w-5 h-5 text-textPrimary/80" />
        </div>
        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full h-full outline-none border-none ring-0 px-2 bg-transparent"
        />
      </div>
      <div className="w-full h-[100px] flex  border-b-2 border-textPrimary/80">
        <div className="w-12 h-12 flex items-center justify-center">
          <MessageSquareMore className="w-[1.4rem] h-[1.4rem] text-textPrimary/80" />
        </div>
        <textarea
          placeholder="Type your message"
          className="w-full h-full resize-none pt-2.5 outline-none border-none ring-0 px-2 bg-transparent"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      {!loading && (
        <div
          onClick={handleSend}
          className="w-12 flex items-center justify-center self-end rounded-full h-12 border- border-textPrimary/80"
        >
          <SendHorizonal className="w-6 h-6 text-textPrimary/80" />
        </div>
      )}
    </div>
  );
};

export default Contact;
