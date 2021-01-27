import { Firestore } from "./config"

const wodDb = () => {
    const save = wod => {
        return Firestore.collection('wod').add(JSON.parse(JSON.stringify(wod)));
    }

    return Object.freeze({
        save
    })
}

const WodRepository = wodDb()

export { WodRepository }