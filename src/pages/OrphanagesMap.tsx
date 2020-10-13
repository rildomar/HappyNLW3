import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { motion } from "framer-motion"

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-pages.css';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                    <motion.header
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5}}
                    >
                        <img src={mapMarkerImg} alt="Happy"/>

                        <h2>Escolha um orfanato no mapa.</h2>
                        <p>Muitas crianças estão esperando a sua visita :)</p>

                    </motion.header>
                    <motion.footer
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5}}>
                        <strong>João Pessoa</strong>
                        <span>Paraíba</span>
                    </motion.footer>
            </aside>
            
            <Map 
                center={[-7.1466088,-34.8815975]}
                zoom={12}
                style={{width: '100%', height: '100%' }}
            > 
                {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                
            </Map>
            
            <motion.div 
                className="create-orphanages"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5}}
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }}
            >
                <Link to="">
                    <FiPlus size={32} color="#fff" />
                </Link>
            </motion.div>
        </div>
    );
}

export default OrphanagesMap;