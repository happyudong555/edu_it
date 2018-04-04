import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import Router from 'next/router'
import trips from '../static/database/trips'
import fetch from 'isomorphic-fetch'

export default class Grid_thumbnail extends React.Component {
    static getInitialProps ({query}) {
        return {
            trips: trips
        }
    }
    render () {
        let top_rated = trips.slice(0,6);
        return (
            <div>
                <br/>
                    <h4 className="page-header top_location_heading">top place in bangkok</h4>
                    {
                        top_rated.map((trips, i)=>(
                        <Link href={`/detail?id=${trips.id}`}>
                            <a key={i} className="grid col-md-4">
                                <div className="feed">
                                    <img src={`static/public/images/${trips.image_url}`} className="img-responsive"/>
                                </div>
                                <div className="discription">
                                    <h4>{trips.place_name}</h4>
                                    <p><i style={{marginRight:6,color:'#545b62'}} class="fas fa-map-marker-alt"></i> {trips.location}</p>
                                </div>
                            </a>
                        </Link>
                        ))
                    }
                <style>
                    {`
                        .grid {
                            height:100%;
                            background-color:transparent !important;
                            float:left;
                            cursor: pointer;
                            padding:0;
                            border-right:16px solid #fff;
                            margin-bottom:20px;
                            color: #6c757d;
                        }
                        .grid:hover {
                            color: #6c757d !important;
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

                        h1, h2, h3, h4, h5, h6, p, span {
                            font-family: 'Sriracha', cursive, sukhumvit set !important;
                        }
  
                        .top_location_heading{
                            text-transform: capitalize;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            font-weight: bold;
                            color: #4a4a4a;
                            font-family: inherit !important;
                            font-size: 23px;
                        } 

                        .feed {
                            width:100%;
                            height:260px;
                            overflow:hidden;
                        }

                        img {
                            max-width:100%;
                            height:100%;
                        }

                        .feed img {
                            width:100%;
                            height:260px;
                            overflow:hidden;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            left: 0;
                            position:absolute;
                            object-fit: cover;
                            object-position: center top;
                            border-radius:3px;
                        }
                        .feed img:hover {
                            border:5px solid #0a192e;
                            cursor: pointer;
                        }

                        .discription {
                            padding-top: 16px;
                            padding-bottom: 10px;
                        }

                        .discription h4{
                            font-size: 18px;
                            font-family: sukhumvit set, kanit !important;
                            text-transform: capitalize;
                            color:#4a4a4a;
                            font-weight: bold;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .discription p {
                            font-family: sukhumvit set, kanit !important;
                            text-transform: capitalize;
                            font-size: 13.4px;
                            line-height: 26px;
                            font-weight: lighter;
                        }

                    `}
                </style>
            </div>
        )
    }
}