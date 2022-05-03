import { CHANGE_LANG } from "../Constants/LanguageConstants"

export const changeLanguageAction= (lang)=> async(dispatch,getState)=>{
    console.log(lang)
    dispatch({
        type:CHANGE_LANG,
        payload:{
            language:lang
        }
    })
    localStorage.setItem("mainLang",JSON.stringify(getState().language))
}