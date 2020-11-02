import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from "./RadialSeparators";
import NewStory from "./NewStory"
import { connect } from "react-redux";
import { getStories, getUsers } from "./../store/action/";
import { HeaderLoader, MainLoader } from "./Loaders"
class Home extends React.Component {
    state = { isOpen: false, start: null };
    componentDidMount() {
        this.props.dispatch(getUsers());
        this.props.dispatch(getStories());
    }
    togglePopup = (event) => {
        this.setState(({ isOpen }) => (
            { isOpen: !isOpen }
        ))
    }
    handleClick = (event) => {
        if (!event.target.closest('.storie-item').dataset.userId)
            return;
        const start = event.target.closest('.storie-item').dataset.userId;
        this.setState({ start }, () => {
            this.setState({ isOpen: true })
        })
    }
    render() {
        const { isOpen, start } = this.state;
        const { users } = this.props;
        return (
            <div className="relative bg-gray-200 h-screen" >

                <div className="page-content h-full">
                    <div className="container mx-auto flex h-full" style={{ maxWidth: 630 }}>
                        {
                            isOpen ? (
                                <NewStory
                                    start={start}
                                    togglePopup={this.togglePopup}
                                />
                            ) : (
                                    <div className="left w-full">
                                        <div className="stories bg-white p-5 rounded border border-gray-400 flex mb-6">
                                            <div className="grid gap-4 grid-flow-col  overflow-x-auto stories-hero">
                                                {
                                                    users.length !== 0 && users.map((user, index) => (
                                                        <div className="storie-item flex flex-col mr-6 items-center cursor-pointer"
                                                            onClick={this.handleClick}
                                                            data-user-id={user.email}
                                                            key={index}>

                                                            <div className="rounded-full">
                                                                <div className="rounded-full bg-white wrapper overflow-hidden h-16 w-16"
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
                                                            <div className="user-name text-center pt-1 truncate">
                                                                <span className="text-gray-700 text-sm ">
                                                                    {user.email}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                {
                                                    users.length === 0 ? <HeaderLoader /> : <></>
                                                }
                                            </div>
                                        </div>
                                        <div className="feeds">
                                            <div className="feed-wrapper mb-4 bg-white">
                                                <div className="feed-item border border-gray-400 rounded bg-white">
                                                    {
                                                        users.length !== 0 && users.map((user, index) => (
                                                            <div className="header border-b p-4 flex justify-between items-center"
                                                                key={index}>
                                                                <div className="left flex flex-row items-center">
                                                                    <div className="user-img h-12 w-12 border rounded-full overflow-hidden mr-4">
                                                                        <img alt="..."
                                                                            className="_6q-tv w-full h-full object-cover"
                                                                            data-testid="user-avatar"
                                                                            draggable="false"
                                                                            src={user.profilePicture} />
                                                                    </div>
                                                                    <div className="user-name-and-place flex flex-col">
                                                                        <span className="text-sm font-bold">
                                                                            {user.email}
                                                                        </span>
                                                                        <span className="text-xs font-light text-gray-900">
                                                                            Online
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        ))
                                                    }
                                                    {
                                                        users.length === 0 ? <MainLoader /> : <></>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ users, stories }) {
    return { users, stories };
}
export default connect(mapStateToProps)(Home);
