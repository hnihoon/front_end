const fruits = ['Banana', 'Orange','Apple', 'Mango'];
console.log(fruits.toString())
console.log(fruits.join('^^'))
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.pop())
console.log('4.push')
fruits.push('키위')
console.log(fruits)
fruits.push('Orange')
console.log(fruits)
fruits.push('banana')
fruits.push('Mango')
fruits.push('Apple')
console.log(fruits)
console.log('5. shift(). nushift() 는 생략(개인연습)')  //pop,push 메소드와 방햔만 다릅니다.
console.log('6.delete')
delete fruits[1];       //특정요소값을 지우기 -> undefined 값으로 변경
console.log(fruits)
console.log('delete item :' + fruits[1])
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const result = arr1.concat(arr2)
console.log(result)
console.log('8.splice')
 const fruits2 = ["Banana","Orange", "Apple", "Mango"];
 fruits2.splice(2,0,"Lemon","Kiwi");    //fruits 배열 인덱스2번부터 중간에 데이터 넣기 - 중간에 지워지는 데이터 갯수는 0개
 console.log(fruits2)
 const del = fruits2.splice(4,1, "레몬", "키위");
 console.log(fruits2)               //(7) ['Banana', 'Orange', 'Lemon' , 'Kiwi' , '레몬', '키위', 'Mango']
 //(7) ['Banana', 'Orange' , 'Lemon', 'Kiwi', '레몬','키위', Mango]
 console.log(del)           //splice 메소드는 삭제한 데이터를 리턴합니다.
 //**특정 데이터들을 삭제하는 용도만으로 활용할 수 있습니다.
 fruits2.splice(2,2);
 console.log(fruits2)
 console.log('9.slice')
 const fruits3 = ["Banana", "Orange","Lemon","Apple","Mango"];
 const citrus = fruits3.slice(1,3);        //fruits 배열의 인덱스 1번부터 (3-1)개를 잘라내기로 새로운 배열을 리턴한다.
 console.log(citrus)
 console.log(fruits3.slice(3))        //두번째 인자값이 없을때는 3번부터 끝까지 잘라내기로 새로운배열 리턴


