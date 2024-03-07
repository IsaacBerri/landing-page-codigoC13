import { useEffect, useState } from "react";

function useControllerRender() {
    const [renderMovile, setRenderMovile] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setRenderMovile(true)
        }
    }, [])

    return {
        renderMovile
    }
}

export default useControllerRender