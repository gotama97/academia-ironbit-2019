const dirReduc = (arr) => {
    let inverse = ''
    return arr.reduce( (acc, direction) => {

        direction === "NORTH" ?  inverse = "SOUTH" : 
        direction === "SOUTH" ?  inverse = "NORTH" : 
        direction === "WEST" ? inverse = "EAST" : 
        direction === "EAST"? inverse = "WEST" : direction 
        
        switch(true){
        case direction === "EAST":
            
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

module.exports = dirReduc;