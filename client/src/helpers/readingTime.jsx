// Import Reading Time
const readingTime = require('reading-time');

const estimateTime = (text) =>{
    const stats = readingTime(text);
    return stats.text
}

export default estimateTime
