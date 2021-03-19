export function getRedirecTo(type,avatar){
    let path = '';
    if (type === "Boss") {
        path = '/main/Boss'
    } else {
        path='/main/Staff'
    }

    if (!avatar) {
        path+='Info'
    }

    return path;
}