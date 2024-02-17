import React from 'react';
import styles from './styles/Map.module.scss';
import map from './styles/map_img.png';
import Footer from '../footer/Footer';
import MapComponent from './MapComponent';

export default function Map(): JSX.Element {

    return (
        <>
            <div className={styles.map__container}>
                <h1>Найти место</h1>
                
                <div className={styles.content}>
                    <div className={styles.search}>
                        <input type="text" placeholder='Введите адрес' />
                        <p>Результаты поиска</p>
                        <div className={styles.search__results}>
                            <div>
                                <p>Адрес бара номер один</p>
                                <p className={styles.on_map}>Показать на карте</p>
                            </div>
                            <div>
                                <p>Адрес бара номер два</p>
                                <p className={styles.on_map}>Показать на карте</p>
                            </div>
                            <div>
                                <p>Адрес бара номер три</p>
                                <p className={styles.on_map}>Показать на карте</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.map}>
                        {/* <img src={map} alt="map img" /> */}
                        <MapComponent />
                        <div className={styles.map__overlay}></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
