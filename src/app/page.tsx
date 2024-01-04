import PostList from "./blogs/page";

const  Home = () => {
    return (
        <main className="main-page">
                    <h1 className="main-heading">Welcome to my blog!</h1>
                    <div className="blogi">
                        <PostList /> 
                    </div>
                    <br></br>
                    <p>Want to try to be admin click on some other button</p>
                    <br></br>
                    <p>In the blogs you can add your own comments wow</p>

        </main>
    )
}
export default Home;