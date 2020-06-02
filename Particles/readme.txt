First things first, the target html requires a canvas element with an id name of "canvas_main"

Second, you need to instantiate class named "ParticleSystem"

Methods:

Only basic methods of this system is included (Cuz... Documentation sucks :( )

ParticleSystem.setNumParticles(num);
    Parameter:
        num - Number of Particles that would be emitted to the canvas
    Function: Sets the starting number of particles;
    Note: Do not put negative inputs

ParticleSystem.setParticleSize(num);
    Parameter:
        num - Size of the particle
    Function: Sets the starting size of particles;
    Note: Do not put negative inputs

ParticleSystem.setParticleSizeRandomness(percentage);
     Parameter:
        percentage - Rate of random particle size
    Function: Sets the starting size randomness of particles;
    Note: Values should be between 0 - 1

ParticleSystem.setWindX(num);
    Parameter:
        num - Horizontal speed of the particle
    Function: Sets the starting horizontal speed of particles;
    Note: Positive value goes left to right while Negative value goes right to left

ParticleSystem.setWindXRandomness(percentage); 
    Parameter:
        percentage -  Rate of randomness of the horizontal speed of the particle
    Function: Sets the starting horizontal speed randomness of particles;
    Note: Values should be between 0 - 1
    
ParticleSystem.setWindY(num);
      Parameter:
        num - Vertical speed of the particle
    Function: Sets the starting vertical speed of particles;
    Note: Positive value goes down while Negative value goes up

ParticleSystem.setWindYRandomness(percentage);
    Parameter:
        percentage -  Rate of randomness of the vertical speed of the particle
    Function: Sets the starting vertical speed randomness of particles;
    Note: Values should be between 0 - 1

ParticleSystem.setOpacity(percentage);
    Parameter:
        percentage -  Opacity of the particle
    Function: Sets the starting opacity of particles;
    Note: Min: 0 Max: 1

ParticleSystem.setOpacityRandomness(percentage);
    Parameter:
        percentage -  Random Opacity Rate of the particle
    Function: Sets the starting opacity randomness of particles;
    Note: Values should be between 0 - 1

ParticleSystem.init();
    Parameter: None
    Function: Initialize the particles only
    Note: The particles will start moving only when the method ParticleSystem.animate() is called after this method

ParticleSystem.animate();
    Parameter: None
    Function: Animates the Particles

ParticleSystem.automate({timeExpression, duration, property, value})
    Parameters: 
        timeExpression
            -Input Type: function
            -Description: Rate of change while performing the automation
            -Functions for timeExpression

                TimeEquation.linear
                TimeEquation.quad
                TimeEquation.bounce

                The remaining timeExpression requires a parameter TimeEquation which can be either the first 3 of the functions

                TimeEquation.Ease.EaseOut(timeEquation)
                TimeEquation.Ease.EaseInOut(timeEquation)
                
        duration 
            -Input Type: Integer
            -Description: Duration of the automation

        property
            -Input Type: String
            -Description: The property of the particle you want to automate
            -Working Static String for property

                ParticleProperties.ParticleSize
                ParticleProperties.WindX
                ParticleProperties.WindY
                ParticleProperties.Opacity
        value
            -Input Type: Integer
            -Description: The new value for that property that will be distribute to the particles

    Function: Changes the behavior of any property of the particle with animation.


In conclusion, I really suck at documentation so feel free to explore my messy code ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)
