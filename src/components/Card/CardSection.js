import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
    <Card style={{ width: "20rem" }}>
      <CardHeader color="warning">Criptomonedas</CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Compra</h4>
        <Button color="primary" size="sm">Compra</Button>
        <h4 className={classes.cardTitle}>Venta</h4>
        <Button color="primary" size="sm">Venta</Button>
      </CardBody>
    </Card>
  );
}
{/* Un comentario JSX 
const WebSocket = require('ws');

var usd_value = 153;
var eur_value = 180;

var buyPercent = 0.35;
var sellPercent = 0.31;

var cryptoCoin = "btc"
var channelName = "live_trades_" + cryptoCoin +  "usd";

var coinType = "ARS";


let ws2 = new WebSocket("wss://ws.bitstamp.net");

let channelData = {
    event: "bts:subscribe",
    data: {
        channel: channelName,
    }
};


//enviar datos al websocket, suscribo al channel
ws2.onopen = function () {
    ws2.send(JSON.stringify(channelData));
};

ws2.onmessage = function (evt) {
    response = JSON.parse(evt.data);
    NewMessage(response);
};

ws2.onclose = function () {
    console.log("Websocket connection closed");      
};

function GetResult(price, percent){
    // realizar el calculo
    //Recordar chequear por la moneda seleccionada    
    if (coinType == "ARS") { 
        let conversion = price * usd_value
        let result = conversion * (1 + percent); 
        console.log(conversion);
        return result;                  
        }    
}

function NewMessage(data){
    if(data.channel == channelName){
        if(data.event == "trade"){
            let sellValue = GetResult(data.data.price, sellPercent); 
            let buyValue = GetResult(data.data.price, buyPercent);
            //this.state.buyValue = sellValue;
            //this.state.buyValue = sellValue;
        }
    }
}
*/}