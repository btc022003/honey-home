#### 启动

```bash
npm i # 安装依赖项
node app.js # 启动项目
```

#### 说明

[管理后台访问地址](http://localhost:1337/manager)

```
管理后台默认登录信息
admin/admin
```

#### 部署

##### pm2 启动

```bash
pm2 start app.js --name home-honey -x -- --prod
```

##### nginx 配置

```
upstream sails_home_honey_upstream {
  server 127.0.0.1:1337;
  keepalive 64;
}

server {
  listen 80;
  server_name sails.demo.com; # 域名
  location / {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_max_temp_file_size 0;
    proxy_pass http://sails_home_honey_upstream/;
    proxy_redirect off;
    proxy_read_timeout 240s;
  }
  location /uploads {
    alias /yl_data/website/honey-home-server/.tmp/uploads/; # 设置静态资源目录
    autoindex on;
    autoindex_format html;
    autoindex_exact_size on;
    autoindex_localtime on;
    charset utf-8,gbk;
  }
}
```
