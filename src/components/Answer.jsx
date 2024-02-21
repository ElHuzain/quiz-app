import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Answer = ({ id, checked, value, SelectOption }) => {
  const inputRef = useRef();

  // Delay to create staggering animation.
  const delay =
    id === 1 ? "0ms"
      : id === 2 ? "100ms"
        : id === 3 ? "200ms"
          : "300ms"

  return (
    <label style={{ animationDelay: delay }} key={value} htmlFor={id} className={twMerge("p-4 answer-slide-in focusable-label group w-full border-2 hover:translate-y-[-3px] cursor-pointer transition-transform relative border-foreground flex items-center rounded-md", checked && "bg-foreground text-background")}>

      <input ref={inputRef} checked={checked} type="checkbox" onChange={() => { SelectOption(id) }} id={id} className="opacity-0 peer z-0 w-[0px] h-[0px] absolute" />
      <h2 className="pointer-events-none">

        <span className="mr-4">
          {id})
        </span>

        <span>
          {value}
        </span>

      </h2>

    </label>
  )
}

export default Answer