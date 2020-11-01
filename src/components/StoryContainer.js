import React from 'react'
import Story from "./Story"
export default function StoryContainer() {
    return (

        <div className="relative h-screen" style={{ backgroundColor: "#1a2222" }}>
            <div className="page-content h-full">
                <div className="container mx-auto flex h-full" style={{ maxWidth: 630 }}>
                    <Story animDuration={2} />
                </div>
            </div>
        </div>

    )
}
