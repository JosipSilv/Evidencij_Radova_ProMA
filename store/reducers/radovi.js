import { STUDENTI } from '../../model/TestPodaci'
import { PROMJENA_FAVORITA } from '../actions/radovi'

const pocetnoStanje = {
    radovi: STUDENTI,
    filterRadovi: STUDENTI,
    favoritRadovi: []
}

const radReducer = (state = pocetnoStanje, action) => {
    switch (action.type) {
        case 'PROMJENA_FAVORITA':

            //vraca -1 ako ne nade rad u nizu, inace vraca index u kujem se nalazi
            const odabran = state.favoritRadovi.findIndex((rad) => rad.id === action.idRada);
            if (odabran >= 0) {
                const noviNizFavorita = [...state.favoritRadovi];
                noviNizFavorita.splice(odabran, 1);
                return { ...state, favoritRadovi: noviNizFavorita };
            }
            else {
                const rad = state.radovi.find(rad => rad.id === action.idRada);
                return {...state, favoritRadovi: state.favoritRadovi.concat(rad)};
            }
            break;

        default:
            return state;
    }
}

export default radReducer