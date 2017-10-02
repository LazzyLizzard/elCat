export default function queueReducers(...reducers) {
    console.log(...reducers);
    return (state, action) => reducers.reduce((s, reducer) => reducer(s, action), state);
}
