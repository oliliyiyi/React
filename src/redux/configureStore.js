import {createStore} from 'redux';
import {Reducer, initialState} from './reducer'

export const ConfigureStory= () => {
    const store = createStore(
        Reducer, 
        initialState
    );
    return store;
}