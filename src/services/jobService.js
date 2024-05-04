import axios from 'axios';

export const fetchJobs = async () => {
  try {
    const response = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      limit: 10,
      offset: 0
    });
    return response.data.jdList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
