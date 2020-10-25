const express = require('express');
const app = express();

const path = require('path');

const PORT = 3000;

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.use(express.static(__dirname + '/public'));

// app.post('/images/logo2.png', function (req, res) {
//     var options = {
//         headers: {
//             contentType: 'image/png'
//         }
//     }

//     var filepath = req.params.name;
//     res.sendFile(filepath, options);
// });

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
});