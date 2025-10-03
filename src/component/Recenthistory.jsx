function RecentHistory({recenthistory,setRecenthistory , setSelecthistory}) {

    const clearhistory = () => {
        localStorage.clear();
        setRecenthistory([]);
    }

    return (
        <>

            <div className="col-span-1 dark:bg-zinc-800 bg-red-100 pt-3">
                <div className="flex justify-evenly">
                    <h1 className="text-xl dark:text-white text-zinc-800 ">Recent Search</h1>
                    <button onClick={clearhistory} className="cursor-pointer"><svg  xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" /></svg></button>
                </div>

                <ul className="text-left  overflow-auto   pt-5 mt-2 ">
                    {
                        recenthistory && recenthistory.map((item) => (
                            <li onClick={() => setSelecthistory(item)} className="p-1.5   pl-7 px-5 truncate cursor-pointer dark:text-zinc-400 text-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:bg-red-200 hover:text-zinc-800">{item}</li>
                        ))
                    }
                </ul>

            </div>

        </>
    )
}

export default RecentHistory;