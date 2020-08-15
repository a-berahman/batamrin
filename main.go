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

	//load enviroment variables
	err := godotenv.Load(common.EnvConfig)
	if err != nil {
		log.Fatal("load enviroment face to : ", err)
	}
	port := fmt.Sprint(":", os.Getenv("PORT"))

	http.HandleFunc("/", mainPage.Index)

	http.Handle("/public/", http.StripPrefix("/public", http.FileServer(http.Dir("public"))))

	http.ListenAndServe(port, nil)
}
