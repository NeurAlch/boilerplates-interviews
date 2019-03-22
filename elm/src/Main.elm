import Browser
import Html exposing (Html, div, text)

main =
  Browser.sandbox { init = init, update = update, view = view }

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

-- Render the div
view : Model -> Html msg
view model =
    div [] [ text model ]