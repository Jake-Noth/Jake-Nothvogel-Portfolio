



export default function Screen1(){

    const sharedStyles = {
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };

    return(
        <div 
            style={{
                height:"100%", 
                width:"100%", 
                borderRadius:"30px", 
                display:"flex", 
                flexDirection:"row"
            }}
        >
            <div 
                style={{
                    width:"60%", 
                    height:"100%",
                    display:"flex", 
                    justifyContent:"center", 
                    flexDirection:"column",
                    alignItems:"center"
                }}
            >
                <div
                    style={{
                        height:"30%",
                        width:"100%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"end",
                        paddingBottom:"20px"
                    }}
                >
                    <h1>Hi, i'm Jake</h1>
                </div>
                <div
                    style={{
                        height:"70%",
                        width:"100%",
                        paddingLeft:"40px",
                        paddingRight:"40px",
                        display:"flex",
                        justifyContent:"start",
                        alignItems:"center",
                        fontSize:"20px",
                        flexDirection:"column"
                    }}
                >
                    <div 
                        style={{
                            height:"50%"
                        }}
                    >
                        <p>I’m a full-stack web developer with a degree in computer 
                            science from Illinois State University. I am based in the 
                            Chicago area and looking for opportunities in the city of Chicago.
                        </p>
                    </div>
                    <div 
                        style={{
                            height:"50%",
                            width:"100%", 
                            display:"flex", 
                            justifyContent:"space-between", 
                            alignItems:"start", 
                            flexDirection:"row"
                        }}
                    >
                        <div
                            className="social-links"
                            style={{
                                ...sharedStyles,
                                backgroundImage: `url('/screen1/githubIcon.svg')`,
                            }}
                            onClick={() => window.open("https://github.com/Jake-Noth", "_tab")}
                        />
                        <div
                            className="social-links"
                            style={{ 
                                ...sharedStyles,
                                backgroundImage: `url('/screen1/linkedinIcon.svg')`,
                            }}
                            onClick={() => window.open("https://www.linkedin.com/", "_tab")}
                        />
                        <div 
                            className="social-links"
                            style={{
                                ...sharedStyles,
                                backgroundImage: `url('/screen1/resume.png')`
                            }}
                        />
                    </div>
                </div>
                
                
            </div>
            <div 
                style={{
                    width: "40%", 
                    height: "50%", 
                    borderRadius: "50%", 
                    overflow: "hidden", 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    marginTop:"60px", 
                    marginRight:"20px" 
                }}>
                <img 
                    src="/screen1/picture.jpeg" 
                    style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover" 
                    }}
                />
            </div>
        </div>
    )
}