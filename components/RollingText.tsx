"use client"

import { useEffect } from "react"

export default function RollingText() {
    const text = "HemaDharshini "

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function handleShake(event: any) {
            const acceleration = event.accelerationIncludingGravity

            if (!acceleration) return

            const total =
                Math.abs(acceleration.x || 0) +
                Math.abs(acceleration.y || 0) +
                Math.abs(acceleration.z || 0)

            if (total > 25) {
                const el = document.querySelector(".rolling-text")
                if (el) {
                    el.classList.add("shake")
                    setTimeout(() => {
                        el.classList.remove("shake")
                    }, 500)
                }
            }
        }

        window.addEventListener("devicemotion", handleShake)

        return () => window.removeEventListener("devicemotion", handleShake)
    }, [])

    return (
        <div className="rolling-container">
            <div className="rolling-text flex">
                <span>{text.repeat(10)}</span>
                <span>{text.repeat(10)}</span>
            </div>
        </div>
    )
}
