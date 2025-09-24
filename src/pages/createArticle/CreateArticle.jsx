import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./../createArticle/createArticle.module.css"



function CreateArticle() {

    const onChangeArticle = (e) => {


    }

    return (
        <>
            <Navbar title='حسین بلاگ' />
            <div className={styled.createArticlepage}>
                <div className="container">
                    <h1>ساخت مقاله</h1>
                    <div className={styled.inputwrapper}>
                        <label >عنوان</label>
                        <input onChange={onChangeArticle} type="text" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateArticle;