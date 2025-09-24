import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ArticlePage() {
    const [article, setArticles] = useState({})
    const params = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/articles/${params.id}`)
            .then((result) => {
                setArticles(result.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])



    return (

        <>
            <Navbar title='حسین بلاگ' />
            <div >
                <div className="container">
                    <h1>{article.title}</h1>
                    <div >
                        <span>تاریخ:{article.date}</span>
                        <span>نویسنده:{article.athor}</span>
                        <span>مدت زمان خواندن:{article.readingTime}</span>
                    </div>
                    <img src={article.imageUrl} alt="" />

                    <p>{article.content}</p>
                </div>

            </div>
        </>
    );
}


export default ArticlePage