import { CREAT_STU, DELETE_STU, GET_INFO, UPDATE_STU, LOADING } from "../constant/actionType";
import { db } from '../../Firebase/Firebase'
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

export const creatStudent = (data) => {
    return {
        type: CREAT_STU,
        payload: data
    }
}

export const creatStudentAsync = (data) => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(creatStudent(data))
        }, 2000)
    }
}

export const DeleteStudent = (id) => {
    return {
        type: DELETE_STU,
        payload: id
    }
}

export const DeleteStudentAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(DeleteStudent())
        }, 2000)
    }
}

export const GetInfo = (id) => {
    return {
        type: GET_INFO,
        payload: id
    }
}

export const GetInfoAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(GetInfo())
        }, 2000)
    }
}

export const UpdateStu = (data) => {
    return {
        type: UPDATE_STU,
        payload: data
    }
}

export const UpdateStuAsync = () => {
    return dispatch => {

        dispatch(loading())
        setTimeout(() => {
            dispatch(UpdateStu())
        }, 2000)
    }
}

export const loading = () => {
    return {
        type: LOADING
    }
}

export const CreateStu = (data) => {
    
    return async dispatch => {
        await setDoc(doc(db, "students", `${data.id}`), data).then((res) => {
            console.log("Done", res);
            dispatch(creatStudent(data))
        }).catch((err) => {
            console.log("error", err);
        })
    }

    // return async dispatch => {
    //     await addDoc(collection(db, "students"), data).then((res) => {
    //         console.log(res.id);
    //         dispatch(creatStudent(data))
    //     }).catch((err) => {
    //         console.log("error", err);
    //     })
    // }
}