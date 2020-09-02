import { COMMENTS } from '../shared/comments';
import { ADD_COMMENT } from './ActionTypes';

export const Comments = (state=COMMENTS,action)=>{
    switch(action.type){
        case ADD_COMMENT:
            console.log(action);
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log(comment);
            return state.concat(comment);
        default:
            return state;
    }
}