//calculator needs to...
//evaulate expression in number operator number format
//accept decimals
//display input as its inputted
//store total for next start
//clear history

//grab each number, give them an event listener
//find value of number clicked, add to dom
//find value of operator clicked, add to dom
//find value of number2 clicked add to dom
//given evaluate expression inside #answerBox
let keys = document.querySelector('#buttons');
keys.addEventListener('click', addToDisplay);

function addToDisplay(evt){
    const {target} = evt;
    if(!target.matches('span')){
        return
    }else{
        calc.checkTheInt(target.innerHTML)
        //pass value into calc obj
    }
};

const calc = {
    displayText: '0',
    prevTotal: null,

    checkTheInt(value){
        switch(value) {
            //check if any unicode characters been clicked
            case '=' : 
                
                if(isNaN(+(this.displayText.slice(-1)))){
                    this.displayText = 'invalid sequence'
                }else{
                    this.evaluate(this.displayText)
                }
                break;
            case 'clear' :
                this.displayText = '0'
                document.querySelector('#answerBox').innerText = this.displayText
                this.prevTotal = null
                break;
            case '.' :
                if(this.displayText == 0){
                    this.addText('0.')
                }else{
                    this.addText('.')
                }
                break;
            default:
                this.addText(value)
        }
    },

    addText(value) {
        if (this.displayText === '0' || this.displayText === 'invalid sequence'){
            this.displayText = ''
            value.innerHTML = ''
        }else if(this.prevTotal != null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        //check whether the value and displayText(next num to be added to dom) are numbers
        //if that true, check if the very last element added is not a number
        if(isNaN(+(value)) && isNaN(+(this.displayText))){
            if(isNaN(+(this.displayText.slice(-1)))){
                this.displayText = 'invalid sequence'
            }
            else{
                this.displayText += value
            };
        }else{
            this.displayText += value 
        };
        this.showInDom(this.displayText) //show displayed text


    },

    showInDom(textToShow) {
        document.querySelector('#answerBox').innerText = textToShow
    },

    evaluate(expression) {
        this.displayText = Function("return " + expression)()
        this.showInDom(this.displayText)
    },

}







