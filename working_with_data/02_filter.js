var list = [5,8,9,2,7,6,3,1,4];

function callback(item){
    // return true for included items
    return item>5;
}

var filtered = list.filter(callback);

var filtered = filter(list,callback);
console.log(filtered);