import { useEffect, useState } from "react";

export function useFetch (url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [url])

    return [data, loading, error]
}