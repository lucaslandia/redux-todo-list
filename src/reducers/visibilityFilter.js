import * as constants from '../constants/constants'
import { VisibilityFilters } from '../constants/constants'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case constants.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter