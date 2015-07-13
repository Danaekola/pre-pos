function count_same_elements(collection){
  //在这里写入代码
  var result = [];
  for(var x = 0; x < collection.length; x++){
   getResult(collection[x],result);
  }
   return result;
}
function getResult(element,result) {
   for(var y = 0; y < result.length; y++){
     if(element[0] === result[y].name){
      result[y].summary += (element.length == 1 ? 1 : (getSpecialElement(element)));
	  return;
     }
   }
   result.push({name:element[0],summary:element.length == 1 ? 1 : (getSpecialElement(element))});
}
function getSpecialElement(element){
    var str='';
    for(var m = 0; m < element.length; m++){
       if(!isNaN(parseInt(element[m]))) {
           str += element[m];
        }
     }
    return parseInt(str);
}
