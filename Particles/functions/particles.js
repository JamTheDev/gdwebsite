/*Feature you need in particle system:
Particle:

    -Size (Ok)
    -Size Random (Ok)
    -Size Overlife

    -Opacity(ok)
    -Opacity Random(ok)
    -Opacity Overlife

    -Color
    -Color Overlife (Optional)
Physics:
    -Speed
    -Speed Random
    -Wind X & Y
*/  


const canvas = document.getElementById("canvas_main");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let particleArray;

function Particle(x, y, DirX, DirY, size, color, opacity){
    this.x = x;
    this.y = y;
    this.DirX = DirX;
    this.DirY = DirY;
    this.size = size;
    this.color = color;
    this.opacity = opacity;
}



Particle.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
}

Particle.prototype.update = function(){
    if(this.x > canvas.width + this.size){
        this.x = 0 - this.size;
    }

    if(this.x  < 0 - this.size){
        this.x = canvas.width + this.size;
    }

    if(this.y > canvas.height + this.size){
        this.y = 0 - this.size;
    }

    if(this.y < 0 - this.size){
        this.y = canvas.height + this.size; 
    }
    this.x += this.DirX;
    
    this.y += this.DirY;
    this.draw();
}


window.addEventListener('resize',
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
       
    }

)

class ParticleSystem{

    #numParticles=0;
    #size=0;
    #sizeRandom=0;
    #WindX=0;
    #WindXRandom = 0;
    #WindY=0;
    #WindYRandom = 0;
    #particleOpacity=0;
    #particleOpacityRandom=0;
    #particleArray = [];

    //Set Values
    setNumParticles(num = 0){
        this.#numParticles = num;
    }

    setParticleSize(size = 0){
        this.#size = size;
    } 

    setParticleSizeRandomness(percentage = 0){
        if(percentage < 0 || percentage > 100){
            this.#sizeRandom = 0;
        }else{
            this.#sizeRandom = percentage/100;
        }
    }

    setWindX(speed = 0){
        this.#WindX = speed;
    }

    setWindXRandomness(rate  = 0){
        this.#WindXRandom = rate;
    }

    setWindY(speed = 0){
        this.#WindY = speed;
    }

    setWindYRandomness(rate = 0){
        this.#WindYRandom = rate;
    }

    setOpacity(opacity = 0){
        this.#particleOpacity = opacity;

    }

    setOpacityRandomness(randomness = 0){
        this.#particleOpacityRandom = randomness;
    }

        //-----Break-----//




    //Get Values
    getNumParticles(){
        return this.#numParticles;
    }

    getParticleSize(){
        return this.#size;
    }

    getParticleSizeRandomness(){
        return this.#sizeRandom;
    }

    getWindX(){
        return this.#WindX;
    }

    getWindXRandomness(){
        return this.#WindXRandom;
    }

    getWindY(){
        return this.#WindY;
    }

    getWindYRandom(){
        return this.#WindYRandom;
    }
    
    getParticleArray(){
        return this.#particleArray;
    }

    getOpacity(){
        return this.#particleOpacity;
    }

    getOpacityRandomness(){
        return this.#particleOpacityRandom;
    }

    getArrayofParticleProperties(properties){
        let clone_container = [];
        let clone_array = this.getSavedParticleArray();
        let index = 0;
        // console.log("GetArrayofParticle Properties: " + properties);
        for(let i = index; i < clone_array.length; i++){
            switch(properties){
                case ParticleProperties.NumParticles:
                    clone_container.push(this.getSavedParticleArray()[i].NumParticles);
                    break;

                case ParticleProperties.ParticleSize:
                    clone_container.push(this.getSavedParticleArray()[i].size);
                    break;

                case ParticleProperties.ParticleSizeRandom:
                    clone_container.push(this.getSavedParticleArray()[i].ParticleSizeRandom);
                    break;

                case ParticleProperties.WindX:
                    clone_container.push(clone_array[i].DirX);
                    // console.log(" ??? " + this.getParticleArray()[1].DirX);
                    break;

                case ParticleProperties.WindY:
                    clone_container.push(this.getSavedParticleArray()[i].DirY);
                    // console.error(t;
                    break;
                
                case ParticleProperties.Opacity:
                    clone_container.push(this.getSavedParticleArray()[i].opacity);
                    break;
                 
                default:
                    console.error("Syntax Error");
                    return 0;
            }

        
        }
        return clone_container;
    }

