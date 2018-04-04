import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'

export default class Category_slide extends React.Component {
    render () {
        return (
            <div>
                <Head>
                <link rel="stylesheet" href="static/css/bootstrap/dist/css/bootstrap.min.css" />
                </Head>
                <div id="ThumbnailCarousel" className="carousel slide col-xs-12" data-ride="carousel">
                    <div className="carousel-inner wrapper">
                        <br/>
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-3 type">
                                    <Link href={'/park'}>
                                        <a className="thumbnail categoryBlog">
                                            <img src="static/asset/icon/park_icon.png" alt="Image" className="img-fluid img-thumbnail"/>
                                            <br/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="col-md-3 type">
                                    <Link href={'/shopping'}>
                                        <a className="thumbnail categoryBlog">
                                            <img src="static/asset/icon/shopping_icon.png" alt="Image" className="img-fluid img-thumbnail"/>
                                            <br/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="col-md-3 type">
                                    <Link href={'/restaurant'}>
                                        <a className="thumbnail categoryBlog">
                                            <img src="static/asset/icon/Restaurant_icon.png" alt="Image" className="img-fluid img-thumbnail"/>
                                            <br/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="col-md-3 type">
                                    <Link href={'/temple'}>
                                        <a className="thumbnail categoryBlog">
                                            <img src="static/asset/icon/temple_icon.png" alt="Image" className="img-fluid img-thumbnail"/>
                                            <br/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-3 type">
                                    <Link href={'/museum'}>
                                        <a className="thumbnail categoryBlog">
                                            <img src="static/asset/icon/museum_icon.png" alt="Image" className="img-fluid img-thumbnail"/>
                                            <br/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="col-md-3 type">
                                    <Link href={'/cafe'}>
                                        <a className="thumbnail categoryBlog">
                                            <img src="static/asset/icon/cafe_icon.png" alt="Image" className="img-fluid img-thumbnail"/>
                                            <br/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#ThumbnailCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#ThumbnailCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <style>
                    {`
                        #ThumbnailCarousel img {
                            width: 120px;
                            height: 100%;
                            background-color: transparent;
                            border: 0;
                        }
                        
                        .col-md-3 .img-thumbnail {
                            height:100%;
                        }
                        .categoryBlog p {
                            color: #495057;
                            text-transform: uppercase;
                            font-size: 18px;
                            padding-top: 10px;
                            font-weight: bold;
                        }
                        .type:hover {
                            text-decoration: none !important;
                            ttransition:All 1s ease;
                            -webkit-transition:All 1s ease;
                            -moz-transition:All 1s ease;
                            -o-transition:All 1s ease;
                            transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
                            -webkit-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
                            -moz-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
                            -o-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
                            -ms-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
                            transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);
                            -webkit-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);
                            -moz-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);
                            -o-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);
                            -ms-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);
                            transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);
                            -webkit-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);
                            -moz-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);
                            -o-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);
                            -ms-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);
                        }
                        .wrapper {
                            width:50%;
                            margin:22px auto;
                            display:block;
                        }
                    `}
                </style>
            </div>
        )
    }
}