let unit = '';

function convert() {
    // Checking for an empty temperature
    if (document.getElementById('temperature').value == '') {
        alert('Insert a temperature!');
        return;
    }

    // Checking whether no unit has been selected
    if (unit == '') {
        alert("Select the temperature's unit!");
        return;
    }

    const temperature = Number(document.getElementById('temperature').value);

    let celsiusTemperature = 0;
    let fahrenheitTemperature = 0;
    let kelvinTemperature = 0;

    switch (unit) {
        case 'celsius':
            celsiusTemperature = temperature;
            fahrenheitTemperature = convertToFahrenheit(temperature);
            kelvinTemperature = convertToKelvin(temperature);
            break;
        
        case 'fahrenheit':
            celsiusTemperature = convertToCelsius(temperature);
            fahrenheitTemperature = temperature;
            kelvinTemperature = convertToKelvin(temperature);
            break;

        case 'kelvin':
            celsiusTemperature = convertToCelsius(temperature);
            fahrenheitTemperature = convertToFahrenheit(temperature);
            kelvinTemperature = temperature;
            break;
    }

    print([celsiusTemperature, fahrenheitTemperature, kelvinTemperature]);
}

function changeUnit(selectedUnit) {
    unit = selectedUnit;
}

function convertToCelsius(temperature) {
    switch (unit) {
        case 'fahrenheit':
            return (temperature - 32) / 1.8;

        case 'kelvin':
            return temperature + 273.15;
        
        default:
            return "Invalid temperature.";
    }
}

function convertToFahrenheit(temperature) {
    switch (unit) {
        case 'celsius':
            return temperature * 1.8 + 32;
        
        case 'kelvin':
            return temperature * 1.8 - 459.67;

        default:
            return "Invalid temperature.";
    }
}

function convertToKelvin(temperature) {
    switch(unit) {
        case 'celsius':
            return temperature + 273.15;
        
        case 'fahrenheit':
            return (temperature + 459.67) / 1.8;

        default:
            return "Invalid temperature.";
    }
}

function print(temperatures) {
    if (document.querySelector('.output-card') !== null)
            document.querySelector('.output-card').remove();

    // Building the output
    const output = document.createElement('div');
    output.className = 'output-card';
    output.innerHTML = 'Celsius: ' + temperatures[0] + ' °C <br/>' +
                       'Fahrenheit: ' + temperatures[1] + ' F <br/>' +
                       'Kelvin: ' + temperatures[2] + ' K';

    // Inserting into DOM
    document.querySelector('.input-card').appendChild(output);
}