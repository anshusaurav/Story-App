
const stories = [
    {
        author: {
            email: "anshurav",
            numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1583424201593-3f0882026e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1138&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604110053799-b8ae08d69a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        videoUrl: "", index: 0, category: "image"
    },
    {
        author: {
            email: "anshurav", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1583424201593-3f0882026e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1138&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
        videoUrl: "https://storage.googleapis.com/images-photoappbucket/6defe313-8666-4bf3-abbe-6525708727db.mp4",
        index: 1, category: "video", duration: 6
    },
    {
        author: {
            email: "anshurav", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1583424201593-3f0882026e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1138&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604007456490-336442146f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        videoUrl: "", index: 2, category: "image"
    },
    {
        author: {
            email: "akshat", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1557417789-a44b79c545d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604005494924-24eebe7bc641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80",
        videoUrl: "", index: 1, category: "image"
    },
    {
        author: {
            email: "akshat", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1557417789-a44b79c545d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604110053799-b8ae08d69a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        videoUrl: "https://storage.googleapis.com/images-photoappbucket/a877a110-1af2-405d-a2ef-7ba7d8a0db69.mp4",
        index: 2, category: "video", duration: 10
    },
    {
        author: {
            email: "naveen", numImages: 1,
            profilePicture: "https://images.unsplash.com/photo-1563799172663-ee693854edda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
        videoUrl: "", index: 0, category: "image"
    },
    {
        author: {
            email: "maxagno",
            numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1533387912059-6044599bc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604007456490-336442146f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        videoUrl: "", index: 0, category: "image"
    },
    {
        author: {
            email: "maxagno", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1533387912059-6044599bc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604003706189-a959f802ad22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
        videoUrl: "", index: 1, category: "image"
    },
    {
        author: {
            email: "prank77", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1603319688151-c647f5c5fbfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604005494924-24eebe7bc641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80",
        videoUrl: "", index: 0, category: "image"
    },
    {
        author: {
            email: "prank77", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1603319688151-c647f5c5fbfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1603997234208-34c0f76b5299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 1, category: "image"
    },
    {
        author: {
            email: "prank77", numImages: 3,
            profilePicture: "https://images.unsplash.com/photo-1603319688151-c647f5c5fbfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }, imageUrl: "https://images.unsplash.com/photo-1604231356220-d5b0906f91fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 2, category: "image"
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604176514868-fac005d0584c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 0, category: "image"
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604240913777-da78dfa5d660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 1, category: "image"
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604231120462-9d01c75a9d92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "https://storage.googleapis.com/images-photoappbucket/dea6146c-2acb-401e-99b5-3939e8d5039c.mp4",
        index: 2, category: "video", duration: 5
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604240663730-fb202bf06c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "https://storage.googleapis.com/images-photoappbucket/273796d9-c8dd-4ac5-8fd2-d355e3fc8317.mp4",
        index: 3, category: "video", duration: 12
    },
    {
        author: {
            email: "akshayp", numImages: 5,
            profilePicture: "https://images.unsplash.com/photo-1459409342466-58a380fc8bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604178450035-38e6a54ffa0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 4, category: "image"
    },
    {
        author: {
            email: "shindebhau", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604191598563-6c866a23f361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 0, category: "image"
    },
    {
        author: {
            email: "shindebhau", numImages: 2,
            profilePicture: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }, imageUrl: "https://images.unsplash.com/photo-1604240913665-54a742f3725c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        videoUrl: "", index: 1, category: "image"
    },
]

export default stories