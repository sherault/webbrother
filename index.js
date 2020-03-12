require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
const uuidv4 = require('uuid/v4')
const { exec } = require('child_process')

app.use(express.json(limit: '50mb'))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(cors())

app.post('/', function (req, res) {
	const imgBase64 = req.body.img;
	const data = imgBase64.replace(/^data:image\/\w+;base64,/, "");
	const buf = Buffer.from(data, 'base64');
	const filename = `/tmp/image-${uuidv4()}.png`
	console.log(filename)
	fs.writeFileSync(filename, buf);
	exec(`${process.env.BROTHER_QL_BIN} print -l 62 ${filename}`, (err) => {
		if (err) {
			console.log(err);
			return;
		}
		fs.unlinkSync(filename)
	})
	res.send('ok');
})
 
app.listen(3000)

