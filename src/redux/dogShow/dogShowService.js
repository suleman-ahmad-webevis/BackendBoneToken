import axios from "axios";

const getTheVideosService = async (obj) => {
  let API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCnhjvMGmupzfPA_KupFz2yw&order=date&key=AIzaSyC8PT1LNRvCiPTKJ3wf60tG4dqvRrtFtuo
  `;

  const response = await axios.get(API_URL);
  return response.data;
};

const dogShowService = {
  getTheVideosService,
};

export default dogShowService;
