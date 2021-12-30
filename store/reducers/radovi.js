import { STUDENTI } from '../../model/TestPodaci'
import { Student } from '../../model/Student'

const pocetnoStanje = {
    radovi: STUDENTI,
    filterRadovi: STUDENTI,
    favoritRadovi: []
}

const generirajId = () => {
    return (Math.floor(Math.random() * (500 - 100) + 100));
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
                return { ...state, favoritRadovi: state.favoritRadovi.concat(rad) };
            }

        case 'FILTRIRAJ_NIZ':
            switch (action.vrstaRada) {
                case 'S':
                    return { ...state, filterRadovi: state.radovi };

                default:
                    const noviNizFilter = state.radovi.filter(r => r.vrsta === action.vrstaRada);
                    return { ...state, filterRadovi: noviNizFilter };
            }

        case 'UNESI_NOVI_RAD':
            console.log(action.imeRada);
            console.log(action.naslovRada);
            console.log(action.vrstaRada);

            const noviStudent = new Student(generirajId(), action.imeRada, action.naslovRada, action.vrstaRada);
            state.radovi.push(noviStudent);

        default:
            return state;
    }
}

export default radReducer