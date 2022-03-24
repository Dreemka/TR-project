export default function langFilter(value , format = 'ru'){
    if (format.includes('ru')) {
        if (value === 'new') value = 'новая'
        if (value === 'process_ended') value = 'закрытая'
    }
    if (format.includes('en')) {
        if (value === 'new') value = 'new'
        if (value === 'process_ended') value = 'process ended'
    }
    return value
  }