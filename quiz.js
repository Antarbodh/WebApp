
let questions = [
    {
        id: 1,
        question: "Wat betekent RAM voluit?",
        answer: "Random Access Memory",
        option:[
            "Run Accept Memory",
            "Random Accept Memory",
            "Resting Access Memory",
            "Random Access Memory"
        ]
    },

    {
        id: 2,
        question: "Wie is presdent van Amerika?",
        answer: "Joe Biden",
        option:[
            "Donald Trump",
            "Joe Biden",
            "Nicolas cage",
            "Pete Murray"
        ]
    },
    {
        id: 3,
        question: "Wat is een boleet?",
        answer: "Een paddestoel",
        option:[
            "Een koekje",
            "Een chocolade wafel",
            "Een paddestoel",
            "Een geleerde"
        ]
    },
    {
        id: 4,
        question: "Wat betekent PPR?",
        answer: "Politieke Partij Radicalen",
        option:[
            "Politieke Partij Radicalen",
            "Peper Pasta Room",
            "Pest Poker Room",
            "Piet Pander Raltjes"
        ]
    },
    {
        id: 5,
        question: "Wat betekent PS voluit?",
        answer: "Post Script",
        option:[
            "Stil zijn",
            "Piet Stekelenburg",
            "Past Syndroom",
            "Post Script"
        ]
    },

];

let question_count = 0;
let points = 0;

window.onload = function(){
    show(question_count);
};

function show(count){
        let question = document.getElementById("questions"); 
        let [first, second, third, fourth] = questions[count].option;

        question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
        <ul class="option_group">
        <li class="option">${first}</li>
        <li class="option">${second}</li>
        <li class="option">${third}</li>
        <li class="option">${fourth}</li>
        </ul>`;
        toggleActive();

    }

    function toggleActive(){
        let option = document.querySelectorAll("li.option");
        for(let i=0; i <option.length; i++){
            option[i].onclick = function(){
             for(let i=0; i< option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }

}

function next(){
    if(question_count == questions.length -1){
      location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points +=10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}
