import {CHANGE_LANG} from "../Constants/LanguageConstants";
export const languageReducers=(state={language:""},action)=>{
    switch (action.type) {
        case CHANGE_LANG:
        if(action.payload){
            return {
                ...state,
                language:action.payload.language
            }
        }
        break;
        default:
            return state;
    }
}