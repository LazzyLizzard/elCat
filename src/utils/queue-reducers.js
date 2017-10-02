export default function queueReducers(...reducers) {
    return (state, action) => reducers.reduce((s, reducer) => reducer(s, action), state);
}
