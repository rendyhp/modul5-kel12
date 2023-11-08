/*export default function Profile() {

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ color: "white" }}>Profile</h1>
        </div>
    );
}
*/
import { Fragment } from "react";
import CardBig from "../component/CardProfile"; import CardSmall from "../component/CardSmall"; import "./Profile.css";

export default function Movie() {

    const poster = [
        {
            title: "Rendy Hartono Putra", id: 1,
            rate: 4,
            genre: "Genre favorit: comedy, supernatural",
            img: "https://aratamesekai.files.wordpress.com/2023/10/cocoa-1.png?w=1022",
        },
        {
            title: "Ferdy Fernando", id: 2,
            genre: "Genre favorit: action, shounen",
            img: "https://avatars.githubusercontent.com/u/116475964?v=4",
        },
        {
            title: "Yuda Nadhika", id: 3,
            rate: 4,
            genre: "Genre favorit: Turu, romance",
            img: "https://avatars.githubusercontent.com/u/26102002?v=4",
        },
        
    ];
 
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ color: "white" }}>Profile</h1>
            </div>
            <div className="containerTop">
                 <div style={{ display: "flex", justifyContent: "center" }}>
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} 
                        />
                        
                    </Fragment>
                ))}
                </div>
            </div>
            
            
        </>
    );
}
