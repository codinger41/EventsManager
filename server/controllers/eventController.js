import express from 'express';
import { events } from '../models/eventsData'

exports.getAllEvents = (req, res) => {
    res.json({
        event1: events[0],
        event2: events[1],
        event3: events[2]
    });
};

exports.createEvent = (req, res) => {
    if(!req.body.name){
        return res.json({
            message: 'Event Naame missing',
            error: true
        });
    }
    events.push(req.body)
        return res.json({
            message: 'Success',
            error: false
        })
};

exports.updateEvent = (req, res) => {
     for(let i = 0; i < events.length; i++){
         if(events[i].id === parseInt(req.params.id, 10)){
            events[i].name = req.body.name;
            events[i].date = req.body.date;
            events[i].description = req.body.description;
             return res.json({
                message: "success",
                error: false
            });
         }
        
     };
     res.status(404).json({
        message: 'Error! event not found',
        error: false
     });
};

exports.getEventById = (req, res) => {
  for (let i = 0; i < events.length; i++) {
    if (events[i].id === parseInt(req.params.id, 10)) {
      return res.json({
        event1: events[i],
        message: "success",
        error: false
      });
    }
  }
  res.status(404).json({
    message: "Error! event not found",
    error: false
 });
};