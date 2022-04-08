import { combineReducers } from 'redux'

import weather from './weather/reducer'

const rootReducer = combineReducers({
  weather: weather,
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer
