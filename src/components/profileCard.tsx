
export const ProfileCard = ({}) => {
    return (
        <>
        <div id='profileCard' className="rounded overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-500">
            <picture className="flex flex-col w-40 h-40 ">
                <source media="(prefers-color-scheme: dark)" srcset="nu_dark.png" />
                <img src="nu.png" alt="top icon" />
            </picture>
              <h1 className="font-sans text-3xl font-bold tracking-wider">Numakuro</h1>
            <p>Software Engineer</p>
            <p className="sm:px-2 px-6 text-gray-900 dark:text-white">
               現在はソフトウェアエンジニアとして活動しています。<br/>
               C#, html css javascriptを使ったWebアプリケーション開発が得意です。<br/>
               また、最近はReact、TypeScriptを使った開発も行っています。<br/>
            </p>
        </div>
        </>
    )
 };