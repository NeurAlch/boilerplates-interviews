package main

import (
	"net/http"
	"encoding/json"
)

type Name struct {
	FirstName string `json:"firstname"`
	LastName string `json:"lastname"`
}

func apiNames(res http.ResponseWriter, req *http.Request) {

	names := []Name{}

	me := Name{
		FirstName: "Pablo",
		LastName: "Rosales",
	}

	you := Name{
		FirstName: "Anon",
		LastName: "Anon",
	}

	names = append(names, me)
	names = append(names, you)

	json.NewEncoder(res).Encode(names)

}

func main() {

	http.HandleFunc("/", apiNames)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}

}