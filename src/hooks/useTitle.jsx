import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Rhythmic.com`
    }, [title])
};

export default useTitle;