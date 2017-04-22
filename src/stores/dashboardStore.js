import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class DashboardStore extends ReduceStore {
    getInitialState() {
        return {
            notes: [],
            selectedNoteId: null
        };        
    }

    reduce(state, action) {

    }
}

export default new DashboardStore(dispatcher);