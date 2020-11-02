import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./../styles/animated.css";
import ReactPlayer from "react-player";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import RadialSeparators from "./RadialSeparators";
import { connect } from "react-redux";
import { getStories } from "./../store/action/";
import stories from "./Stories"

class NewStory extends React.Component {

    state = {
        idxStart: this.props.start ? stories.findIndex(
            (story) => story.author.email === this.props.start) : 0,
        idxCurrent: this.props.start ? stories.findIndex(
            (story) => story.author.email === this.props.start) : 0,
        idxDiff: 3000
    }

    onSlideChange = (event) => this.setState(({ idxCurrent }) => {
        return { idxCurrent: event.slideIndex }
    }, () => {
        this.setState({
            idxDiff: stories[this.state.idxCurrent].category === "image" ?
                3000 : stories[this.state.idxCurrent].duration * 1000
        })
    })
    componentDidMount() {
        this.props.dispatch(getStories());
    }
    render() {
        const { idxStart, idxDiff, idxCurrent } = this.state;
        return (
            <div className="w-full bg-gray-900 flex items-stretch flex-shrink-0 flex-col max-h-full">
                <div className="header p-2 pt-4 w-full flex items-center justify-between">
                    <div className="left flex flex-row items-center">
                        <div className="user-img h-12 w-12 border rounded-full overflow-hidden mr-4 relative" style={{
                            backgroundImage: `url(${stories[idxCurrent].author.profilePicture})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}>

                            <CircularProgressbarWithChildren
                                value={Math.round(((stories[idxCurrent].index) * 100) / stories[idxCurrent].author.numImages)}
                                strokeWidth={6}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    background: "#ae28cf",
                                })}

                            >
                                <RadialSeparators
                                    count={stories[idxCurrent].author.numImages}
                                    style={{
                                        background: "#fff",
                                        width: "2px",
                                        height: `1px`
                                    }}
                                />
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="user-name-and-place flex flex-col">
                            <span
                                className="text-sm font-bold text-gray-200">
                                {stories[idxCurrent].author.email}
                            </span>
                        </div>
                    </div>
                    <div className="right flex flex-row items-center justify-end">
                        <button className="close-btn text-white focus:outline-none z-10 hover:text-gray-200"
                            onClick={this.props.togglePopup}>
                            X </button>
                    </div>
                </div>
                <div className="header flex p-2 w-full flex-shrink-0 flex-grow relative overflow-hidden">
                    <Slider className="slider-wrapper stories-hero w-full max-h-full "
                        autoplay={idxDiff}
                        duration={3000}
                        slideIndex={idxStart}
                        onSlideChange={this.onSlideChange}
                    >
                        {stories.map((story, index) =>

                            story.category === "image" ? (
                                <div
                                    key={index}
                                    className="slider-content"
                                    style={{
                                        backgroundImage: `url('${story.imageUrl}')`,
                                        backgroundPositionX: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    }}
                                >
                                </div>
                            ) : (
                                    <div className="flex justify-center items-center">
                                        <div key={index} className="slider-content">
                                            <ReactPlayer
                                                playing={true}
                                                loop={true}
                                                muted={true}
                                                stopOnUnmount={true}
                                                width="100%"
                                                height="100%"
                                                url={story.videoUrl}
                                            />
                                        </div>
                                    </div>
                                )
                        )}
                    </Slider>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ stories }) {
    return { stories };
}
export default connect(mapStateToProps)(NewStory);
