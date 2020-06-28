export function getMoodIcon(group) {
    switch (group) {
        case 'Clear':
            return 'fa fa-university';
        case 'Clouds':
            return 'fa fa-university';
        case 'Drizzle':
            return 'fa fa-university';
        
        case 'Thunder':
            return 'fa fa-bolt';
        case 'Rain':
            return 'fa fa-umbrella';
        case 'Snow':
            return 'fa fa-snowflake';
        case 'Windy':
            return 'owf owf-905';
        default:
            return 'fa fa-question-circle';
    }
}
