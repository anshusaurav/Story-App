import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from "./RadialSeparators";



const users = [{ email: "anshurav", numImages: 3, profilePicture: "https://images.unsplash.com/photo-1583424201593-3f0882026e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1138&q=80" },
{ email: "akshat", numImages: 2, profilePicture: "https://images.unsplash.com/photo-1557417789-a44b79c545d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },
{ email: "naveen", numImages: 1, profilePicture: "https://images.unsplash.com/photo-1563799172663-ee693854edda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" },
{ email: "maxagno", numImages: 2, profilePicture: "https://images.unsplash.com/photo-1533387912059-6044599bc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
{ email: "prank77", numImages: 3, profilePicture: "https://images.unsplash.com/photo-1603319688151-c647f5c5fbfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },
{ email: "akshayp", numImages: 5, profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
{ email: "shindebhau", numImages: 2, profilePicture: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }];

const stories = [{ email: "anshusau", imageUrl: "https://images.unsplash.com/photo-1604110053799-b8ae08d69a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", videoUrl: "" },
{ email: "anshusau", imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80", videoUrl: "" },
{ email: "anshusau", imageUrl: "https://images.unsplash.com/photo-1604007456490-336442146f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", videoUrl: "" },
{ email: "akshat", imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80", videoUrl: "" },
{ email: "akshat", imageUrl: "https://images.unsplash.com/photo-1604005494924-24eebe7bc641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80", videoUrl: "" },
{ email: "naveen", imageUrl: "https://images.unsplash.com/photo-1604005494924-24eebe7bc641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80", videoUrl: "" },
{ email: "maxagno", imageUrl: "https://images.unsplash.com/photo-1604110053799-b8ae08d69a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", videoUrl: "" },
{ email: "maxagno", imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80", videoUrl: "" },
{ email: "prank77", imageUrl: "https://images.unsplash.com/photo-1604007456490-336442146f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", videoUrl: "" },
{ email: "prank77", imageUrl: "https://images.unsplash.com/photo-1604007456490-336442146f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", videoUrl: "" },
{ email: "prank77", imageUrl: "https://images.unsplash.com/photo-1604007456490-336442146f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", videoUrl: "" },
{ email: "akshayp", imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80", videoUrl: "" },
{ email: "shindebhau", imageUrl: "https://images.unsplash.com/photo-1604005494924-24eebe7bc641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80", videoUrl: "" }
]



export default function Home() {
    return (
        <div class="relative bg-gray-200 h-screen">

            <div class="page-content pt-6 h-full">
                <div class="container mx-auto flex h-full" style={{ maxWidth: 630 }}>
                    <div class="left w-full">
                        <div class="stories bg-white p-5 rounded border border-gray-400 flex mb-6">
                            <div class="grid gap-4 grid-flow-col  overflow-x-auto stories-hero">
                                {
                                    users.map(user => (
                                        <div class="storie-item flex flex-col mr-6 items-center">

                                            <div class="rounded-full">
                                                <div class="rounded-full bg-white wrapper overflow-hidden h-16 w-16"
                                                    style={{
                                                        backgroundImage: `url(${user.profilePicture})`,
                                                        backgroundSize: "cover",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center"
                                                    }}>

                                                    <CircularProgressbarWithChildren
                                                        value={100}
                                                        strokeWidth={8}
                                                        styles={buildStyles({
                                                            strokeLinecap: "butt",
                                                            background: "#ae28cf",
                                                        })}

                                                    >
                                                        <RadialSeparators
                                                            count={user.numImages}
                                                            style={{
                                                                background: "#fff",
                                                                width: "2px",
                                                                height: `${10}%`
                                                            }}
                                                        />
                                                    </CircularProgressbarWithChildren>

                                                </div>
                                            </div>
                                            <div class="user-name text-center pt-1 truncate">
                                                <span class="text-gray-700 text-sm ">
                                                    {user.email}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div class="feeds">
                            <div class="feed-wrapper mb-4">
                                <div class="feed-item border border-gray-400 rounded bg-white">
                                    {
                                        users.map(user => (
                                            <div class="header border-b p-4 flex justify-between items-center">
                                                <div class="left flex flex-row items-center">
                                                    <div class="user-img h-12 w-12 border rounded-full overflow-hidden mr-4">
                                                        <img alt="nike's profile picture" class="_6q-tv w-full h-full object-cover" data-testid="user-avatar" draggable="false" src={user.profilePicture} />
                                                    </div>
                                                    <div class="user-name-and-place flex flex-col">
                                                        <span class="text-sm font-bold">{user.email}</span>
                                                        <span class="text-xs font-light text-gray-900">Online</span>
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
