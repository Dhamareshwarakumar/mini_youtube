import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HistoryCard = ({ videoId, deleteVideo, id }) => {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        axios.get('/videos/' + videoId)
            .then(response => {
                setVideo(response.data)
            })
    }, []);



    const ytVideoId = video ? video.link.split('=')[1] : '';
    return (
        video && (
            <div className="card" style={{ width: "18rem;", backgroundColor: "#181818" }}>
                <img src={`https://i3.ytimg.com/vi/${ytVideoId}/hqdefault.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="text-light">{video.title}</div>
                    <div className="text-secondary">{video.category}</div>
                    <div className="text-secondary">1k Views * 2 hours ago</div>
                    <div className="container">
                        <div className="row justify-content-end mt-1">
                            <div className="col-auto" style={{ padding: "4px" }}>
                                <button className="btn btn-danger" onClick={() => deleteVideo(id)}><i className="bi bi-trash3-fill"></i> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default HistoryCard