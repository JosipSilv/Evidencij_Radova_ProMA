export const PROMJENA_FAVORITA = 'PROMJENA_FAVORITA';
export const FILTRIRAJ_NIZ = 'FILTRIRAJ_NIZ';
export const UNESI_NOVI_RAD = 'UNESI_NOVI_RAD';

export const promjenaFavorita = (id) => {
    return {
        type: PROMJENA_FAVORITA,
        idRada: id
    };
}

export const filtrirajNiz = (vrsta) =>{
    return{
        type: FILTRIRAJ_NIZ,
        vrstaRada: vrsta,
    };
}

export const unesiRad = (ime, naslov, vrsta) => {
    return{
        type: UNESI_NOVI_RAD,
        imeRada: ime,
        naslovRada: naslov,
        vrstaRada: vrsta
    }
}