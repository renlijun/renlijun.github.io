# swoole

::: warning 注意
前提是要安装了Swoole扩展。
:::


## HTTP Server

``` php
<?php

//或者0.0.0.0监听全部地址
$httpServer = new swoole_http_server("0.0.0.0", 8811);

$httpServer->set([
    'enable_static_handler'=>true, //
    'document_root'=>"/study-swoole/data" //静态资源默认存放的路径
]);

$httpServer->on('request', function($request, $response){

    //printr($request->get);
    $response->cookie("cookie_demo", "renlj", 100);
    $response->end("<h1>http server</h1>".json_encode($request->get));
});

$httpServer->start();

?>
```

## TCP

### 客户端

``` php
<?php

//连接swoole tcp 服务
$client = new swoole_client(SWOOLE_SOCK_TCP);

//
if ( $client->connect("127.0.01", 9501) ) {
    echo 'connect error';
}

//php cli内置常量
fwrite(STDOUT, "请输入消息: ");
$msg = trim(fgets(STDIN));

//发送给 tcp server
$client->send($msg);

//接受来自server到数据
$serverResult = $client->recv();
echo $serverResult;

?>
```

### 服务端

``` php
<?php 

//创建Server对象，监听 127.0.0.1:9501端口
$serv = new swoole_server("127.0.0.1", 9501); 

$serv->set([
    'worker_num'=>20, //worker进程数,cpu 1-4
    'max_request'=>10000
]);

//监听连接进入事件
$serv->on('connect', function ($serv, $fd, $from_id) {  
    echo "Client: {$from_id} - {$fd} Connect.\n";
});

//监听数据接收事件
$serv->on('receive', function ($serv, $fd, $from_id, $data) {
    $serv->send($fd, "Server: {$from_id} - {$fd} - ".$data);
});

//监听连接关闭事件
$serv->on('close', function ($serv, $fd) {
    echo "Client: Close.\n";
});

//启动服务器
$serv->start(); 

?>

```

## UDP

### 客户端

```php
<?php

//连接swoole tcp 服务
$client = new swoole_client(SWOOLE_SOCK_UDP);

//
if ( $client->connect("127.0.01", 9501) ) {
    echo 'connect error';
}

//php cli内置常量
fwrite(STDOUT, "请输入消息: ");
$msg = trim(fgets(STDIN));

//发送给 tcp server
$client->send($msg);

//接受来自server到数据
$serverResult = $client->recv();
echo $serverResult;

?>
```

### 服务端

```php

<?php 

//创建Server对象，监听 127.0.0.1:9501端口
$server = new swoole_server("127.0.0.1", 9501,SWOOLE_PROCESS, SWOOLE_SOCK_UDP); 

$server->set([
    'worker_num'=>8, //worker进程数,cpu 1-4
    'max_request'=>10000
]);

$server->on('Packet', function (swoole_server $serv, $data, $addr)
{
    $serv->sendto($addr['address'], $addr['port'], "udp: $data", $addr['server_socket']);
});

//启动服务器
$server->start(); 

?>
```

## Web Socker 

### 客户端

``` html
<html>
    <body>
        <h1>websocket - ceshi</h1>
    </body>
    <script>
        var wsUrl = "ws://127.0.0.1:8812";

        var websocket = new WebSocket(wsUrl);

        //实例对象的onopen属性
        websocket.onopen = function(evt){
            websocket.send("hello ws client send");
            console.log('connect-swoole-success');
        }

        //实例化 onmessage
        websocket.onmessage = function(evt){
            console.log('ws-server-return-data : '+evt.data);
        }

        websocket.close = function(evt){
            console.log("ws-server-close");
        }

        websocket.onerror = function(evt, e){
            console.log("error"+evt.data);
        }

    </script>
</html>
```

### 服务端
``` php
<?php 

$server = new swoole_websocket_server("0.0.0.0", 8812);

$server->on('open', function (swoole_websocket_server $server, $request) {
    echo "server: handshake success with fd{$request->fd}\n";
});

$server->on('message', function (swoole_websocket_server $server, $frame) {
    echo "message receive from {$frame->fd}:{$frame->data},opcode:{$frame->opcode},fin:{$frame->finish}\n";
    $server->push($frame->fd, "this is server");
});

$server->on('close', function ($ser, $fd) {
    echo "client {$fd} closed\n";
});

$server->start();

?>
```