import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// Components
import Card from './components/common/Card';
import BucketBar from './components/BucketBar';
import Sidebar from './components/Sidebar';
import FloatingButton from './components/common/FloatingButton';


const App = () => {
	const [videos, setVideos] = useState([]);
	const [filteredVideos, setFilteredVideos] = useState(videos)

	useEffect(() => {
		axios.get('/videos')
			.then(response => {
				setVideos(response.data);
				setFilteredVideos(response.data);
			})
			.catch(error => console.log(error));
	}, []);

	const filterVideos = category => {
		if (category === 'All') {
			setFilteredVideos(videos);
		} else {
			setFilteredVideos(videos.filter(video => video.category === category));
		}
	}

	const addVideo = form => {
		axios.post('/videos', form)
			.then(response => {
				setVideos([...videos, response.data]);
				setFilteredVideos([...filteredVideos, response.data]);

			})

	}

	const addHistory = videoId => {
		axios.post('/history', { video: videoId })
			.then(response => {
				console.log(response.data);
			}).catch(error => console.log(error));
	}


	const deleteVideo = id => {
		axios.delete(`/videos/${id}`)
			.then(response => {
				setVideos(videos.filter(video => video.id !== id));
				setFilteredVideos(filteredVideos.filter(video => video.id !== id));
			})
	}


	return (
		<section className='home container-fluid'>
			<FloatingButton addVideo={addVideo} />
			<div className="row">
				<div className="col-auto" style={{ paddingRight: 0 }}>
					<Sidebar />
				</div>
				<div className="col" style={{ paddingLeft: "0px" }}>
					<BucketBar videos={videos} filterVideos={filterVideos} />
					<div className="home__videos container-fluid p-3">
						<div className="row">
							{filteredVideos.length && filteredVideos.map(video => (
								<div className="col-md-4 col-xl-3" key={video.id}>
									<Card video={video} deleteVideo={deleteVideo} addHistory={addHistory} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default App