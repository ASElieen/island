import * as React from "react"
import { useState } from "react"

export const Layout = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>this is layout component</h1>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Add count
      </button>
    </div>
  )
}
