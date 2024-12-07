import { useState } from 'preact/hooks'
import './app.css'

export function App() {

return (
    <>
      <header className="sticky top-0 border-b border-gray-300">
        <div class="flex items-center justify-between px-3 sm:px-6 lg:px-5">
          <div class="flex items-center">
            <a href="/">
              <p>Numakuro</p>
            </a>
          </div>
        </div>
      </header>
       
       <main className="max-w-4xl mx-auto my-qo sm:px-6 xl:max-w-6xl sl:px-0"> 
        <section>
          <div id='profileCard' className="rounded overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 bg-white border border-gray-200">
              <img class="flex flex-col w-40 h-40" src="./nu.png" alt="Sunset in the mountains"/>
              <h1 className="font-sans text-3xl font-bold tracking-wider">Numacro</h1>
            <p>Sostware Engineer</p>
            <p className="sm:px-2 px-6 ">
               製造業から転職し、現在はソフトウェアエンジニアとして活動しています。<br/>
               C#, html css javascriptを使ったWebアプリケーション開発が得意です。<br/>
               また、最近はReact、TypeScriptを使った開発も行っています。<br/>
            </p>
          </div>
        </section>
        <section>Work</section>
        <section>Skils</section>
        <section>Qualifications</section>
       </main>
    </>
  )
}
