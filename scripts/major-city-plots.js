

$(function () {
	
	// state, code, suspect, confirmed, recovered, death
var states = []

//fetch("https://raw.githubusercontent.com/gabrielcesar/covid-br/master/data/covid.json")
fetch("https://gabrielcesar.github.io/covid-br/data/covid.json")
    .then(response => response.json())
    .then(function(data)
    {
        for (var state = 0; state < data.length; state ++){
			states.push({'state': data[state]['state'], 'code': data[state]['code'], 'suspect': data[state]['suspect'], 'confirmed': data[state]['confirmed'], 'recovered': data[state]['recovered'], 'death': data[state]['death']})
			console.log(states[state])
			
				}
            
        console.log(states[0]['code']+' state')
	$("#map-area").mapael({
			map: {
				name: "nigeria",
				defaultArea: {
					attrs: {
						fill: "#f5faff",
						stroke: "#ced8d0",
					}
				},
				defaultPlot: {
					size: 8,
				}
			},
			plots: {
				'abia': {
					latitude: 5.25,
					longitude: 7.403,
					tooltip: {content:'<div class=\'arwen_icon_tooltip arwen_flag_' + states[0]['state'] + '\'></div><span id=\'arwen_tooltip_label\'>' + states[0]['state'] + "</span><br>Confirmados <span class='arwen_color_orange'>" + states[0]['confirmed'] + "</span><br>Mortes <span class='arwen_color_red'>" + states[0]['death'] + "</span>"}
				},
				'adamawa': {
					latitude: 9.3,
					longitude: 12.5,
					tooltip: {content: "Adamawa State<br />"
						+"<small><strong>Capital: </strong>Yola</small>"}
				},
				'akwa-ibom': {
					latitude: 5,
					longitude: 7.833,
					tooltip: {content: "Akwa-Ibom State<br />"
						+"<small><strong>Capital: </strong>Uyo</small>"}
				},
				'anambra': {
					latitude: 6.333,
					longitude: 7,
					tooltip: {content: "Anambra State<br />"
						+"<small><strong>Capital: </strong>Awka</small>"}
				},
				'bauchi': {
					latitude: 10.5,
					longitude: 10,
					tooltip: {content: "Bauchi State<br />"
						+"<small><strong>Capital: </strong>Bauchi</small>"}
				},
				'bayelsa': {
					latitude: 4.7,
					longitude: 5.9,
					tooltip: {content: "Bayelsa State<br />"
						+"<small><strong>Capital: </strong>Yenagua</small>"}
				},
				'benue': {
					latitude: 7.333,
					longitude: 8.75,
					tooltip: {content: "Benue State<br />"
						+"<small><strong>Capital: </strong>Makurdi</small>"}
				},
				'borno': {
					latitude: 11.5,
					longitude: 13,
					tooltip: {content: "Borno State<br />"
						+"<small><strong>Capital: </strong>Maiduguri</small>"}
				},
				'cross-river': {
					latitude: 5.75,
					longitude: 8.5,
					tooltip: {content: "Cross-River State<br />"
						+"<small><strong>Capital: </strong>Calabar</small>"}
				},
				'delta': {
					latitude: 5.5,
					longitude: 6,
					tooltip: {content: "Delta State<br />"
						+"<small><strong>Capital: </strong>Asaba</small>"}
				},
				'ebonyi': {
					latitude: 6.25,
					longitude: 8.083,
					tooltip: {content: "Ebonyi State<br />"
						+"<small><strong>Capital: </strong>Abakaliki</small>"}
				},
				'edo': {
					latitude: 6.5,
					longitude: 6,
					tooltip: {content: "Edo State<br />"
						+"<small><strong>Capital: </strong>Benin City</small>"}
				},
				'ekiti': {
					latitude: 7.667,
					longitude: 5.25,
					tooltip: {content: "Ekiti State<br />"
						+"<small><strong>Capital: </strong>Ado-Ekiti</small>"}
				},
				'enugu': {
					latitude: 6.5,
					longitude: 7.5,
					tooltip: {content: "Enugu State<br />"
						+"<small><strong>Capital: </strong>Enugu</small>"}
				},
				'fct': {
					latitude: 8.833333,
					longitude: 7.166667,
					tooltip: {content: "Federal Capital<br />"
						+"<small><strong>Capital: </strong>Abuja</small>"}
				},
				'gombe': {
					latitude: 10.25,
					longitude: 11.167,
					tooltip: {content: "Gombe State<br />"
						+"<small><strong>Capital: </strong>Gombe</small>"}
				},
				'imo': {
					latitude: 5.483,
					longitude: 7.033,
					tooltip: {content: "Imo State<br />"
						+"<small><strong>Capital: </strong>Owerri</small>"}
				},
				'jigawa': {
					latitude: 12,
					longitude: 9.75,
					tooltip: {content: "Jigawa State<br />"
						+"<small><strong>Capital: </strong>Dutse</small>"}
				},
				'kaduna': {
					latitude: 10.333,
					longitude: 7.75,
					tooltip: {content: "Kaduna State<br />"
						+"<small><strong>Capital: </strong>Kaduna</small>"}
				},
				'kano': {
					latitude: 11.5,
					longitude: 8.5,
					tooltip: {content: "Kano State<br />"
						+"<small><strong>Capital: </strong>Kano</small>"}
				},
				'katsina': {
					latitude: 12.25,
					longitude: 7.5,
					tooltip: {content: "Katsina State<br />"
						+"<small><strong>Capital: </strong>Katsina</small>"}
				},
				'kebbi': {
					latitude: 11.5,
					longitude: 4,
					tooltip: {content: "Kebbi State<br />"
						+"<small><strong>Capital: </strong>Birnin Kebbi</small>"}
				},
				'kogi': {
					latitude: 7.5,
					longitude: 6.7,
					tooltip: {content: "Kogi State<br />"
						+"<small><strong>Capital: </strong>Lokoja</small>"}
				},
				'kwara': {
					latitude: 8.5,
					longitude: 5,
					tooltip: {content: "Kwara State<br />"
						+"<small><strong>Capital: </strong>Ilorin</small>"}
				},
				'lagos': {
					latitude: 6.583,
					longitude: 3.75,
					tooltip: {content: "Lagos State<br />"
						+"<small><strong>Capital: </strong>Ikeja</small>"}
				},
				'nasarawa': {
					latitude: 8.533,
					longitude: 8.3,
					tooltip: {content: "Nasarawa State<br />"
						+"<small><strong>Capital: </strong>Lafia</small>"}
				},
				'niger': {
					latitude: 10,
					longitude: 6,
					tooltip: {content: "Niger State<br />"
						+"<small><strong>Capital: </strong>Minna</small>"}
				},
				'ogun': {
					latitude: 7,
					longitude: 3.583,
					tooltip: {content: "Ogun State<br />"
						+"<small><strong>Capital: </strong>Abeokuta</small>"}
				},
				'ondo': {
					latitude: 7.167,
					longitude: 5.083,
					tooltip: {content: "Ondo State<br />"
						+"<small><strong>Capital: </strong>Akure</small>"}
				},
				'osun': {
					latitude: 7.5,
					longitude: 4.5,
					tooltip: {content: "Osun State<br />"
						+"<small><strong>Capital: </strong>Oshogbo</small>"}
				},
				'oyo': {
					latitude: 8,
					longitude: 4,
					tooltip: {content: "Oyo State<br />"
						+"<small><strong>Capital: </strong>Ibadan</small>"}
				},
				'plateau': {
					latitude: 9.167,
					longitude: 9.75,
					tooltip: {content: "Plateau State<br />"
						+"<small><strong>Capital: </strong>Jos</small>"}
				},
				'rivers': {
					latitude: 4.75,
					longitude: 6.83,
					tooltip: {content: "Rivers State<br />"
						+"<small><strong>Capital: </strong>Port Hacourt</small>"}
				},
				'sokoto': {
					latitude: 13.083,
					longitude: 5.25,
					tooltip: {content: "Sokoto State<br />"
						+"<small><strong>Capital: </strong>Sokoto</small>"}
				},
				'taraba': {
					latitude: 8,
					longitude: 10.5,
					tooltip: {content: "Taraba State<br />"
						+"<small><strong>Capital: </strong>Jalingo</small>"}
				},
				'yobe': {
					latitude: 12.0,
					longitude: 11.5,
					tooltip: {content: "Yobe State<br />"
						+"<small><strong>Capital: </strong>Damaturu</small>"}
				},
				'zamfara': {
					latitude: 12.167,
					longitude: 6.25,
					tooltip: {content: "Zamfara State<br />"
						+"<small><strong>Capital: </strong>Gusau</small>"}
				},
			},
			// links: {
			//     'link1': {
			//         factor: -0.3,
			//         between: ['kano', 'lagos'],
			//         attrs: {
			//             "stroke-width": 2
			//         }
			//     }
			// }
		});
    })
	
    
});