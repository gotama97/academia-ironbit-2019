function dirReduc(arr){
    let inverse = ''
    return arr.reduce( (acc, direction) => {
        switch(true){
        case direction === "NORTH":
            inverse = "SOUTH"
            break
        case direction === "SOUTH":
            inverse = "NORTH"
            break
        case direction === "WEST":
            inverse = "EAST"
            break
        case direction === "EAST":
            inverse = "WEST"
            break
        }
        
        switch(true){
            case acc.length === 0:
                acc = [direction]
                break
            case acc.length > 0:
                acc[acc.length - 1] === inverse ? acc = [...acc.slice(0,-1)]: acc = [...acc, direction]
        }
        
        return acc
        }, [])
    }