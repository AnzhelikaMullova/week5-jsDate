 function formatDate(date){
    let diff = new Date() - date; // разница в миллисекундах

    if(date < 1000){
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
      







 }

 formatDate(date);