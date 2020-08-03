import * as Types from '../constants/ActionType';

export const type = (params) => {
    return{
        type : Types.TYPE,
        params,
    }
}