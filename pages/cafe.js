import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import Navbar from '../components/navbar'
import trips from '../static/database/trips'
export default class Cafe extends React.Component {
    static getInitialProps({query}) {
        return {
            trips: trips
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            search_fillter:''
        }
    }
    onChange (event) {
        this.setState({
            search_fillter:event.target.value
        })
    }
    render() {
        let filter_trips = trips.filter(
            (trips) => {
               if (trips.category === 'cafe / co-working space') {
                 return trips.place_name.toLowerCase().indexOf(this.state.search_fillter) !== -1;
               }
            }
         );
        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="main_background col-md-12">
                            <div className="container">
                                <h4 className="page-header top_location_heading" style={{position: 'absolute'}}>cafe & co-working space</h4>
                                <br/>
                                <input onChange={this.onChange.bind(this)} className="form-control searchBox" placeholder="Search | Find Cafe / Co-Working Space"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                {
                        filter_trips.map((trips, i)=>(
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
                </div>
                <br/>

            <style>{`
                
                .clearfix {
                    clear:both
                }
                .searchBox {
                    width:560px;
                    margin-top:170px;
                    position: absolute;
                }
                .main_background {
                    background-color: #000;
                    height: 400px;
                    background-image:url(../static/public/images/11755672_10153948506912119_4074935785052254491_n.jpg);
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center top;
                    box-shadow: inset 5px 10px 10px #000;
                    margin-bottom:43px;
                }
                .main_background::before {
                    content: '';
                    width: 100%;
                    height: 100%;
                    opacity: .6;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-image: linear-gradient(to bottom right,#12161b,#6a61b5);
                }
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
                    padding-top: 120px;
                    padding-bottom: 15px;
                    font-weight: bold;
                    color: #fff;
                    font-family: inherit !important;
                    font-size: 30px;
                    text-shadow: 1px 0px 1px #000;
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