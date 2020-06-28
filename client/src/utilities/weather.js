export function getMoodIcon(group) {
    switch (group) {
        case 'Clear':   // 吃飯
            return 'fa fa-thumbs-up';
        case 'Clouds':  // 運動
            return 'fa fa-bicycle';
        case 'Drizzle': // 讀書
            return 'fa fa-thumbs-up';
        
        // case 'Thunder':
        //     return 'fa fa-bolt';
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
