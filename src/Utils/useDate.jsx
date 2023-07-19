import { useEffect, useState } from "react"

export const useDate = () => {
    const locale = 'br'

    const [today, setDate] = useState(new Date ())

    useEffect(() => {
         
        const timer = setInterval(() => {
            setDate(new Date())
        }, 60*1000)

    }, [])
}