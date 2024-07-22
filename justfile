set shell := ["zsh", "-uc"]

# user and repo
user        := `whoami`
current_dir := `basename $( pwd )`

# Colors
RED     := "\\u001b[31m"
GREEN   := "\\u001b[32m"
YELLOW  := "\\u001b[33m"
BLUE    := "\\u001b[34m"
MAGENTA := "\\u001b[35m"
BOLD    := "\\u001b[1m"
RESET   := "\\u001b[0m"

_default:
    @echo "\nHi {{GREEN}}{{user}}!{{RESET}} Welcome to {{RED}}{{current_dir}}{{RESET}}\n"

    @just --list --unsorted

# start
start:
    ionic serve

