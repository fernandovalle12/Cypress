
var getTestimonials = function() {
  var testimonials = [
    {
      id: 1,
      name: 'Fulano de tal',
      company: 'Catolica SC',
      title: 'Cara da TI',
      testimony: 'Eu gosto muito de javascript'
    },
    {
      id: 2,
      name: 'Joaozinho',
      company: 'Catolica SC',
      title: 'Cara da Secretaria',
      testimony: 'Eu tb gosto muito de javascript'
    }
  ];

  return testimonials;
}

module.exports = {
  getTestimonials: getTestimonials
}

