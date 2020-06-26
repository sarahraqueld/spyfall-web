import axios from 'axios';

const PlayerApi = {
  get: async () => {
    //const response = await axios.get('');
    return { spy: false,
            location: "Submarine"};
  }
};

export default PlayerApi;