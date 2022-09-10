import { combineReducers } from 'redux'

import Busca from './Busca'
import reproduz from './reproduz-video'

const rootReducer = combineReducers({
    Busca,
    reproduz
})

export default rootReducer