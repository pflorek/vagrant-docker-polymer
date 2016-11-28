#!/usr/bin/env bash

# Fix CRLF->LF
# yum install -y dos2unix
apt-get install -y dos2unix
dos2unix /vagrant/setup/*.sh

for script in /vagrant/setup/*.sh; do
    . $script
done

exit 0
