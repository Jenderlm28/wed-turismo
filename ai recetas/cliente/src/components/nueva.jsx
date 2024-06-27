function Nueva({setValor}) {
    

    return(
        <button onClick={()=>{setValor(null)}} className=" fixed bottom-10 right-10 bg-[#0c0000] border-2 rounded-full ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>
    )
}

export default Nueva