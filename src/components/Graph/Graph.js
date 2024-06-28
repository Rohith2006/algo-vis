import "./Graph.css"
import Bar from "../Bar/Bar";

export default function Graph() {
    const width="10%" ;
    return(
        <div className="Graph">
            <Bar height="70" width = {width} color="red"> eqwe10 </Bar>
            <Bar height="2" width = {width} color="green"/>
            <Bar height="34" width = {width} color="black"/>
            <Bar height="42" width = {width}  color=""/>
            <Bar height="23" width = {width} color=""/>
            <Bar height="66" width = {width}  color=""/>
        </div>
    );
}