import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import ReactDom from 'react-dom'
import Router from 'next/router'
import trips from '../static/database/trips'
import * as data from 'lodash'
import Navbar from '../components/navbar'
import GoogleMapReact from 'google-map-react';
export default ({url:{ query: { id }}},props) => {
    let detail_trips = data.find(trips, {id:id});
    let album = detail_trips.album.album_1.slice(0,3);
    this.state = {
        position: {
            lat: detail_trips.latitude, 
            lng: detail_trips.longitude
        },
        zoom: 15
    };
    return (
        <div>
            <Head>
                <title>{detail_trips.place_name}</title>
                <meta property="fb:app_id" content="369906716844139" /> 
                <meta property="og:type" content={detail_trips.location} />
                <meta property="og:title" content={detail_trips.place_name} />
                <meta property="og:image" content={`static/public/images/${detail_trips.image_url}`} /> 
                <meta property="og:description" content={detail_trips.content} />
            </Head>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="main_image col-md-12">
                        <div className="row">
                            <img src={`static/public/images/${detail_trips.image_url}`} />
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container" style={{marginTop:20,marginBottom:30}}>
                <div className="col-md-7 main_content">
                    <h3 className="place_name">{detail_trips.place_name}</h3>
                    <div className="clearfix">
                        <i style={{marginRight:6,color:'#545b62'}} class="fas fa-map-marker-alt"></i>
                        <span style={{fontSize:14,textTransform:'capitalize'}}>{detail_trips.location}</span>
                    </div>
                    <br/>
                    <p className="content">{detail_trips.content}</p>
                    <br/>
                    <div className="album_image col-md-4">
                        <div className="row">
                            <img src={`static/public/images/${detail_trips.album.album_1}`}/>
                        </div>
                    </div>
                    <div className="album_image col-md-4">
                        <div className="row">
                            <img src={`static/public/images/${detail_trips.album.album_2}`}/>
                        </div>
                    </div>
                    <div className="album_image col-md-4">
                        <div className="row">
                            <img src={`static/public/images/${detail_trips.album.album_3}`}/>
                        </div>
                    </div>
                    <br/>
                </div>
                <div className="map col-md-5" id="mapView">
                <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyDTJIRTePaIfz2spe2dZIMS5RnXL9zlz1s'}} 
                defaultCenter={this.state.position}
                defaultZoom={this.state.zoom}>
                <div lat={detail_trips.latitude} lng={detail_trips.longitude}>
                <i className="fas fa-map-marker-alt fa-2x mapviewIcon"></i>
                </div>
                </GoogleMapReact>
                </div>
            </div>
            <style>{`
            .clearfix {
                clear:both;
            }
            .main_content {
                float:left;
                border-right: 40px solid #fff;
            }
            .map {
                width:100%;
                height:300px;
                padding:0;
                margin-top:20px;
                float:left;
            }
            .mapviewIcon {
                color:#dc3545;
            }
            .place_name {
                text-transform: capitalize;
                font-size: 23px;
                font-family: sukhumvit set, kanit !important;
                font-weight: bold;
            }
            .main_image {
                background-color:#000;
                height:640px;
                overflow:hidden;
            }
            .main_image img {
                width:100%;
                height:100%;
                overflow:hidden;
                object-fit: cover;
                -webkit-object-fit: cover;
                -moz-object-fit: cover;
                -o-object-fit: cover;
                object-position: center top;
            }
            .album_image img {
                width:100%;
                height:130px;
                overflow:hidden;
                object-fit: cover;
                -webkit-object-fit: cover;
                -moz-object-fit: cover;
                -o-object-fit: cover;
                object-position: center top;
            }
            .album_image {
                height:100%;
                background-color:#000;
                float:left;
                margin-bottom:50px;
                border-right:14px solid #fff;
                overflow: hidden;
            }
            .content {
                font-size: 14px;
                line-height: 32px;
                text-transform: capitalize;
                font-family: sukhumvit set, kanit !important;
                white-space: pre-wrap;
            }
            
            `}
            </style>
        </div>
    )
}