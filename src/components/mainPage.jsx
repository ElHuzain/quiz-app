import { useDispatch } from "react-redux"
import Button from "./button"
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

const MainPage = () => {
    const [animate, setAnimate] = useState(false);

    const dispatcher = useDispatch();

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100)
    }, [])

    const start = () => {
        dispatcher({
            type: "START"
        })
    }

    const ListStyle = "flex opacity-0 transition-all duration-500 translate-y-[10px] flex-col h-full justify-between items-center gap-4"
    const AnimateUp = animate ? "translate-y-[0px] opacity-1" : null

    return (
        <section className="h-fit animation-fade-up min-h-[300px] p-8 flex flex-col gap-8 justify-between max-w-[500px] w-full rounded-md bg-card">

            <header>
                <h1 className="text-center w-full">Welcome to OSBASH quiz! 👋</h1>
            </header>

            <div className="h-fit">
                <ul className="grid grid-cols-1 gap-4 my-4 sm:grid-cols-3 justify-between w-full">
                    <li className={twMerge(ListStyle, AnimateUp, "delay-[100ms]")}>
                        <div aria-hidden className="aspect-square flex items-center justify-center p-3 text-xl rounded-full bg-background">⏰</div>
                        <h2>1 Minute</h2>
                    </li>
                    <li className={twMerge(ListStyle, AnimateUp, "delay-[300ms]")}>
                        <div aria-hidden className="aspect-square flex items-center justify-center p-3 text-xl rounded-full bg-background">❓</div>
                        <h2>30 Questions</h2>
                    </li>
                    <li className={twMerge(ListStyle, AnimateUp, "delay-[500ms]")}>
                        <div aria-hidden className="aspect-square flex items-center justify-center p-3 text-xl rounded-full bg-background">🎯</div>
                        <h2>100 degrees</h2>
                    </li>
                </ul>
            </div>

            <div className="mt-auto w-full flex">
                <Button onClick={start} className="mx-auto">START 🏁</Button>
            </div>
        </section>
    )
}

export default MainPage