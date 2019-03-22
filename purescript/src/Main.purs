module Main where

import Prelude
import Effect (Effect)
import Simple.JSON as JSON
import Data.Maybe (Maybe(..))
import QuickServe (GET, quickServe)

main :: Effect Unit
main = do

  let opts = { hostname: "localhost", port: 8080, backlog: Nothing }

  let n = [
        {
            firstName: "Pablo",
            lastName: "Rosales"
        },
        {
            firstName: "Anon",
            lastName: "Anon"
        }
  ]

  let listOfNames = JSON.writeJSON n

  quickServe opts $
    let
        names :: GET String
        names = pure listOfNames
    in { names }