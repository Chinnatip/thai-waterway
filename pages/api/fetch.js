import Cors from 'cors'
import axios from 'axios'
import initMiddleware from '../../method/middleware'

const cheerio = require('cheerio');

const cors = initMiddleware(
  Cors({ methods: ['GET', 'POST', 'OPTIONS'], })
)

const TI_URL= 'https://tiwrm.hii.or.th/DATA/REPORT/php/chart/chaopraya/small/chaopraya.php';

export default async function handler(req, res) {
  await cors(req, res)
  if(req.method === 'GET'){
    const response = await axios(TI_URL);
      const $ = cheerio.load(response.data);
      let resp = {}


      var scripts = $('script').filter(function() {
          return ($(this).html().indexOf('var json_data =') > -1);
      });

      if (scripts.length === 1) {
        var text = $(scripts[0]).html();
        var str = text.substr(text.indexOf(' '), text.indexOf(';'));
        resp = JSON.parse(str.substr(18,).slice(0, -1))[0]
      }

      res.status(200).json({resp})
  }else{
    res.json({ message: 'Some error occurred!' })
  }
}
