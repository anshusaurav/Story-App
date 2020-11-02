import React from 'react';

export const HeaderLoader = () => {

    let arr = new Array(9).fill(0);
    return (
        <div class="grid gap-4 grid-flow-col stories-hero p-2">
            {arr.map(elem => (
                <div className="rounded-md max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-gray-400 h-16 w-16"></div>
                        <div className="h-2 bg-gray-400 rounded"></div>
                    </div>
                </div>
            ))
            }
        </div>
    )

}

export const MainLoader = () => {
    let arr = new Array(5).fill(0);
    return (
        <div class="">
            {arr.map(elem => (
                <div class="border border-gray-300 shadow rounded-md p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-gray-400 h-12 w-12"></div>
                        <div class="flex-1 space-y-4 py-1">
                            <div class="h-4 bg-gray-400 rounded w-3/4"></div>
                            <div class="space-y-2">
                                <div class="h-4 bg-gray-400 rounded w-1/4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )


}