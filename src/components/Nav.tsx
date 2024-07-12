import Message from "./icons/MessageIcon";

export default function Nav() {
    return (
        <nav className="flex w-full justify-between items-center">
            <div  className="text-2xl font-semibold text-slate-700">
                <h1>GPT</h1>
            </div>
            <button className="">
               <Message />
            </button>
        </nav>
    );
}
