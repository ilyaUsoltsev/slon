import React from 'react';

const Music = () => {
    return (
        <div className="center_wrapper">
            <iframe frameBorder="0" style={{background:'#ddd', width:'900px', height:'600px', marginTop:'40px'}} width="900" height="600" src="https://music.yandex.ru/iframe/#album/5147794">Слушайте <a href='https://music.yandex.ru/album/5147794'>В оранжерее</a> — <a href='https://music.yandex.ru/artist/5734538'>Мятый Слон</a> на Яндекс.Музыке</iframe>
        </div>
    );
};

export default Music;