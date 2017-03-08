import C from './constants';
import { allSkiDays } from './store/reducers';

const state = [
    {
        "resort": "Kirkwood",
        "date": "2016-13-15",
        "powder": true,
        "backcountry": false
    },
    {
        "resort": "Boreal",
        "date": "2016-12-15",
        "powder": false,
        "backountry": false
    }
];

const action = {
    type: C.ADD_DAY,
    payload: "2016-12-15"

};

const nextState = allSkiDays(state, action);

console.log(`

    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`);