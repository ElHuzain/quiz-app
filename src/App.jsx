import { useState } from "react"
import MainPage from "./components/mainPage"
import Question from "./components/question"
import { useSelector } from "react-redux"
import Result from "./components/result"

function App() {

  const started = useSelector(val => val.started)
  const finished = useSelector(val => val.finished)

  return (
    <main className="min-h-dvh w-full text-foreground bg-background p-4 flex justify-center items-center">

      {
        finished ? <Result />
          : started
            ? <Question />
            : <MainPage />
      }

    </main>
  )
}

export default App
