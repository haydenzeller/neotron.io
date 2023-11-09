import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import './VideoDownloader.scss';



function VideoDownloader() {
    
  // Use null as the initial value for both variables
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [downloadedVideoUrl, setDownloadedVideoUrl] = useState<string | null>(null);

  // Use refs to access the DOM elements
  const buttonRef = useRef<HTMLButtonElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const handleDownloadVideo = async () => {
    // refresh page if video is already downloaded
    if (downloadedVideoUrl) {
        // regenerate the video 
        setDownloadedVideoUrl(null);
    }
     statusRef.current!.innerHTML = "Downloading video...";
    try {
      const response = await fetch(`https://hooks.neotron.io/download_video?url=${videoUrl}`);
      if (response.ok) {
        const data = await response.json();
        setDownloadedVideoUrl(data.video_url);
        statusRef.current!.innerHTML = "Video downloaded successfully.";
      } else {
        // Display the error to the user
        statusRef.current!.innerHTML = "Failed to download video.";
      }
    } catch (error) {
      // Display the error to the user
      statusRef.current!.innerHTML = "Error: " 
    }
  };


  return (
    
    <div id="VideoDownloader">
      <Helmet>
        {/* header script for ads */}
        <script async={true} data-cfasync="false" src="//overthrowslash.com/7f75d17afbda3672c64ad6ba8c9d9487/invoke.js"></script>
        <title>NEOTRON - Downloader</title>
      </Helmet>
        <div className="title">
            <h1>Youtube Downloader</h1>
            <h3>(only works for Youtube)</h3>
        </div>
      <input
        id="UrlInput"
        type="url" 
        placeholder="Enter video URL"
        value={videoUrl ?? ""} // Use the nullish coalescing operator to provide a default value
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <div className="GetBtnWrapper">
        <button ref={buttonRef} disabled={!videoUrl} className="button" id="GetBtn" onClick={handleDownloadVideo}>GET</button>
      </div>
      <div className="status" id="status" ref={statusRef} />

        {downloadedVideoUrl && (
            <div className="VideoWrapper">
            <video width="400" controls>
                <source src={downloadedVideoUrl} type="video/mp4" />
            </video>           
                    </div>    
        )}
        <br/>
        {/* container for ads */}
        <div id="container-7f75d17afbda3672c64ad6ba8c9d9487"></div>
    </div>
  );
}

export default VideoDownloader;
