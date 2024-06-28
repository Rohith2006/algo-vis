import "./Bar.css"
export default function Bar({height, width, color}){
    const Height = `${height}%`; 
    const Width = `${width}%`; 
    return(
        <div className="Bar" style={{height:Height , width:Width, backgroundColor:color}}>
            <h2> {height} </h2>
        </div>
    );
}