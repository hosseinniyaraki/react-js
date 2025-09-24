import styled from "./article.module.css"
import pic from "./../../assets/images/0_9XtH64R0BlLJqxmW.png"

function Article(props){





    return(
        <div className= {styled.articWrapper}>
            
            <img src={props.article.imageUrl} />
            <h3>{props.article.title}</h3>
            <p>خواندن {props.article.readingTime}دقیقه ای</p>

        </div>
    )
}


export default Article