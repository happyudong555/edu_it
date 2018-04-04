import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import Navbar from '../components/navbar'
import Category_slide from '../components/category_slide'
import Grid_thumbnail from '../components/grid_tumbnail'
export default class index extends React.Component {
    render() {
      return (
        <div>
            <Head>
                <title>Tainook || ผจญภัยไปกับเรา</title>
                <link rel="stylesheet" href="static/css/bootstrap/dist/css/bootstrap.min.css" />
                <script type="text/javascript" src="static/js/jquery/dist/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                <script type="text/javascript" src="static/css/bootstrap/js/dist/bootstrap.min.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Kanit|Sriracha" rel="stylesheet"/>
                <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <div className="clearfix">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 main_category_slide">
                            <Category_slide/>
                        </div>
                    </div>
                    <div className="clearfix container">
                        <Grid_thumbnail/>                       
                    </div>
                    <br/>
                </div>
            </div>
            <style>
                {`
                    .clearfix {
                        clear:both;
                    }
                    .main_category_slide {
                        width:100%;
                        height:265px;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center top;
                        background-image:url(../static/asset/background/travel.jpg);
                    }
                      
                `}
            </style>
        </div>
        
      )
    }
  }