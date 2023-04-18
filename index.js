 function formatDate(date){
    let diff = new Date() - date; // разница в миллисекундах

    if(diff < 1000){
        return 'прямо сейчас';

    } 
    let sec = Math.floor(diff / 1000); //сек

    if( diff <60)
    {
        return sec + ' сек. назад';
    }
    let min = Math.floor(diff / 60000);//минуты
    if (min < 60) {
        return min + ' мин. назад';
    }

else{


    let time = date;     
   time=[

     time.getDate(),
     time.getMonth() + 1,
     time.getFullYear(),
     time.getHours(),
     time.getMinutes()

   ]
   return(`${time.getDate()}+${time.getMonth()}+${time.getFullYear()} +" " + ${time.getHours()}+":"+${time.getMinutes()}`);
   

}


}
console.log(formatDate(new Date(new Date - 1))); 
// "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); 
// "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); 
// "5 мин. назад"

// вчерашняя дата вроде 31.11.2022, 20:00
console.log(formatDate(new Date(new Date - 86400 * 4 * 1000)));






formatDate(date);


