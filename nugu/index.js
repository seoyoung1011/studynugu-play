const uuid = require('uuid').v4;
const _ = require('lodash');
const express = require('express');
var app = express();
const sendData = require('../android.js');

class NUGURequest{
    constructor(httpReq){
        this.context = httpReq.body.context
        this.action = httpReq.body.action
    };

    do(nuguResponse){
        this.actionRequest(nuguResponse);
    }

    actionRequest(nuguResponse){
        console.log('actionRequest');
        console.dir(this.action);

        const actionName = this.action.actionName;
        const parameters = this.action.parameters;

        switch(actionName){
            case 'startTimer':
                console.log('startTimer');
                sendData('startTimer');

                break;
            case 'recordTime':
                console.log('recordTime');
                sendData('recordTime');

                break;
            case 'remainTime':
                console.log('remainTime');
                sendData('remainTime');
                
                break;
        }

    }
}

class NUGUResponse{
    constructor(){
        console.log('NUGUResponse constructor');

        this.verstion = '1.0.0';
        this.resultCode = 'OK';
        this.output = {};
        this.directives = []
    }
}

const nuguReq = function(httpReq, httpRes, next){
    nuguResponse = new NUGUResponse()
    nuguRequest = new NUGURequest(httpReq)
    nuguRequest.do(nuguResponse)
    console.log('NUGU Response')
    return httpRes.send(nuguResponse)
};

module.exports = nuguReq;