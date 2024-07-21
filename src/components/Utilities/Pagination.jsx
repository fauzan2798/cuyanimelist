const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => {
            if (prevState < lastPage) {
                return prevState + 1
            } else {
                return prevState
            }
        })
        scrollTop()
    }

    const endPage = () => {
        setPage(() => lastPage)
        scrollTop()
    }

    const firstPage = () => {
        setPage(() => 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => {
            if (prevState > 1) {
                return prevState - 1
            } else {
                return prevState
            }
        })
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page > 1 && (
                <>
                <button onClick={firstPage} className="trasition-all hover:text-color-accent">First</button>
                <button onClick={handlePrevPage} className="trasition-all hover:text-color-accent">Prev</button>
                </>
            )}
            <p>{page} of {lastPage}</p>
            {page < lastPage && (
                <>
                <button onClick={handleNextPage} className="trasition-all hover:text-color-accent">Next</button>
                <button onClick ={endPage} className="trasition-all hover:text-color-accent">End</button>
                </>
            )}
        </div>
    )
}

export default Pagination