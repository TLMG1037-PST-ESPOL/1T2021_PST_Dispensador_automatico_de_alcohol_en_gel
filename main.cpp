#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>

// Replace with your network credentials
const char* ssid     = "NETLIFE-ARRIBA";
const char* password = "lan_0194G";
const char* serverName = "https://dispensador-de-gel.herokuapp.com/";

const int distancia = 6;
const int confirmationDelay = 200;
const int tbombeo = 3500;
const int tiempoActualizacion = 30000;
const int tParpadeo = 300;

bool antesCasiVacio;
bool ahoraCasiVacio;
const int Motor = 13;
const int Trigger = 4;   //Pin digital 4 para el Trigger del sensor
const int Echo = 5;   //Pin digital 5 para el Echo del sensor
const int SensorNivel = 36;
const int indicadorNivel = 32;
const int indicadorEncendido = 19;
long t; //timepo que demora en llegar el eco
long d; //distancia en centimetros

bool enEspera = true;
bool manoCerca;
bool abortar;
int no_usos = 0;

unsigned long t0;
unsigned long t00;
unsigned long t000;

boolean isManoCerca(){
  digitalWrite(Trigger, HIGH);
  delayMicroseconds(10);          //Enviamos un pulso de 10us
  digitalWrite(Trigger, LOW);
  
  t = pulseIn(Echo, HIGH); //obtenemos el ancho del pulso
  d = t/59;             //escalamos el tiempo a una distancia en cm
  
  //Serial.print("    nivel: ");
  //Serial.print(digitalRead(SensorNivel));
  /*
  Serial.print("    abortar: ");
  Serial.print(abortar);
  Serial.print("    enEspera: ");
  Serial.print(enEspera);
  Serial.print("    Distancia: ");
  Serial.print(d);      //Enviamos serialmente el valor de la distancia
  Serial.print("cm");
  Serial.println();
  */
  //delay(100);          //Hacemos una pausa de 100ms
  return d <= distancia;
}

boolean isCasiVacio(){
  //Serial.println(analogRead(SensorNivel));
  if (analogRead(SensorNivel)<2000){
    return true;
  }else{
    return false;
  }
}

boolean postEstado(){
  Serial.print("no_usos = ");
  Serial.print(no_usos);
  Serial.print("   vacío = ");
  Serial.print(ahoraCasiVacio);

  //Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;
    
      // Your Domain name with URL path or IP address with path
      http.begin("https://dispensador-de-gel.herokuapp.com/dispensador/2709");

      // Specify content-type header
      http.addHeader("Content-Type", "application/json");
      Serial.println("{\"no_usos\":\"" + (String) no_usos + "\",\"nivel_bajo\":\"" + (String) ahoraCasiVacio + "\"}");
      // Send HTTP POST request
      int httpResponseCode = http.PUT("{\"no_usos\":\"" + (String) no_usos + "\",\"nivel_bajo\":\"" + (String) ahoraCasiVacio + "\"}");
     
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
        
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }

  return false;
}

void setup() {
  Serial.begin(115200);

  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  int count = 0;
  while(WiFi.status() != WL_CONNECTED) { 
    delay(500);
    Serial.print(".");
    count ++;
    if (count>6) ESP.restart();
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());

  pinMode(Trigger, OUTPUT); //pin como salida
  pinMode(Echo, INPUT);  //pin como entrada
  pinMode(Motor, OUTPUT);
  pinMode(indicadorEncendido, OUTPUT);
  digitalWrite(indicadorEncendido, HIGH);
  pinMode(indicadorNivel, OUTPUT);
  pinMode(SensorNivel, INPUT);
  digitalWrite(Trigger, LOW); //Inicializamos el pin con 0
  digitalWrite(Motor, LOW);
  t000 = millis();
}


void loop(){
  ahoraCasiVacio = isCasiVacio();
  if (antesCasiVacio != ahoraCasiVacio){
    postEstado();
    digitalWrite(indicadorNivel, ahoraCasiVacio);
    antesCasiVacio = ahoraCasiVacio;
  }

  if (enEspera) {
    t0 = millis();
    while (isManoCerca()){
      if(millis() - t0 >= confirmationDelay){
        digitalWrite(Motor, HIGH);

        abortar = false;
        t0 = millis();
        while ((millis() - t0 <= tbombeo) and !abortar){
          t00 = millis();
          digitalWrite(indicadorEncendido, ((millis()-t0)/tParpadeo)%2 == 0);
          while(not isManoCerca() and !abortar){
            if (millis() - t0 >= confirmationDelay) abortar = true;
          }
        }
        digitalWrite(indicadorEncendido, HIGH);

        digitalWrite(Motor, LOW);
        if (abortar) enEspera = true;
        else {
          enEspera = false;
          no_usos++;
          postEstado();
        }
        break;
      }
    }
  }

  if (!enEspera){
    t0 = millis();
    while (!isManoCerca()){
      if (millis() - t0 >= confirmationDelay){
        enEspera = true;
        break;
      }
    }
  }
}

