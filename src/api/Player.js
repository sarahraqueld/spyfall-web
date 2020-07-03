import { firebaseDatabase } from '../utils/firebaseUtils'

const PlayerApi = {
  get: async (gameId, playerId) => {
    const snapshot = await firebaseDatabase.ref(`games/${gameId}/players/${playerId}`).once('value');
    return snapshot.val();
  },
};

export default PlayerApi;