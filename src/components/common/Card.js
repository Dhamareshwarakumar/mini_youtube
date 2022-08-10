import React from 'react';

const Card = ({ video, deleteVideo, addHistory }) => {
    const videoId = video.link.split('=')[1];
    return (
        <div className="card" style={{ width: "18rem;", backgroundColor: "#181818" }}>
            <img src={`https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`} className="card-img-top" alt="..." onClick={() => addHistory(video.id)} />
            <div className="card-body">
                <div className="text-light">{video.title}</div>
                <div className="text-secondary">{video.category}</div>
                <div className="text-secondary">1k Views * 2 hours ago</div>
                <div className="container">
                    <div className="row justify-content-end mt-1">
                        <div className="col-auto" style={{ padding: "4px" }}>
                            <button className="btn btn-warning"><i className="bi bi-pencil-fill"></i> Edit</button>
                        </div>
                        <div className="col-auto" style={{ padding: "4px" }}>
                            <button className="btn btn-danger" onClick={() => deleteVideo(video.id)}><i className="bi bi-trash3-fill"></i> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card