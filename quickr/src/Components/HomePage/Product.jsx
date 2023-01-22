import react from "react"

export const Product=({img,name,rs,location,day})=>{
    return(
        <>
        <div style={{backgroundColor:"#F5F5F5",margin:"10px",textAlign:"center"}}>
                <img style={{ width: "80%", height: "180px" ,margin:"auto"}} src={img} />
                <p
                  style={{
                    color: "black",
                    overflow: "hidden",
                    marginRight: "50px",

                    color: "#57ADDC",
                  }}
                >
                  {name}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "70%",
                    paddingTop: "10px",
                    margin:"auto"
                  }}
                >
                  <p>{rs}</p>
                  <p>{location}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    // border: "1px solid red",
                    paddingTop: "10px",
                    width: "70%",
                    margin:"auto"
                  }}
                >
                  <button
                    style={{
                      color: "#57ADDC",
                      border: "1px solid #57ADDC",
                      borderRadius: "5px",
                      width: "50px",
                      height: "30px",
                    }}
                  >
                    View
                  </button>
                  <p
                    style={{ textAlign: "center", color: "gray", fontSize: "" }}
                  >
                    {day}
                  </p>
                </div>
        </div>
        </>
    )
}