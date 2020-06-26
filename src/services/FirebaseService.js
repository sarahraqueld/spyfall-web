import { firebaseDatabase } from '../utils/firebaseUtils'


const FirebaseService = {
    get: async () => {
        return await firebaseDatabase.ref('/games/').once('value').then(function(snapshot) {
            var id = snapshot.val() && snapshot.val().id
            return id;
          });
      },
};

export default FirebaseService;