for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}
// var formulario = document.querySelector("#formfilms");
// formulario.addEventListener('submit',function()
// {
//     var peli = document.querySelector("#addfilms");
//     localStorage.setItem(peli,peli);
// });

// // function getTimes(start, end) {
// //     // Convert to number of half-hours
// //     console.log(parseInt(start));
// //     console.log(parseInt(end));
// //     // console.log(start.slice(-2));
// //     // start = parseInt(start) * 2 + (+start.slice(-2) > 0);
// //     // end = parseInt(end) * 2 + (+end.slice(-2) > 0) + 1;
// //     start = parseInt(start) * 2 ;
// //     end = parseInt(end) * 2 + 1;
// //     // Produce series
// //     return Array.from({length: end - start}, (_, i) =>
// //         (((i + start) >> 1) + ":" + ((i + start)%2*3) + "0").replace(/^\d:/, "0$&"));
// // };

// function getTimeDifference(startTime, endTime) {
//     const difference = endTime - startTime;
//     const differenceInMinutes = difference / 1000 / 60;
//     let hours = Math.floor(differenceInMinutes / 60);
//     if (hours < 0) {
//       hours = 24 + hours;
//     }
//     let minutes = Math.floor(differenceInMinutes % 60);
//     if (minutes < 0) {
//       minutes = 60 + minutes;
//     }
//     const hoursAndMinutes = hours + ":" + (minutes < 10 ? '0' : '') + minutes;
//     return hoursAndMinutes;
//   }

//   function getTimeDifferenceinMinutes(startTime, endTime) {
//     const difference = endTime - startTime;
//     const differenceInMinutes = difference / 1000 / 60;
//     let hours = Math.floor(differenceInMinutes / 60);
//     if (hours < 0) {
//       hours = 24 + hours;
//     }
//     let minutes = Math.floor(differenceInMinutes % 60);
//     if (minutes < 0) {
//       minutes = 60 + minutes;
//     }

//     return hours*60 + minutes;
//     // const hoursAndMinutes = hours + ":" + (minutes < 10 ? '0' : '') + minutes;
//     // return hoursAndMinutes;
//   }
  
//   const start = new Date(0,0,0,23,15);
//   const end = new Date(0,0,0,1,30);
//   const difference = getTimeDifference(start, end);
//   const diffminutes = getTimeDifferenceinMinutes(start,end);
//   console.log(difference);
//   console.log(diffminutes);

//   function getTimes(start, end) {
//     // Convert to number of half-hours
//     console.log(parseInt(start));
//     console.log(parseInt(end));
//     // console.log(start.slice(-2));
//     // start = parseInt(start) * 2 + (+start.slice(-2) > 0);
//     // end = parseInt(end) * 2 + (+end.slice(-2) > 0) + 1;
//     start = parseInt(start) * 2 ;
//     end = parseInt(end) * 2 + 1;

//     console.log(start);
//     console.log(end);
//     console.log(start>>1);
//     console.log(end>>1);
//     // Produce series
//     return Array.from({length: end - start}, (_, i) =>
//          (((i + start) >> 1) + ":"  + "00").replace(/^\d:/, "0$&"));
// };
// console.log(Array.from("ABCDEFG"));
// console.log(getTimes("9:30", "22:30"));