#!/bin/bash
##set vars##
set -e;
export github_proxy="https://gh.con.sh/"

function get_github_latest()
{
    latest_url=$1

    curl -s -I  ${github_proxy}${latest_url}|grep -i location|awk -F/ '{print$NF}'|sed 's/v//g' > /tmp/version;dos2unix /tmp/version;
    echo `cat /tmp/version`;
}

version=`get_github_latest https://github.com/DependencyTrack/frontend/releases/latest`

if [ -d frontend-${version} ];then
    echo "code dir exists,skip download......"
else
    wget ${github_proxy}https://github.com/DependencyTrack/frontend/archive/refs/tags/${version}.tar.gz -O ${version}.tar.gz
    tar -xf ${version}.tar.gz

fi
cp dependency-track_to_cn.py frontend-${version}/src/i18n/locales/;

sed -i 's/=en/=cn/g' frontend-${version}/.env.development;
sed -i 's/=en/=cn/g' frontend-${version}/.env;

cd frontend-${version}/src/i18n/locales/;

python3 dependency-track_to_cn.py;

rm -f dependency-track_to_cn.py;

cd ../../../;
npm install;
npm run build;