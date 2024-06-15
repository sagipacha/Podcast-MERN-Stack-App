// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CreateEpisodeForm from "../components/EpisodeForm/CreateEpisodeForm";
// import { baseUrl } from "../../utils/baseUrl";

// const CreateEpisode = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     releaseDate: "",
//     coverImage: "",
//     audioFile: "",
//     length: "",
//     scheduling: {
//       startDate: "",
//       endDate: "",
//       timezone: "",
//     },
//     podcastId: "",
//     podcasts: [], 
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAudioUpload = (file) => {
//     setFormData({ ...formData, audioFile: file });
//   };

//   const token = localStorage.getItem("token");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     formDataToSend.append("title", formData.title);
//     formDataToSend.append("description", formData.description);
//     formDataToSend.append("releaseDate", formData.releaseDate);
//     formDataToSend.append("coverImage", formData.coverImage);
//     formDataToSend.append("length", formData.length || 5000);

//     formDataToSend.append("episodes", formData.audioFile);
//     formDataToSend.append("podcastId", formData.podcastId);
//     try {
//       if (!token) {
//         throw new Error("No token found");
//       }

//       const episodeResponse = await axios.post(
//         `${baseUrl}/episodes`,
//         formDataToSend,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Episode created:", episodeResponse.data);
//     } catch (error) {
//       console.error(
//         "Error creating episode:",
//         error.response ? error.response.data : error
//       );
//     }
//   };

//   useEffect(() => {
//     const fetchPodcasts = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}/podcasts`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log(response.data);
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           podcasts: response.data,
//         }));
//       } catch (error) {
//         console.error("Error fetching podcasts:", error);
//       }
//     };

//     fetchPodcasts();
//   }, []);

//   return (
//     <div>
//       <CreateEpisodeForm
//         formData={formData}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//         handleAudioUpload={handleAudioUpload}
//         podcasts={formData.podcasts}
//       />
//     </div>
//   );
// };

// export default CreateEpisode;



import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateEpisodeForm from "../../components/EpisodeForm/CreateEpisodeForm";
import { baseUrl } from "../../../utils/baseUrl";


const CreateEpisode = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    releaseDate: "",
    coverImage: "",
    audioFile: "",
    length: "", 
    scheduling: {
      startDate: "",
      endDate: "",
      timezone: "",
    },
    podcastId: "",
    podcasts: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("scheduling")) {
      const scheduling = { ...formData.scheduling, [name.split(".")[1]]: value };
      setFormData({ ...formData, scheduling });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAudioUpload = (file) => {
    setFormData({ ...formData, audioFile: file });
  };

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("releaseDate", formData.releaseDate);
    formDataToSend.append("coverImage", formData.coverImage);
    formDataToSend.append("length", formData.length || 5000); 
    formDataToSend.append("episodes", formData.audioFile);
    formDataToSend.append("podcastId", formData.podcastId);
  
    try {
      if (!token) {
        throw new Error("No token found");
      }
  
      const episodeResponse = await axios.post(
        `${baseUrl}/episodes`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Episode created:", episodeResponse.data);
    } catch (error) {
      console.error(
        "Error creating episode:",
        error.response ? error.response.data : error
      );
    }
  };
  

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/podcasts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          podcasts: response.data,
        }));
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <div>
      <CreateEpisodeForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleAudioUpload={handleAudioUpload}
        podcasts={formData.podcasts}
      />
    </div>
  );
};

export default CreateEpisode;
