export function getMoodIcon(group) {
    switch (group) {
        case 'Clear':   // 吃飯
            return 'fa fa-coffee';
        case 'Clouds':  // 運動
            return 'fa fa-bicycle';
        case 'Drizzle': // 讀書
            return 'fa fa-list-alt';
        case 'Thunder':
            return 'fa fa-gamepad';
            
        // case 'Rain':
        //     return 'fa fa-umbrella';
        // case 'Snow':
        //     return 'fa fa-snowflake';
        // case 'Windy':
        //     return 'owf owf-905';

        default:
            return 'fa fa-question-circle';
    }
}
