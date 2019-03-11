#!/usr/bin/env python3

import asyncio

async def main():
    print("Hello World")
    await asyncio.sleep(1)
    print("Bye Bye")

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(asyncio.wait([main()]))
    loop.close()