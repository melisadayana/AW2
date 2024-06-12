export const getUserData = (key) => {
    let info = JSON.parse(sessionStorage.getItem(key))
    return info ? info : []
}

export const logOut = (key) => {
    sessionStorage.removeItem(key)
}

export const getProductData = (key) => {
    let info = JSON.parse(localStorage.getItem(key))
    return info ? info : []
}

export const setProductData = (key, arr) => {
    try {
        localStorage.setItem(key, JSON.stringify(arr))
    } catch (error) {
        console.log(error)
    }
}