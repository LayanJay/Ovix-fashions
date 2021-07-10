const Message = () => {
    return (
        <>
            <section className="text-center pt-32">
                <div className="text-4xl font-playFair text-offBrown font-semibold p-10">
                <h4>Woops.....</h4>
                </div>
                <div className="flex space-x-2 items-end p-8">
                    <span className="text-9xl font-extrabold text-gray-500">4</span>
                    <span className="text-8xl font-extrabold text-offBrown">o</span>
                    <span className="text-9xl font-extrabold text-gray-500">4</span>    
                </div>
                
                <div className="text-1xl font-semibold text-brown-dark p-10">
                    <h5>Looks like the page is not existing.</h5>
                    <h5>Let&apos;s go back and try.</h5>
                </div>
            </section>
        </>
    )
}

export default Message