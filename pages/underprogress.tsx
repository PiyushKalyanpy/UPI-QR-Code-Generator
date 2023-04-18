import { useRouter } from "next/router";
const UnderProgress = () => {
    const router = useRouter();
    return (
        <div className="flex w-screen h-screen bg-zinc-100">
            <div className="flex m-auto flex-col space-y-8">
            <span className="text-zinc-300 font-archivo text-6xl m-auto flex">Under Construction</span>
            <button onClick={() => router.push("/")} className="text-white bg-sky-400 px-4 py-2 rounded-full w-fit m-auto  hover:text-white hover:underline text-xl hover:bg-sky-500 active:bg-sky-600">Go back to Home Page</button>
            </div>
           
        </div>
   
    );
}

export default UnderProgress;