const Booking = require('../api/booking');
const assert = require('assert');
const fetch = require('node-fetch');

describe('Restful Booker', () => {
    it('Returns all booking', () => {
        return fetch('https://restful-booker.herokuapp.com/booking')
        .then(res => res.text())
        .then(body => console.log(body));       
    })
    
    it('Creates a booking', () => {
        return fetch('https://restful-booker.herokuapp.com/booking', { 
            method: 'post',
            body: JSON.stringify({
                "firstname":"Jim",
                "lastname":"Brown",
                "totalprice":111,
                "depositpaid":true,
                "bookingdates":{
                    "checkin":"2018-01-01",
                    "checkout":"2019-01-01"
                },
                "additionalneeds":"Breakfast"
            }),
            headers: { 'Content-Type': 'application/json' },
         })
        .then(res => res.json())
        .then(json => console.log(json));
    })
})

