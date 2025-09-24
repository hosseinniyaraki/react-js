import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from './home.module.css'
import axios from "axios";
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner"

function Home() {

    const [articles, setArticles] = useState([])
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)

        axios.get("http://localhost:5000/articles")
            .then((result) => {
                setArticles(result.data);
                setisLoading(false)
            })
            .catch((error) => {
                // console.log(error);
                setisLoading(false)

            });

    }, []);

    return (
        <div className={styled.homeWrapper}>
            <Navbar title='حسین بلاگ' />

            

            <div className="container">
                <h2>مقالات جدید</h2>


                {isLoading ? (
                    <Spinner /> 
                ) : (
                        <div className={styled.articles}>
                            {articles.map((article) => (
                                <Link to={`/article/${article.id}`}>
                                    <Article key={articles.id} article={article} />
                                </Link>
                            ))}
                        </div>
                    )
                }









            </div>
            <Footer />

        </div>


    );
}

export default Home