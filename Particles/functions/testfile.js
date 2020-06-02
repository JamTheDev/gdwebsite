

const doge = new ParticleSystem();
doge.setNumParticles(100);
doge.setParticleSize(20);
doge.setParticleSizeRandomness(100);
doge.setWindX(50);
doge.setWindXRandomness(0.5); 
doge.setWindY(-25);
doge.setWindYRandomness(0.5);
doge.setOpacity(0);
doge.setOpacityRandomness(1);
doge.init();
doge.animate();

doge.automate({
    timeExpression: TimeEquation.Ease.EaseOut(TimeEquation.quad),
    duration: 1000,
    property: ParticleProperties.WindX,
    value: 5
});

doge.automate({
  timeExpression: TimeEquation.Ease.EaseOut(TimeEquation.quad),
  duration: 1000,
  property: ParticleProperties.WindY,
  value: -2.5
});

// doge.automate({
//   timeExpression: TimeEquation.Ease.EaseOut(TimeEquation.linear),
//   duration: 300,
//   property: ParticleProperties.ParticleSize,
//   value: 15
// });

doge.automate({
  timeExpression: TimeEquation.Ease.EaseOut(TimeEquation.linear),
  duration: 300,
  property: ParticleProperties.Opacity,
  value: 1
});