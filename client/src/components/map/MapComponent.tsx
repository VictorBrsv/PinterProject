import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const center = [55.75393, 37.621558];

const places = [
  { id: 1, coordinate: [55.743611, 37.653889], name: 'Московский театр на Таганке' },
  { id: 2, coordinate: [55.764105, 37.656164], name: 'Довлатов' },
  { id: 3, coordinate: [55.758471, 37.659687], name: 'Torro Grill' },
  { id: 4, coordinate: [55.778244, 37.587355], name: 'Torro Grill' },
  { id: 5, coordinate: [55.760532, 37.619825], name: 'Большой театр' },
  { id: 6, coordinate: [55.813798, 37.633858], name: 'Суши мастер' },
  { id: 7, coordinate: [55.741643, 37.652854], name: 'Стимпанк бар' },
];

const images = [...Array(26)].map((_, i) => {
  const letter = String.fromCharCode(i + 97);
  return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
});

export default function MapComponent(): JSX.Element {

    return (
        <YMaps query={{ load: 'package.full' }}>
            <Map
                state={{
                    center,
                    zoom: 13,
                    controls: [],
                }}
                width='760px'
                height='500px'
            >
            {places.map((place, i) => (
                <Placemark
                    key={place.id}
                    geometry={place.coordinate}
                    options={{
                        iconLayout: 'default#image',
                        iconImageSize: [50, 50],
                        iconImageHref: images[i],
                    }}
                    properties={{
                        balloonContent: place.name,
                    }}
                />
            ))}
            </Map>
        </YMaps>
    )
}
