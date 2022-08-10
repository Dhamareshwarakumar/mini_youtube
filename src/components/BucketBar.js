import React from 'react';

// Components
import Pill from './common/Pill';


const BucketBar = ({ videos, filterVideos }) => {
    const categories = [...new Set(videos.map(video => video.category))];
    return (
        <div className='bucket-bar text-light'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-auto" onClick={() => filterVideos('All')}>
                        <Pill text='All' />
                    </div>
                    {categories.map((category, index) => (
                        <div className="col-auto" key={index} onClick={() => filterVideos(category)}>
                            <Pill text={category} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BucketBar