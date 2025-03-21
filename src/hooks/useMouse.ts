import { useEffect, useState } from "react";

interface MousePosition {
    x: number;
    y: number;
}

export function useMouse(): MousePosition {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    function updateMousePosition(e: MouseEvent): void {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return { x: mousePosition.x, y: mousePosition.y };
}