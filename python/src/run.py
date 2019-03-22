import asyncio
from aiohttp import web

def api_names(request):

    names = [
        {
            "firstName": "Pablo",
            "lastName": "Rosales",
        },
        {
            "firstName": "Anon",
            "lastName": "Anon",
        },
    ]

    return web.json_response(names)


if __name__ == "__main__":

    app = web.Application()

    app.add_routes([
        web.get("/names", api_names),
    ])

    web.run_app(app)