
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import Router from 'next/router'
import trips from '../static/database/trips'
import fetch from 'isomorphic-fetch'

export default class Navbar extends React.Component {
    render () {
        return (
            <div className="clearfix">
                <Head>
                    <link rel="icon" href="/static/public/favicon/favicon.ico" type="image/png"/>
                    <link rel="stylesheet" href="static/css/bootstrap/dist/css/bootstrap.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Kanit|Sriracha" rel="stylesheet"/>
                    <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className="container-fluid col-md-12 custom_navbar">
                    <div className="row">
                        <div className="container">
                            <Link href="/"><a><img className="logo" alt="Brand" src="static/asset/logo/logo2.png"/></a></Link>
                            <a href="https://www.facebook.com/eduittravel/" target="_blank" class="fab fa-facebook social_Icon"></a>
                        </div>
                    </div>
                </div>
                <style>
                    {`
                        .clearfix {
                            clear:both;
                        }
                        .logo {
                            width: 230px;
                            height: 45px;
                            object-fit: cover;
                            -webkit-object-fit: cover;
                            -moz-object-fit: cover;
                            -o-object-fit: cover;
                            position: relative;
                            top: 20px;
                        }
                        .custom_navbar {
                            width: 100%;
                            height: 80px;
                            background-color: #fff;
                            border-top: 1px solid #eee;
                        }
                        .social_Icon {
                            float: right; font-size: 35px; padding-top: 20px;
                            cursor: pointer;
                            color: #4266b2;
                        }
                    `}
                </style>
            </div>
        )
    }
}