
export const getAllKeys = (arr: any[]) => {
    let keys: string[] = []
    arr.forEach(item => {
        const itemKeysLenght = Object.keys(item).length
        if (keys.length < itemKeysLenght) {
            keys = Object.keys(item)
        }

    })
    return keys
}