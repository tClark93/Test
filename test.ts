class Test {
    a: string;
    b: number;
    c: boolean;
    d?: any[];
  
    constructor(a: string, b: number, c: boolean, d?: boolean){
      this.a = a;
      this.b = b;
      this.c = c
      if(d){
        this.d = [this.a, this.b, this.c]
      }
    }
}
  
function flatten(arr){
  var newArr: string[] = [];
  for(let i = 0; i < arr.length; i++){
    if(typeof (arr[i]) == "object"){
      for(let j = 0; j < arr[i].length; j++){
        if(typeof (arr[i]) == "string"){
          newArr.push(arr[i][j])
        }
      }
    }
    else if(typeof (arr[i]) == "string"){
      newArr.push(arr[i])
    }
  }
  return newArr
}

function flattenObject(obj: Test){
  if(!obj.d){
    return false;
  }
  var newArr: string[] = [];
  for(let i = 0; i < obj.d.length; i++){
    if(typeof (obj.d[i]) == "object"){
      for(let j = 0; j < obj.d[i].length; j++){
        if(typeof (obj.d[i][j]) == typeof obj.a){
          newArr.push(obj.d[i][j])
        }
      }
    }
    else if(typeof (obj.d[i]) == typeof obj.a){
      newArr.push(obj.d[i])
    }
  }
  return newArr
}

// var six = new Test('one', 2, true, true)
// console.log(flattenObject(six))