    //Others

    createArrayNewPropertyValue(properties, newValue){

        let DirY = (1 - Math.random() * 0.5) * this.#WindY;
        let color = 'white';
        let opacity = (1 - Math.random() * this.getOpacityRandomness()) * this.getOpacity(); 

        let clone_container = [];
        for(let i = 0; i < this.getSavedParticleArray().length; i++){
            switch(properties){
                case ParticleProperties.NumParticles:
                    console.log("No function implemented on this case");
                    break;

                case ParticleProperties.ParticleSize:
                    clone_container.push((1 - Math.random() * this.#sizeRandom) * newValue);
                    break;

                case ParticleProperties.ParticleSizeRandom:
                    clone_container.push((1 - Math.random() * newValue) * this.#size);
                    break;

                case ParticleProperties.WindX:
                    clone_container.push((1 - Math.random() * this.#WindXRandom) * newValue);
                    break;

                case ParticleProperties.WindXRandom:
                    clone_container.push((1 - Math.random() * newValue) * this.#WindX);
                    break;

                case ParticleProperties.WindY:
                    clone_container.push((1 - Math.random() * this.#WindYRandom) * newValue);
                    break;

                case ParticleProperties.WindYRandom:
                    clone_container.push((1 - Math.random() * newValue) * this.#WindY);
                    break;
                
                case ParticleProperties.Opacity:
                    clone_container.push((1 - Math.random() * this.#particleOpacityRandom) * newValue);
                    break;

                default:
                    console.error("Syntax Error");
                    return 0;
               
            }
        }

        return clone_container;
    }



    saveParticleArray(){
        this.savedArray = JSON.parse(JSON.stringify(this.getParticleArray()));
    }

    getSavedParticleArray(){
        return this.savedArray;
    }

    init(){
        // this.createParticleArray();
        
   
        for(let i = 0; i < this.getNumParticles(); i++){
            let size = (1 - Math.random() * this.#sizeRandom) * this.#size;
            let x = Math.random() * (innerWidth - size * 2);
            let y = Math.random() * (innerHeight - size * 2);
            let DirX = (1 - Math.random() * this.#WindXRandom) * this.#WindX;
            let DirY = (1 - Math.random() * this.#WindYRandom) * this.#WindY;
            let color = 'white';
            let opacity = (1 - Math.random() * this.getOpacityRandomness()) * this.getOpacity(); 
            this.#particleArray.push(new Particle(x, y, DirX, DirY, size, color, opacity));
        }
        
        this.saveParticleArray();
    } 

    animate(){
        requestAnimationFrame(this.animate.bind(this));
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for(let i = 0; i < this.#particleArray.length; i++){
            this.getParticleArray()[i].update();
        }
        
    }

    automate(options){
        let save_PROC = this.saveParticleArray();
        let start = performance.now(); 
        let particles = this.getParticleArray(); //Gets the particle
        let progress_difference; //Value of the change of progress
        let progress_prev; //Value of the previous progress
        let progress; // Value of the progress

        let system_class = this;
        let setValue = options.value;
        let str_property = options.property;
        let _particles = this.getArrayofParticleProperties(str_property);// Array containerfor the values of the selected Particle Properties.
        let action;
       
        let arrayOfNewValues = this.createArrayNewPropertyValue(str_property, setValue);
        let arrayPercentage = Expression.array_getPercentageDifference(arrayOfNewValues,this.getArrayofParticleProperties(options.property));
        // console.log(this.createArrayNewPropertyValue(ParticleProperties.Opacity, 1));
        // console.log(arrayOfNewValues);
        console.log(arrayPercentage);
        requestAnimationFrame(function animation(time){
            // console.log(arrayPercentage[1]);
            //timefraction
            let timeFraction = (time - start)/options.duration;
            if(timeFraction > 1) timeFraction = 1;

            //calculates the progress
            
            if(progress_difference == null || progress_difference == undefined) progress_prev = 0;
            else progress_prev = progress;

            progress = options.timeExpression(timeFraction);

            progress_difference = progress - progress_prev;

           //sets what property to be altered
           switch(str_property){
            case ParticleProperties.NumParticles:
                break;

            case ParticleProperties.ParticleSize:
                action = Automation.setParticleSize(particles, _particles, arrayPercentage, progress_difference);
                break;

            case ParticleProperties.ParticleSizeRandom:
                break;

            case ParticleProperties.WindX:
                action = Automation.setWindX(particles, _particles, arrayPercentage, progress_difference);
                break;

            case ParticleProperties.WindY:
                action = Automation.setWindY(particles, _particles, arrayPercentage, progress_difference);
                break;

            case ParticleProperties.Opacity:
                action = Automation.setOpacity(particles, arrayOfNewValues, arrayPercentage, progress_difference);
                break;

            default:
                // console.error("Syntax Error");
                break;
        }

        action; 
          
        if(timeFraction < 1){
            requestAnimationFrame(animation);
        }else{
            save_PROC;
            // console.log(_particles);
            }
           
        })
     
    
    
    }
}

class ParticleProperties{
    static NumParticles = "NumParticles";
    static ParticleSize = "ParticleSize";
    static ParticleSizeRandom = "ParticleSizeRandom";
    static WindX = "WindX";
    static WindXRandom = "WindXRandom";
    static WindY = "WindY"; 
    static WindYRandom = "WindYRandom";
    static Opacity = "Opacity";
    static OpacityRandom = "OpacityRandom";
}

class TimeEquation{
    static linear(timeFraction){
        return timeFraction;
    }

    static quad(timeFraction) {
        return Math.pow(timeFraction, 2)
    }

    static bounce(timeFraction) {
        for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
          if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
          }
        }
    }

    static Ease = class{
        static EaseOut(TimeEquation) {
            return function(timeFraction) {
              return 1 - TimeEquation(1 - timeFraction);
            }
        }
    
        static EaseInOut(TimeEquation) {
            return function(timeFraction) {
                if (timeFraction < .5){
                    console.log(timing(2 * timeFraction) / 2);
                    return TimeEquation(2 * timeFraction) / 2;
                }else{
                    return (2 - TimeEquation(2 * (1 - timeFraction))) / 2;
                }
            }
        }
    }
 
}

class Expression{
    static getPercentageDifference(value_one = 0, value_two = 0){
        let result =  (value_one <= value_two) ? 1 - (value_one / value_two) : -1 * (1 - (value_two / value_one));
        return result;
    }

    static array_getPercentageDifference(array_newValue, array_oldValue){
        let container = [];
        let max = (array_newValue.length <= array_oldValue.length) ? array_newValue.length : array_oldValue.length;
        for(let i = 0; i < max; i++){
            // let result =  (array_one[i] <= array_two[i]) ? 1 - (array_one[i] / array_two[i]) : -1 * (1 - (array_two[i] / array_one[i]));
            let result;

            if(array_oldValue[i] == 0){
                result = -1;
            }else{
                result = (array_oldValue[i] - array_newValue[i])/array_oldValue[i];
            }
        
            container.push(result);
        }    
        
        return container;
    }

    static array_getAmountOfChange(array_one, array_two){
        let container = [];
        let max = (array_one.length <= array_two.length) ? array_one.length : array_two.length;
        for(let i = 0; i < max; i++){
            container.push((array_one[i] - array_two[i]));
        }
        return container;
    }
}

class Automation{
    static setWindX(particleArray, array_basis, arrayOfPercentage, progress_difference){
        for( let i = 0; i < particleArray.length; i++){
            particleArray[i].DirX -= (array_basis[i] * arrayOfPercentage[i] * progress_difference);
        }
            
    }   

    static setWindY(particleArray, array_basis, arrayOfPercentage, progress_difference){
        for( let i = 0; i < particleArray.length; i++){
            particleArray[i].DirY -= (array_basis[i] * arrayOfPercentage[i] * progress_difference);
        }
    }

    static setParticleSize(particleArray, array_basis, arrayOfPercentage, progress_difference){
        for( let i = 0; i < particleArray.length; i++){
            let result = (array_basis[i] * arrayOfPercentage[i] * progress_difference);
            if(particleArray[i].size - result < 0 ){
                result = 0;
            }
            particleArray[i].size -= result;
        }
    }

    static setOpacity(particleArray, array_basis, arrayOfPercentage, progress_difference){
        for( let i = 0; i < particleArray.length; i++){
            let result = (array_basis[i] * arrayOfPercentage[i] * progress_difference);
            // if(particleArray[i].opacity - result <= -2){
            //     result = 0;
            // }
            particleArray[i].opacity -= result;

            if(i == particleArray.length -1){
                // console.log(array_basis[1]);
            }
        }
        // console.log(arrayOfPercentage);
    }
}