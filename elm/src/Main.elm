module Main exposing (..)

import Browser
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)

-- Our string
type alias Model
    = String

-- Our initial value for the Model
init : Model
init =
    "Hello World"

-- Just return the value of the Model
update : msg -> Model -> Model
update msg model =
    model

view : String -> Html msg
view str =
    div [ class "p-5" ] [
        div [ class "text-white" ] [ text str ]
    ]

main =
    Browser.sandbox
        {
            init = init
        ,   view = view
        ,   update = update
        }