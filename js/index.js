// gloval value
let count = 0;
//calculate button logic:-1
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener('click',function(){
    count += 1;
    //calculate button logic:-2
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    // last logic
    if(income <= 0 || isNaN(income)){
    document.getElementById("income-error").classList.remove("hidden");
       return;
    // errorFun("income-error");
    }
    if( software<= 0 || isNaN(software)){
       document.getElementById("software-error").classList.remove("hidden");
    // errorFun("software-error")
       return;
    }
    if(courses <= 0 || isNaN(courses)){
       document.getElementById("courses-error").classList.remove("hidden");
       return;
    }
    if(internet <= 0 || isNaN(internet)){
       document.getElementById("internet-error").classList.remove("hidden");
       return;
    }
    
    /*
    *console.table({income, software, courses, internet});
    */
    //calculate button logic:-3
    const totalExpanses = software + courses + internet;
    const balance = income - totalExpanses;
    
    // last logic
    if(totalExpanses > income){
        document.getElementById("logic-error").classList.remove("hidden");
        return;
    }
    /*
    *console.table({balance,totalExpanses})
    */
    //calculate button logic:-4
    const totalExpansesElement = document.getElementById("total-expenses");
    totalExpansesElement.innerText = totalExpanses.toFixed(2);

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);
    //calculate button logic:-5
    const result = document.getElementById("results");
    result.classList.remove("hidden") 

    //history button
    const historyList = document.createElement("div");
    historyList.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    historyList.innerHTML = `
    <p>count: ${count}</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500">totalExpanses: $${totalExpanses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">balance: $${balance.toFixed(2)}</p>
    `
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyList, historyContainer.firstChild);
});

//calculate savings button logic:-1
document.getElementById("calculate-savings").addEventListener('click',function(){

    

    const savings = parseFloat(document.getElementById("savings").value);
    
    //calculate savings button logic:-2        
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    //calculate savings button logic:-3
    const totalExpanses = software + courses + internet;
    const balance = income - totalExpanses;

    const savingsAmount = (savings * balance) / 100;
    //calculate savings button logic:-4
    const remainingBalance = balance - savingsAmount;

    const savingsAmountElement = document.getElementById("savings-amount");
    savingsAmountElement.innerText = savingsAmount.toFixed(2);

    document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);  
 
});



/*
**History button start 
*/
const assistantTab = document.getElementById("assistant-tab");
const historyTab = document.getElementById('history-tab');
historyTab.addEventListener("click",function(){
    historyTab.classList.add(
        'text-white', 
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
    )
    historyTab.classList.remove('text-gray-600')
    assistantTab.classList.remove(
        'text-white', 
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
    )
    assistantTab.classList.add('text-gray-600')

    document.getElementById("expense-form").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
});


assistantTab.addEventListener('click',function(){
    assistantTab.classList.add(
        'text-white', 
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
    )
    historyTab.classList.remove(
        'text-white', 
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
    )
    document.getElementById("expense-form").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");

});



// document.getElementById("income")
// .addEventListener("input",function(){
//     const incomeValue = document.getElementById("income").value;
//     if(isNaN(incomeValue) || incomeValue <= 0){
//         document.getElementById("income-error").classList.remove("hidden");
//         return;
//     }
// });

// document.getElementById('software')
// .addEventListener("input",function(){
//     const softwareValue = document.getElementById("software").value;
//     if(isNaN(softwareValue) || softwareValue <= 0){
//         document.getElementById("software-error").classList.remove("hidden");
//        return;
//     }
// });

// document.getElementById("courses")
// .addEventListener("input",function(){
//     const coursesValue = document.getElementById("courses").value;
//     if(isNaN(coursesValue) || coursesValue <= 0){
//         document.getElementById("courses-error").classList.remove("hidden");
//        return;
//     }
// });

// document.getElementById('internet')
// .addEventListener("input",function(){
//     const internetValue = document.getElementById("internet").value;
//     if(isNaN(internetValue) || internetValue <= 0){
//         document.getElementById("internet-error").classList.remove("hidden");
//        return;
//     }
// });


    

