import './homePage.scss'

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                        explicabo suscipit cum eius, iure est nulla animi consequatur
                        facilis id pariatur fugit quos laudantium temporibus dolor ea
                        repellat provident impedit!
                    </p>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;