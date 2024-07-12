import { useState } from "react";
import Nav from "../components/Nav";
import CalendarIcon from "../components/icons/CalendarICon";
import EyeIcon from "../components/icons/EyeIcon";
import TrashIcon from "../components/icons/TrashIcon";

interface Chat {
  id: number;
  question: string;
  answer: string;
  date: string;
}

interface Chats {
  chats: Chat[];
}

export default function Messages() {
  const chatsArray = useState<Chats[] | any>([
    {
      id: 1,
      question: "De quoi allons nous parler aujourd'hui ?",
      answer:
        "Bonjour, je suis GPT, un IA de conversation. Je suis là pour vous aider à répondre à vos questions et vous fournir des informations utiles. Comment puis-je vous aider aujourd'hui ?",
      date: "2023-03-01",
    },
    {
      id: 2,
      question: "Que souhaites-tu apprendre de nouveau ?",
      answer:
        "Je suis là pour vous aider à répondre à vos questions et vous fournir des informations utiles. Comment puis-je vous aider aujourd'hui ?",
      date: "2023-03-01",
    },
  ]);
  return (
    <main className="bg-slate-50 p-5 flex flex-col items-center gap-4 min-w-full min-h-screen">
      <Nav />
      <div>
        <h1 className="text-6xl font-semibold mb-10 text-center">Messages</h1>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {chatsArray.map((c) => (
            <li
              className="border h-46 p-5 rounded-xl bg-white hover:shadow-md"
              key={c.id}
            >
              <div className="flex items-center justify-between text-sm uppercase text-slate-400">
                <CalendarIcon /> Le {c.date || ""}
              </div>
              <hr className="my-4" />
              <div className="italic text-slate-400">{c.question}</div>
              <div className="mt-4 flex justify-between">
                <button className="bg-blue-500 rounded-full p-2 hover:bg-blue-800">
                  <EyeIcon />
                </button>
                <button className="bg-red-700 rounded-full p-2 hover:bg-red-800">
                  <TrashIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
