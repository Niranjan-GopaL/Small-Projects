#!/bin/sh
python3 main.py > render.dot 
dot -Tsvg render.dot > render.svg
explorer.exe .