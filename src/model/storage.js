// const storage = {
//     get:(key)=>{
//         return JSON.parse(localStorage.getItem(key))
//     },
//     get1(key){
//         return JSON.parse(localStorage.getItem(key))
//     },
//     set: (key, data)=>{
//         localStorage.setItem(key, JSON.stringify(data))
//     },
//     remove: (key)=>{
//         localStorage.removeItem(key)
//     }
// }

class Storage {
    get(key){
        return JSON.parse(localStorage.getItem(key))
    }

    set(key, data){
        localStorage.setItem(key, JSON.stringify(data))
    }

    remove(key){
        localStorage.removeItem(key)
    }
}
export const storage = new Storage()
