## webbrother

# Install && start

Need to install https://github.com/pklaus/brother_ql locally  
TLDR: `pip3 install --upgrade brother_ql`. Of course, you need python3 too.

Need to have NodeJS (and npm) install locally.  
Tips: Use nvm https://github.com/nvm-sh/nvm  

clone the repo

`npm i`

Export environnement variable, and don't forget to replace `<model>` by one supported by `brother_ql`, and `<device_address>` (usually `/dev/usb/lp0`)
```
export BROTHER_QL_MODEL=<model>
export BROTHER_QL_PRINTER=<device_address>
```

Launch the "server":

```
node index.js
```

# How to use

Get the IP of the local machine where you run de "server".  

Send a HTTP POST request in `application/json` containing an `img` field with a value of an image in base64 data url.  
Example:  
```
{
  img: "data:image/png;base64,bigbigbigstuffhere"
}
```


@TODO  
Simple docker image and docker-compose for easier setup
