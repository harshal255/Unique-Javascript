document.getElementById("subject_enter").addEventListener('click',function()
{
    const number = document.getElementById("subjects").value;
    console.log(number);
    const elem = document.createElement("li");
    function func()
    {
        for(i=0 ; i<number ; i++){
            const box=document.createElement("INPUT");
            box.type="text";
            elem.appendChild(box);
        }
    }
    const enterButton = document.getElementById("subject_enter");
    // enterButton.addClass = "buttonPadding";
});
let sum=0;
function func1()
    {
        const number = document.getElementById("subjects").value;
    console.log(number);
    const elem = document.getElementById("boxes"); //createElement("li");
        for(i=0 ; i<number ; i++){
            const label=document.createElement("p");
            label.innerHTML  = "Enter marks " + (i+1).toString();

            const box=document.createElement("INPUT");
            //box.type="text";
            box.setAttribute("type", "text");
            box.setAttribute("placeholder" , "Enter marks " + (i+1).toString());
            box.setAttribute("id", "mark"+(i+1).toString());
            // const mark=document.getElementById("mark"+(i+1).toString());
            //  sum=sum+mark;
            //console.log(mark);
            elem.appendChild(label);
            elem.appendChild(box);
    }
        // const enter = document.createElement("button");
        // enter.setAttribute("id","calculate");
        // enter.setAttribute("name", "Enter");
        // elem.appendChild(enter);
    }
document.getElementById("calculate").addEventListener('click',function()
{
    const elem = document.getElementById("boxes");
    const number = document.getElementById("subjects").value;
    let percentage = 0;
    for(i=0 ; i<number ; i++)
    {
        const mark=parseInt(document.getElementById("mark"+(i+1).toString()).value);
             sum=sum+mark;
             //console.log(mark);
    }  
    percentage = (sum/number);
    //console.log(percentage);
    const outputLabel = document.getElementById("outputLabel");
    outputLabel.innerHTML = "You percentage is:";
    const output = document.getElementById("output");
    output.innerHTML = percentage;
    elem.appendChild(outputLabel);
    elem.appendChild(output);
})



// document.getElementById("calculate").addEventListener('click',function()
// {
//     const mark1 = parseInt(document.getElementById("mark1").value);
//     const mark3 = parseInt(document.getElementById("mark3").value);
//     const mark4 = parseInt(document.getElementById("mark4").value);
//     const mark2 = parseInt(document.getElementById("mark2").value);
//     const mark5 = parseInt(document.getElementById("mark5").value);
//     console.log(mark1);
//     console.log(mark2);
//     console.log(mark3);
//     console.log(mark4);
//     console.log(mark5);
//     const total = 500;
//     const sum = mark1+mark2+mark3+mark4+mark5;
//     console.log(sum);
//     const percentage = sum/5;
//     console.log(percentage);

// })
