import React from 'react'
import { IconContext } from "react-icons";
import { GrPrevious, GrNext, GrClose } from "react-icons/gr"
const stories = [
    {
        author: {
            email: "anshurav",
            numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1583424201593-3f0882026e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1138&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604110053799-b8ae08d69a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        videoUrl: "", index: 0
    },
    {
        author: {
            email: "anshurav", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1583424201593-3f0882026e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1138&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
        videoUrl: "", index: 1
    },
    {
        author: {
            email: "anshurav", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1583424201593-3f0882026e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1138&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604007456490-336442146f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        videoUrl: "", index: 2
    },
    {
        author: {
            email: "akshat", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1557417789-a44b79c545d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604005494924-24eebe7bc641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80",
        videoUrl: "", index: 1
    },
    {
        author: {
            email: "akshat", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1557417789-a44b79c545d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604110053799-b8ae08d69a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        videoUrl: "", index: 2
    },
    {
        author: {
            email: "naveen", numImages: 1,
            profilePicture: "https://images.unsplash.com/photo-1563799172663-ee693854edda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
        videoUrl: "", index: 0
    },
    {
        author: {
            email: "maxagno",
            numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1533387912059-6044599bc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604007456490-336442146f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        videoUrl: "", index: 0
    },
    {
        author: {
            email: "maxagno", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1533387912059-6044599bc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
        videoUrl: "", index: 1
    },
    {
        author: {
            email: "prank77", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1603319688151-c647f5c5fbfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604005494924-24eebe7bc641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80",
        videoUrl: "", index: 0
    },
    {
        author: {
            email: "prank77", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1603319688151-c647f5c5fbfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1603997234208-34c0f76b5299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 1
    },
    {
        author: {
            email: "prank77", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1603319688151-c647f5c5fbfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604191598563-6c866a23f361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 2
    }
]

class Story extends React.Component {

    constructor(props) {
        super(props)
        // this.backgrounds = ["https://i.imgur.com/Y0iI6Mxb.jpg", "https://i.imgur.com/qWP4aRSb.jpg", "https://i.imgur.com/flTzFAib.jpg"]
        this.state = { backgroundIndex: 0 }

        // this.changeBackground = this.changeBackground.bind(this)
    }

    componentDidMount() {
        this.timeout = setTimeout(
            this.changeBackground,
            this.props.animDuration * 1000
        );
        console.log(this.props)
    }

    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout)
    }

    changeBackground = () => {
        this.setState(({ backgroundIndex }) => {
            const nextBackgroundIndex = ++backgroundIndex % stories.length

            return { backgroundIndex: nextBackgroundIndex }
        }, () => {
            this.timeout = setTimeout(
                this.changeBackground,
                this.props.animDuration * 1000
            )
        });
    }
    nextBackground = (event) => {
        event.preventDefault();
        this.setState(({ backgroundIndex }) => {
            const nextBackgroundIndex = backgroundIndex === stories.length - 1 ? 0 : ++backgroundIndex;// % stories.length

            return { backgroundIndex: nextBackgroundIndex }
        }, () => {
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(
                this.changeBackground,
                this.props.animDuration * 1000
            )
        });

    }
    prevBackground = (event) => {
        event.preventDefault();
        this.setState(({ backgroundIndex }) => {
            const nextBackgroundIndex = backgroundIndex === 0 ? stories.length - 1 : --backgroundIndex;// % stories.length

            return { backgroundIndex: nextBackgroundIndex }
        }, () => {
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(
                this.changeBackground,
                this.props.animDuration * 1000
            )
        });
    }
    render() {
        return (
            <div className="w-full bg-gray-900 flex items-stretch flex-shrink-0 flex-col max-h-full">
                <div class="header p-2 w-full flex items-center justify-between">
                    <div class="left flex flex-row items-center">
                        <div class="user-img h-12 w-12 border rounded-full overflow-hidden mr-4 relative">
                            <img alt="..."
                                class="object-cover w-full h-full"
                                src={stories[this.state.backgroundIndex].author.profilePicture} />
                        </div>
                        <div class="user-name-and-place flex flex-col">
                            <span
                                class="text-sm font-bold text-gray-200">
                                {stories[this.state.backgroundIndex].author.email}
                            </span>
                        </div>
                    </div>
                    <div class="right flex flex-row items-center justify-end">
                        <button className="text-white focus:outline-none z-10 hover:text-gray-200">
                            <GrClose
                                className=" inline-block text-xl text-bold h-5 w-5
                                        mr-1 cursor-pointer " /> </button>
                    </div>
                </div>

                <div className="header flex p-2 w-full flex-shrink-0 flex-grow">
                    <div className="relative w-full h-full">
                        <div class="absolute left-0 top-0 h-full w-full" style={{
                            backgroundImage: `url(${stories[this.state.backgroundIndex].imageUrl})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}>

                        </div>
                        <div className="absolute inset-0 w-full h-full bg-opacity-0">
                            <div className="relative w-full h-full">
                                <button className="text-white absolute top-1/2 bottom-1/2 left-1 focus:outline-none hover:text-gray-200"
                                    onClick={this.prevBackground}>
                                    <GrPrevious
                                        className=" inline-block text-xl text-bold h-5 w-5
                                        mr-1 cursor-pointer"
                                    />
                                </button>
                                <button className=" text-white absolute top-1/2 bottom-1/2 right-1 focus:outline-none hover:text-gray-200" onClick={this.nextBackground}>
                                    <GrNext
                                        className=" inline-block text-xl text-bold h-5 w-5
                                        mr-1 cursor-pointer" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

/*
<button className="text-white absolute top-1 right-1 focus:outline-none z-10 hover:text-gray-200">
                    <GrClose
                        className=" inline-block text-xl text-bold h-5 w-5
                                        mr-1 cursor-pointer " /> </button>
                <div class="bg-transparent p-4 rounded-lg flex justify-between items-center absolute top-1 left-1 right-1">

                    <div class="header p-2 flex justify-between items-center">
                        <div class="left flex flex-row items-center">
                            <div class="user-img h-12 w-12 border rounded-full overflow-hidden mr-4">
                                <img alt="..." class="_6q-tv w-full h-full object-cover" src="http://tailwindtemplates.io/wp-content/uploads/2019/03/link.jpg" />
                            </div>
                            <div class="user-name-and-place flex flex-col">
                                <span class="text-sm font-bold text-gray-200">anshusaurav</span>
                            </div>
                        </div>

                    </div>
                </div>
*/

export default Story;