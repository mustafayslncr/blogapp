import './Post.css'
import { Link } from 'react-router-dom';

export default function post() {
    return (
        <div className="post">
            <Link to="/post/:postId"><img
                className="postImg"
                src="https://blog-biletall.mncdn.com/wp-content/uploads/2019/11/manzara-sevenlerin-takip-etmesi-gereken-instagram-hesaplari.jpg" 
                alt="" 
            /></Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Müzik</span>
                    <span className="postCat">Hayat</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet 
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae provident quibusdam, delectus, qui eaque, sed distinctio dolorum dolores quis adipisci maiores! Et quo accusantium distinctio animi, aperiam corporis tenetur at, facere quibusdam possimus dolore id ad unde odit ullam a perferendis obcaecati. Placeat nulla provident repellendus qui fugit, ipsum dolore harum similique distinctio quam quos! Omnis natus molestias nesciunt quidem cum dolor unde ratione earum vero quam, repellendus, itaque sint, voluptatibus magnam? Quo, hic.
            </p>
        </div>
    );
}
