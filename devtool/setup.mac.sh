#!/bin/sh

function main() {
    brew install node@18 yarn
}

test -e $(which brew) && main()

