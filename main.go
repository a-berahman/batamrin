package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/a-berahman/batamrin/common"
	"github.com/a-berahman/batamrin/mainPage"
	"github.com/joho/godotenv"
)

func main() {

	http.HandleFunc("/", mainPage.Index)
	http.HandleFunc("/index", mainPage.Index)

	//define public resources path
	http.Handle("/public/", http.StripPrefix("/public", http.FileServer(http.Dir("public"))))

	//load enviroment variables
	err := godotenv.Load(common.EnvConfig)
	if err != nil {
		log.Fatal("load enviroment face to : ", err)
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "123"
	}
	fmt.Println("live on port:", port)
	http.ListenAndServe(":"+port, nil)
}
