import React from 'react'
import { GrPrevious, GrNext, GrClose } from "react-icons/gr"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import RadialSeparators from "./RadialSeparators";

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
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604191598563-6c866a23f361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 0
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604191598563-6c866a23f361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 1
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604231120462-9d01c75a9d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "https://storage.googleapis.com/images-photoappbucket/dea6146c-2acb-401e-99b5-3939e8d5039c.mp4",
        index: 2, category: "video"
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604240663730-fb202bf06c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 3
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604178450035-38e6a54ffa0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 4
    },
    {
        author: {
            email: "shindebhau", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604191598563-6c866a23f361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 0
    },
    {
        author: {
            email: "shindebhau", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604240913665-54a742f3725c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 1
    },


]

class Story extends React.Component {

    constructor(props) {
        super(props)
        // this.backgrounds = ["https://i.imgur.com/Y0iI6Mxb.jpg", "https://i.imgur.com/qWP4aRSb.jpg", "https://i.imgur.com/flTzFAib.jpg"]
        this.state = { backgroundIndex: this.props.start ? stories.findIndex((story) => story.author.email === this.props.start) : 0 }
        // console.log(this.state, this.props)
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
            const nextBackgroundIndex = backgroundIndex === stories.length - 1 ? 0 : ++backgroundIndex;

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
                <div class="header p-2 pt-4 w-full flex items-center justify-between">
                    <div class="left flex flex-row items-center">
                        <div class="user-img h-12 w-12 border rounded-full overflow-hidden mr-4 relative" style={{
                            backgroundImage: `url(${stories[this.state.backgroundIndex].author.profilePicture})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}>

                            <CircularProgressbarWithChildren
                                value={Math.round(((stories[this.state.backgroundIndex].index) * 100) / stories[this.state.backgroundIndex].author.numImages)}
                                strokeWidth={6}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    background: "#ae28cf",
                                })}

                            >
                                <RadialSeparators
                                    count={stories[this.state.backgroundIndex].author.numImages}
                                    style={{
                                        background: "#fff",
                                        width: "2px",
                                        height: `1px`
                                    }}
                                />
                            </CircularProgressbarWithChildren>
                        </div>
                        <div class="user-name-and-place flex flex-col">
                            <span
                                class="text-sm font-bold text-gray-200">
                                {stories[this.state.backgroundIndex].author.email}
                            </span>
                        </div>
                    </div>
                    <div class="right flex flex-row items-center justify-end">
                        <button className="text-white focus:outline-none z-10 hover:text-gray-200"
                            onClick={this.props.togglePopup}>
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


export default Story;