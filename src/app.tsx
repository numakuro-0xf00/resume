import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class= "sticky top-0 bg-white border-b border-gray-300">
        <div class="flex items-center justify-between px-3 sm:px-6 lg:px-5">
          <div class="flex items-center">
            <a href="/">
              <p>Hiroyuki Akanuma</p>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
