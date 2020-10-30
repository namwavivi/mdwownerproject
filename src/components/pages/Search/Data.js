
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
   hosts: [ 'http://localhost:9200']
});
client.ping({
     requestTimeout: 30000,
 }, function(error) {
     if (error) {
         console.error('Elasticsearch cluster is down!');
     } else {
         console.log('Everything is ok');
     }
 });
client.indices.create({
  index: 'scotch.io-tutorial'
}, function(error, response, status) {
  if (error) {
      console.log(error);
  } else {
      console.log("created a new index", response);
  }
});

const owners = require('./owner.json');
var bulk = [];
owners.forEach(owner =>{
   bulk.push({index:{ 
                 _index:"scotch.io-tutorial", 
                 _type:"owners_list",
             }          
         })
  bulk.push(owner)
})
client.bulk({body:bulk}, function( err, response  ){ 
         if( err ){ 
             console.log("Failed Bulk operation".red, err) 
         } else { 
             console.log("Successfully imported %s".green, owners.length); 
         } 
}); 
  
  export const homeObjTwo = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: '',
    description:
      '',
    buttonLabel: '',
    imgStart: '',
    img: 'images/',
    alt: ''
  };
  
  export const homeObjThree = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '',
    headline: '',
    description:
      "",
    buttonLabel: '',
    imgStart: '',
    img: 'images/',
    alt: ''
  };
  
  export const homeObjFour = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: '',
    description:
      '',
    buttonLabel: '',
    imgStart: '',
    img: 'images/',
    alt: ''
  };