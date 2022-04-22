import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { typesCitas } from "../types/types";

// registrar
export const registerCitaSync = (cita) => {
    return {
        type: typesCitas.register,
        payload: cita
    }
}

export const registerCitaAsync = (nombre, num_documento, telefono, fecha_cita, hora_cita) => {
    return async (dispatch) => {
        const newCita = { nombre, num_documento, telefono, fecha_cita, hora_cita }
        await addDoc(collection(db, 'citas'), newCita)
            .then(resp => {
                dispatch(registerCitaSync(newCita))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

// listar 
export const listCitasSync = (citas) => {
    return {
        type: typesCitas.list,
        payload: citas
    }
}

export const liostCitasAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, 'citas'));
        const citas = [];
        querySnapshot.forEach((doc) => {
            citas.push({...doc.data()})
        });
        dispatch(listCitasSync(citas));
    }
}