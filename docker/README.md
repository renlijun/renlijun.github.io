# 快速上手

## 相关命令

### 运行
    service docker start

### 查看Images

    docker images

### 查看运行中的服务

    docker ps

### 查看全部的服务

    docker ps -a

### 进入某个容器

    docker exec -it '容器ID' bash 
    docker exec -it '容器ID' /bin/bash

### 查看日志

    docker logs -f '容器ID'

### 创建数据卷：

    docker volume create --name v1

### 查看数据卷：

    docker inspect '数据库名称'

### 删除数据库

    docker volume rm 数据卷名称

### 删除容器时，删除数据库

    docker rm -v '容器ID'
