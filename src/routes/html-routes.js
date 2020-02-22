
const path = require('path');

module.exports = function(app) {
    app.get('/', (req ,res) => {
        // eslint-disable-next-line no-undef
        res.sendFile(path.join(__dirname + '../../../public/index.html'));
    });

    app.get('/stats', (req ,res) => {
        // eslint-disable-next-line no-undef
        res.sendFile(path.join(__dirname + '../../../public/stats.html'));
    });

    app.get('/exercise', (req ,res) => {
        // eslint-disable-next-line no-undef
        res.sendFile(path.join(__dirname + '../../../public/exercise.html'));
    });
};