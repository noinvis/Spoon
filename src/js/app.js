const headerEl = document.querySelector("nav")

window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 0){
        headerEl.classList.add("shrink")
    }else{
        headerEl.classList.remove("shrink")
    }
})

{
    // 1- task 
    // const numKub = num => num ** 3;
    // console.log( numKub(2) );
    // console.log( numKub(5) );
}

{
    // 2 - task
    // const Age = function(yearsOld){
    //     return yearsOld >= 18 ? `${yearsOld} - Voyaga yetgan` : `${yearsOld} - Voyaga yetmagan` 
    // }
    // console.log( Age(18) );
    // console.log( Age(16) );
    // console.log( Age(19) );    
}

{
    // 3 - task 
    // function FindOdd(n) {
    //     for (let i = 0; i <= n; i++) {
    //         if ( i % 2 === 1) {
    //             console.log( `${i} - toq son` );
    //         }
    //     }
    // }
    // console.log( FindOdd(10) );   
}

{
    // 4 - task 
    // function findMin(a, b, c) {
    //     return `Eng kichik son - ${Math.min(a, b, c)}` ;
    // }
    // console.log(findMin(11, 2, 9));
    // console.log(findMin(100, 200, 10));
}

{
    // 5 - task 
    // const countUnli = str => {
    //     let count = 0;
    //     const unli = "aeuiouAEUIO";
    //     for (let i = 0; i < str.length; i++) {
    //         if (unli.includes(str[i])) {
    //             count++;
    //         }
    //     }
    //     return `Unli harflar soni - ${count} ta`;
    // }
    // console.log(countUnli("Hello World"));
    // console.log(countUnli("Laylo keldi guruhga"));
}