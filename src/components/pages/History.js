import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from '../Sidebar';
import HistoryCard from '../common/HistoryCard';



const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get('/history')
            .then(response => {
                setHistory(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const deleteVideo = id => {
        axios.delete(`/history/${id}`)
            .then(response => {
                setHistory(history.filter(video => video.id !== id));
            }).catch(error => console.log(error));
    }

    return (
        <section className='home container-fluid'>
            <div className="row">
                <div className="col-auto" style={{ paddingRight: 0 }}>
                    <Sidebar />
                </div>
                <div className="col" style={{ paddingLeft: "0px" }}>
                    {history.length ? (
                        <div className="home__videos container-fluid p-3">
                            <div className="row">
                                {history.map(item => (
                                    <div className="col-md-4 col-xl-3" key={item.id}>
                                        <HistoryCard videoId={item.video} deleteVideo={deleteVideo} id={item.id} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    ) : (<h2 className="text-light text-center">No History</h2>)}
                </div>
            </div>
        </section>
    )
}

export default History