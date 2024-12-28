import React from 'react';
import { Mail, Play, Pause, TwitterIcon } from 'lucide-react';
import logoImage from '../assets/logosameer.png';

const Portfolio = () => {
    // State and refs - declare these first
    const videoRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const showreelConfig = {
        videoUrl: "/videos/showreel.mp4",
        thumbnailUrl: "/thumbnails/showreel-thumb.jpg"
    };

// const Portfolio = () => {
//   const [isPlaying, setIsPlaying] = React.useState(false);

//   // Handle play/pause
//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   // Update play state when video ends
//   React.useEffect(() => {
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       videoElement.addEventListener('ended', () => setIsPlaying(false));
//       return () => {
//         videoElement.removeEventListener('ended', () => setIsPlaying(false));
//       };
//     }
//   }, []);

  // Sample video data - replace with actual video data
  const animationWorks = [
    {
      id: 1,
      title: "3D Character Animation",
      description: "A detailed character animation showcasing complex movements and expressions.",
      videoUrl: "/videos/3d-character-animation.mp4",
      thumbnailUrl: "/thumbnails/3d-character-thumb.jpg"
    },
    {
      id: 2,
      title: "Product Animation",
      description: "3D product animation for a commercial project with dynamic camera movements.",
         videoUrl: "/videos/product-animation.mp4",
         thumbnailUrl: "/thumbnails/product-animation-thumb.jpg"
    }
  ];

  const videoEdits = [
    {
      id: 1,
      title: "Commercial Edit",
      description: "Fast-paced commercial edit with synchronized music and dynamic transitions.",
            videoUrl: "/videos/commercial-edit.mp4",
            thumbnailUrl: "/thumbnails/commercial-edit-thumb.jpg"
    },
    {
      id: 2,
      title: "Music Video Edit",
      description: "Creative music video edit featuring various visual effects and color grading.",
            videoUrl: "/videos/music-video-edit.mp4",
            thumbnailUrl: "/thumbnails/music-video-edit-thumb.jpg"
    }
  ];

  const skills = [
    { category: "3D Software", items: ["Blender", "Maya", "Unreal Engine", "Substance Painter"] },
    { category: "Video Editing", items: ["After Effects", "Premiere Pro"] },
    { category: "Specializations", items: ["Product Visualization", "3D Environment", "CGI Advertisement", "Motion Graphics", "Cinematic Editing"] }
  ];

    // Event handlers
    const togglePlay = () => {
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
      };
    
      // Side effects
      React.useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
          videoElement.addEventListener('ended', () => setIsPlaying(false));
          return () => {
            videoElement.removeEventListener('ended', () => setIsPlaying(false));
          };
        }
      }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
        <div 
        className="fixed inset-0 z-0 opacity-20"
        style={{
            backgroundImage: `url(${require('../assets/background.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
        />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed w-full bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo */}
               <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                <img 
                    src={logoImage} 
                    alt="Logo" 
                    className="h-10 w-10 rounded-full" 
                />
                </div>
                <span className="text-xl font-bold">Sameer Kumar</span>
            </div>
            <div className="space-x-6">
              <a href="#work-3d" className="hover:text-blue-400 transition">3D Animation</a>
              <a href="#work-video" className="hover:text-blue-400 transition">Video Editing</a>
              <a href="#connect" className="hover:text-blue-400 transition">Connect</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-36">
          <div className="container mx-auto text-center">
            <h1 className="text-7xl font-bold mb-10 ">3D Artist & Video Editor</h1>
            
            {/* New Introduction */}
            <div className="max-w-3xl font-bold mx-auto mb-18 space-y-6">
              <p className="text-xl leading-relaxed">
                Hi, I'm Sameer Kumar, a passionate 3D artist and video editor who is devoted to creating the most stunning and engaging content.
              </p>
            </div>
            <div className="max-w-3xl mx-auto mb-12 space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
              
                My expertise lies in Blender, Maya, Unreal Engine, After Effects, Premiere Pro, and I specialize in Product Visualization, 3D Environment, CGI Advertisement, motion graphics, and cinematic editing. I'm always experimenting with new techniques and trying to go beyond what's expected of me.
                </p>
              <p className="text-xl font-semibold text-blue-400">
                Let's work together to produce something exceptional!
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {skills.map((skillSet) => (
                <div key={skillSet.category} className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">{skillSet.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillSet.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Showreel Video Player */}
            <div className="relative max-w-4xl mx-auto aspect-video bg-black/50 rounded-lg overflow-hidden">
                <video 
                    ref={videoRef}
                    src={showreelConfig.videoUrl}
                    poster={showreelConfig.thumbnailUrl}
                    className="w-full h-full object-cover"
                    playsInline
                    onClick={togglePlay}
                />
                <button 
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
                >
                    {isPlaying ? 
                        <Pause className="w-16 h-16" /> : 
                        <Play className="w-16 h-16" />
                    }
                </button>
            </div>
          </div>
        </section>

        {/* 3D Animation Work Section */}
        <section id="work-3d" className="py-20 px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">My Work - 3D Animation</h2>
                <div className="grid gap-12">
                    {animationWorks.map(work => (
                        <div key={work.id} className="max-w-4xl mx-auto bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
                            <video 
                                className="w-full aspect-video object-cover"
                                controls
                                poster={work.thumbnailUrl}
                            >
                                <source src={work.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                                <p className="text-gray-300">{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Video Editing Work Section */}
        <section id="work-video" className="py-20 px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">My Work - Video Editing</h2>
                <div className="grid gap-12">
                    {videoEdits.map(work => (
                        <div key={work.id} className="max-w-4xl mx-auto bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
                            <video 
                                className="w-full aspect-video object-cover"
                                controls
                                poster={work.thumbnailUrl}
                            >
                                <source src={work.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                                <p className="text-gray-300">{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="py-20 px-6 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Connect With Me</h2>
            <div className="flex justify-center space-x-8">
              <a 
                href="mailto:sameerk.vfxeditor@gmail.com" 
                className="flex items-center space-x-2 hover:text-blue-400 transition"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
              <a 
                href="https://x.com/Liebe_dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-blue-400 transition"
              >
                <TwitterIcon className="w-6 h-6" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;