var list = [5,8,9,2,7,6,3,1,4];

function callback(list){
    var newlist = [];
    for(var i=0;  i< list.length; i++){
        if(list[i]>5) newlist.push(list[i]);
    }
    return newlist
}

function filter(list,callback){
    callback(list);
}

var filtered = filter(list,callback);
console.log(filtered);