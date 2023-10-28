import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { gitActions } from "../store/git/gitcslice"
const actions={
    ...gitActions
}
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}